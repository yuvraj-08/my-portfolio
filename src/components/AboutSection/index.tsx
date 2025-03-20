"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code,
  Laptop,
  Zap,
  BookOpen,
  ArrowRight,
  FileText,
} from "lucide-react";
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
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const bio = bioRef.current;
    const skills = skillsRef.current;
    const image = imageRef.current;
    const button = buttonRef.current;

    // Initial state - everything hidden or offset
    gsap.set([heading, bio, skills, image, button], {
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
      )
      .to(
        button,
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

    // Button hover animation
    if (button) {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          backgroundColor: "rgba(139, 92, 246, 0.3)",
          scale: 1.03,
          duration: 0.3,
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          backgroundColor: "rgba(139, 92, 246, 0.15)",
          scale: 1,
          duration: 0.3,
        });
      });
    }

    return () => {
      // Clean up animations on component unmount
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());

      if (button) {
        button.removeEventListener("mouseenter", () => {});
        button.removeEventListener("mouseleave", () => {});
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 md:py-32"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-20 w-80 h-80 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
      </div>

      <div className="container max-w-6xl mx-auto px-4">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            About Me
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image column */}
          <div ref={imageRef} className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-slate-800 shadow-xl">
                <Image
                  src="/about-me-1.svg"
                  alt="About Me"
                  width={600}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 px-6 py-3 bg-gradient-to-r from-purple-500/80 to-blue-500/80 backdrop-blur-sm rounded-full text-sm font-medium text-white z-30 shadow-lg">
                1.5 Years Experience
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl border border-slate-700"></div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -top-6 -left-6 w-24 h-24 rounded-full border border-purple-500/30"></div>
              <div className="absolute -z-10 -top-10 -left-10 w-32 h-32 rounded-full border border-purple-500/20"></div>
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
                Currently, I'm focused on mastering React, Next.js, and
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
                <div className="skill-item bg-slate-800/50 backdrop-blur-sm p-5 rounded-xl border border-slate-700 hover:border-purple-500/30 transition-colors duration-300">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mr-3">
                      <Code className="w-5 h-5 text-purple-400" />
                    </div>
                    <h4 className="font-medium text-white">
                      Frontend Development
                    </h4>
                  </div>
                  <p className="text-slate-400">
                    Building responsive interfaces with React and Next.js
                  </p>
                </div>
                <div className="skill-item bg-slate-800/50 backdrop-blur-sm p-5 rounded-xl border border-slate-700 hover:border-blue-500/30 transition-colors duration-300">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3">
                      <Laptop className="w-5 h-5 text-blue-400" />
                    </div>
                    <h4 className="font-medium text-white">
                      UI Implementation
                    </h4>
                  </div>
                  <p className="text-slate-400">
                    Translating designs into functional, pixel-perfect
                    interfaces
                  </p>
                </div>
                <div className="skill-item bg-slate-800/50 backdrop-blur-sm p-5 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors duration-300">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-3">
                      <Zap className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h4 className="font-medium text-white">API Integration</h4>
                  </div>
                  <p className="text-slate-400">
                    Connecting frontends to backend services and third-party
                    APIs
                  </p>
                </div>
                <div className="skill-item bg-slate-800/50 backdrop-blur-sm p-5 rounded-xl border border-slate-700 hover:border-purple-500/30 transition-colors duration-300">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mr-3">
                      <BookOpen className="w-5 h-5 text-purple-400" />
                    </div>
                    <h4 className="font-medium text-white">
                      Continuous Learning
                    </h4>
                  </div>
                  <p className="text-slate-400">
                    Rapidly acquiring new skills and staying current with best
                    practices
                  </p>
                </div>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="mt-10 flex justify-center md:justify-start">
              <Link
                href="/about"
                ref={buttonRef}
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-purple-500/15 text-white font-medium transition-all"
              >
                <FileText className="w-5 h-5" />
                Learn More About Me
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
