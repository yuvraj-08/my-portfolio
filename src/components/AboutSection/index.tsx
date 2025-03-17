"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Code, Laptop, Zap, BookOpen } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutSection() {
  // Register ScrollTrigger plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  // Refs for GSAP animations
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const bio = bioRef.current;
    const skills = skillsRef.current;
    const image = imageRef.current;

    // Initial state - everything hidden or offset
    gsap.set([heading, bio, skills, image], {
      opacity: 0,
      y: 50,
    });

    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    // Animation sequence
    tl.to(heading, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .to(
        image,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .to(
        bio,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .to(
        skills,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );

    // Skill items staggered animation
    gsap.from(".skill-item", {
      scrollTrigger: {
        trigger: skills,
        start: "top 80%",
      },
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
    });

    return () => {
      // Clean up animations on component unmount
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-40 top-20 w-80 h-80 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
      </div>

      <div className="container max-w-[80%] mx-auto px-4">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            About Me
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image column */}
          <div ref={imageRef} className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden border-4 border-slate-800 shadow-xl">
                <Image
                  src="/about-me-1.svg"
                  alt="About Me"
                  width={500}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full text-sm font-medium text-white z-30">
                1.5 Years Experience
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-lg border border-slate-700"></div>
            </div>
          </div>

          {/* Content column */}
          <div className="order-1 lg:order-2">
            <div ref={bioRef} className="text-slate-300 space-y-6">
              <p className="text-lg leading-relaxed">
                I`m an enthusiastic Full Stack Developer with 1.5 years of
                professional experience. My journey in web development began
                with a passion for creating intuitive and responsive user
                interfaces.
              </p>
              {/* <p className="text-lg leading-relaxed">
                Currently, I`m focused on mastering React, Next.js, and
                TypeScript. What I lack in years, I make up for with dedication
                and a strong drive to continuously expand my skills and
                knowledge.
              </p>
              <p className="text-lg leading-relaxed">
                I thrive in collaborative environments and enjoy tackling
                challenging problems. My experience in the industry has taught
                me the importance of clean code, effective communication, and
                staying current with rapidly evolving technologies.
              </p> */}
            </div>

            <div ref={skillsRef} className="mt-10">
              <h3 className="text-xl font-bold mb-6 text-white">What I Do</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="skill-item bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700">
                  <div className="flex items-center mb-3">
                    <Code className="w-5 h-5 mr-2 text-purple-400" />
                    <h4 className="font-medium text-white">
                      Frontend Development
                    </h4>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Building responsive interfaces with React and Next.js
                  </p>
                </div>
                <div className="skill-item bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700">
                  <div className="flex items-center mb-3">
                    <Laptop className="w-5 h-5 mr-2 text-blue-400" />
                    <h4 className="font-medium text-white">
                      UI Implementation
                    </h4>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Translating designs into functional, pixel-perfect
                    interfaces
                  </p>
                </div>
                <div className="skill-item bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700">
                  <div className="flex items-center mb-3">
                    <Zap className="w-5 h-5 mr-2 text-cyan-400" />
                    <h4 className="font-medium text-white">API Integration</h4>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Connecting frontends to backend services and third-party
                    APIs
                  </p>
                </div>
                <div className="skill-item bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700">
                  <div className="flex items-center mb-3">
                    <BookOpen className="w-5 h-5 mr-2 text-purple-400" />
                    <h4 className="font-medium text-white">
                      Continuous Learning
                    </h4>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Rapidly acquiring new skills and staying current with best
                    practices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
