import { AboutSection, HeroSection } from "@/components";

export default function Home() {
  return (
    <div className="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
     <HeroSection/>
     {/* <div className="w-full h-28"></div> */}
     <AboutSection/>
    </div>
  );
}
