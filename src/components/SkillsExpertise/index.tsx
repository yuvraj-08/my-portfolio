"use client";

import type React from "react";

import { useRef, useEffect } from "react";
import { Zap, Shield, Palette, Rocket } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
};

const SkillCard = ({ icon, title, description }: SkillCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;

    // Create hover animation
    if (card) {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    }

    // Cleanup
    return () => {
      if (card) {
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 h-full"
    >
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-5 text-white">
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
};

export default function SkillsExpertise() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const skills = [
    {
      icon: <Rocket className="w-7 h-7" />,
      title: "Fast & Scalable Web Apps",
      description:
        "I build high-performance applications that load quickly and scale effortlessly, ensuring your users have a seamless experience regardless of traffic volume.",
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: "Pixel-Perfect UI Design",
      description:
        "Every pixel matters. I craft visually stunning interfaces with meticulous attention to detail, ensuring your brand stands out with a polished, professional look.",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Secure & Optimized Code",
      description:
        "Security is non-negotiable. I write clean, efficient code following best practices to protect your data and provide a solid foundation for your application.",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Smooth Animations & Interactivity",
      description:
        "I create engaging user experiences with fluid animations and intuitive interactions that guide users through your application naturally and delightfully.",
    },
  ];

  useEffect(() => {
    // Capture current ref values to use in cleanup
    const section = sectionRef.current;
    const heading = headingRef.current;
    const cardsContainer = cardsContainerRef.current;

    if (!section || !heading || !cardsContainer) return;

    // Get all cards
    const cards = Array.from(cardsContainer.children);

    // Create a timeline for the heading animation
    const headingTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    headingTl.fromTo(
      heading,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    // Create animations for each skill card with staggered effect
    const cardsTl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsContainer,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    cardsTl.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      }
    );

    // Clean up animations on component unmount
    return () => {
      if (headingTl.scrollTrigger) {
        headingTl.scrollTrigger.kill();
      }
      if (cardsTl.scrollTrigger) {
        cardsTl.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 right-20 w-72 h-72 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-40 -left-20 w-80 h-80 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div ref={headingRef} className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Why Work With Me?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            I bring a unique combination of technical expertise and creative
            problem-solving to every project.
          </p>
        </div>

        {/* Skills grid */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-[80%] mx-auto"
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              index={index}
            />
          ))}
        </div>

        {/* Additional expertise showcase */}
        <div className="mt-20 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 md:p-10 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Technical Expertise
              </h3>
              <p className="text-slate-300 mb-6">
                With a deep understanding of modern web technologies and best
                practices, I deliver solutions that are not just visually
                impressive but also technically sound.
              </p>

              {/* Tech stack */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  <span className="text-slate-200">Next.js & React</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  <span className="text-slate-200">TypeScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  <span className="text-slate-200">Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  <span className="text-slate-200">GSAP Animations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  <span className="text-slate-200">Responsive Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  <span className="text-slate-200">API Integration</span>
                </div>
              </div>
            </div>

            {/* Stats/metrics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                  99%
                </div>
                <div className="text-slate-300">Client Satisfaction</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                  100%
                </div>
                <div className="text-slate-300">On-time Delivery</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                  5+
                </div>
                <div className="text-slate-300">Years Experience</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                  50+
                </div>
                <div className="text-slate-300">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
