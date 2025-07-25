"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import gsap from "gsap";
import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiMailSendLine,
} from "@remixicon/react";

// Dark Veil Background Component (from React Bits)
const DarkVeil = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800"></div>
      
      {/* Animated veil effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
        
        {/* Larger glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-cyan-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Veil overlay with subtle pattern */}
        <div className="absolute inset-0 opacity-30" 
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 25%),
                                radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 25%),
                                radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.05) 0%, transparent 50%)`
             }}>
        </div>
      </div>
    </div>
  );
};

export default function HeroSection() {
  // Refs for GSAP animations
  const containerRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const orbitalRing1Ref = useRef<HTMLDivElement>(null);
  const orbitalRing2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Capture current ref values to use in cleanup
    const textContent = textContentRef.current;
    const imageContainer = imageContainerRef.current;
    const stats = statsRef.current;
    const scrollIndicator = scrollIndicatorRef.current;
    const orbitalRing1 = orbitalRing1Ref.current;
    const orbitalRing2 = orbitalRing2Ref.current;
    const bounceElement =
      scrollIndicatorRef.current?.querySelector(".bounce-element");

    // Create a timeline for sequenced animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial state - everything hidden
    gsap.set([textContent, imageContainer, stats, scrollIndicator], {
      opacity: 0,
      y: 30,
    });

    // Animation sequence
    tl.to(textContent, {
      opacity: 1,
      y: 0,
      duration: 1,
    })
      .to(
        imageContainer,
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=0.6"
      ) // Start slightly before previous animation ends
      .to(
        stats,
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=0.6"
      )
      .to(
        scrollIndicator,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.4"
      );

    // Continuous animations
    const orbitalAnimation1 = gsap.to(orbitalRing1, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
      transformOrigin: "center center",
    });

    const orbitalAnimation2 = gsap.to(orbitalRing2, {
      rotation: -360,
      duration: 15,
      repeat: -1,
      ease: "none",
      transformOrigin: "center center",
    });

    if (bounceElement) {
    }
    // Scroll indicator bounce animation
    const bounceAnimation = gsap.to(bounceElement || "", {
      y: 5,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Clean up animations on component unmount
    return () => {
      tl.kill();
      orbitalAnimation1.kill();
      orbitalAnimation2.kill();
      bounceAnimation.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center text-white overflow-x-clip"
    >
      {/* Dark Veil Background - replaces the old background elements */}
      <DarkVeil />

      {/* Content container */}
      <div className="relative container max-w-[80%] mx-auto px-4 py-16 md:py-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div ref={textContentRef} className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-sm font-medium">
              Full Stack Developer
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I`m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Yuvraj Singh
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-xl">
              I build exceptional digital experiences that are fast, accessible,
              and visually appealing. Let`s turn your vision into reality.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/projects"
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 font-medium transition-all hover:shadow-lg hover:shadow-purple-500/20"
              >
                View My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="group flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 font-medium transition-all hover:border-slate-500"
              >
                Contact Me
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="flex gap-5 pt-4">
              <Link
                href="https://github.com/yuvraj-08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <RiGithubLine className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/-yuvraj08/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <RiLinkedinBoxLine className="w-6 h-6 !rounded-2xl" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:contact.yuvraj08@gmail.com"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <RiMailSendLine className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Image/visual element */}
          <div ref={imageContainerRef} className="flex justify-center">
            <div className="relative">
              {/* Decorative elements */}
              <div
                ref={orbitalRing1Ref}
                className="absolute -z-10 w-72 h-72 rounded-full border border-slate-700/50"
              ></div>
              <div
                ref={orbitalRing2Ref}
                className="absolute -z-10 w-80 h-80 rounded-full border border-slate-700/30"
              ></div>

              {/* Profile image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-800/80 shadow-xl">
                <Image
                  src="https://static.vecteezy.com/system/resources/thumbnails/052/043/661/small_2x/young-man-with-glasses-and-black-jacket-works-on-a-laptop-3d-icon-isolated-png.png"
                  alt="Your Name"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Tech stack badges */}
              <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full text-sm font-medium">
                React • Next.js • TypeScript
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div
          ref={statsRef}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              1.5+
            </div>
            <div className="text-slate-400 mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              30+
            </div>
            <div className="text-slate-400 mt-1">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              10+
            </div>
            <div className="text-slate-400 mt-1">Technologies Mastered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              100%
            </div>
            <div className="text-slate-400 mt-1">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-slate-400">Scroll Down</span>
          <div className="w-5 h-10 rounded-full border border-slate-700 flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full bounce-element"></div>
          </div>
        </div>
      </div>
    </div>
  );
}