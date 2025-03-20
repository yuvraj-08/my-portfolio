import { AboutSection, ContactCTA, FeaturedProjects, HeroSection, SkillsExpertise } from "@/components";

export default function Home() {
  return (
    <div className="w-full bg-gradient-to-br from-slate-950 via-slate-800 to-slate-950">
     <HeroSection/>
     {/* <div className="w-full h-28"></div> */}
     <AboutSection/>
     <FeaturedProjects/>
     <SkillsExpertise />
     <ContactCTA />
    </div>
  );
}
