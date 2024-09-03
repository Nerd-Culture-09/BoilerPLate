import { BentoGridProduct } from "@/components/FrontEnd/ProductOverView.tsx/BentoGrid";
import { BorderBeam } from "@/components/magicui/border-beam";
import HeroVideoDialog from "@/components/magicui/HeroVideoDialog";

const HeroVideoDialogDemoTopInBottomOut = () => {
  return (
    <>
    <section className="sm:hidden pt-5 flex flex-col justify-center px-7 lg:px-0 relative">
      <div className="relative rounded-2xl p-1 overflow-hidden">
        <BorderBeam />
        <HeroVideoDialog
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
          thumbnailAlt="Hero Video"
        />
      </div>
    </section>
      <div>
      <BentoGridProduct />
    </div>
    </>
  );
}
export default  HeroVideoDialogDemoTopInBottomOut;
