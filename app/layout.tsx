import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Donkey",
  description:
    "Discover the best of Lesotho's fashion with our ecommerce platform. Shop clothes and shoes from various sellers across the country. Whether you're a buyer or a seller, our platform provides a seamless experience for everyone.",
  keywords:
    "Lesotho, ecommerce, online shopping, clothes, shoes, fashion, marketplace, local sellers, buy and sell, Lesotho fashion, Lesotho marketplace",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
