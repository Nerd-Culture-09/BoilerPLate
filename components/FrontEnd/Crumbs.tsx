import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Crumbs() {
  const pathname = usePathname();
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState([{ name: "Home", href: "/" }]);

  useEffect(() => {
    // Skip adding if we are on the homepage
    if (pathname === "/") return;

    // Generate breadcrumb name from the path (you may customize this logic)
    const pathParts = pathname.split("/").filter(Boolean);
    const breadcrumbName = pathParts[pathParts.length - 1];

    const newBreadcrumb = {
      name: breadcrumbName.charAt(0).toUpperCase() + breadcrumbName.slice(1),
      href: pathname,
    };

    // Prevent adding duplicate entries for the same path
    setBreadcrumbs((prev) => {
      if (prev.some((crumb) => crumb.href === pathname)) {
        return prev;
      }
      return [...prev, newBreadcrumb];
    });
  }, [pathname]);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <BreadcrumbItem key={breadcrumb.href}>
            <BreadcrumbLink href={breadcrumb.href}>{breadcrumb.name}</BreadcrumbLink>
            {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
        {breadcrumbs.length > 1 && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <BreadcrumbLink>History</BreadcrumbLink>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {breadcrumbs.slice(1).map((breadcrumb) => (
                    <DropdownMenuItem
                      key={breadcrumb.href}
                      onClick={() => router.push(breadcrumb.href)}
                    >
                      {breadcrumb.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
