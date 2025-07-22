"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { Linkedin, Github, Mail, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Capture current ref values to use in cleanup
    const section = sectionRef.current;
    const content = contentRef.current;
    const button = buttonRef.current;
    const socialLinks = socialLinksRef.current;

    if (!section || !content || !button || !socialLinks) return;

    // Create a timeline for the animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Animate content
    tl.fromTo(
      content,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )

      // Animate button with slight delay
      .fromTo(
        button,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.4"
      )

      // Animate social links with stagger
      .fromTo(
        socialLinks.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" },
        "-=0.3"
      );

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

    // Clean up animations on component unmount
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }

      if (button) {
        button.removeEventListener("mouseenter", () => {});
        button.removeEventListener("mouseleave", () => {});
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Content */}
          <div ref={contentRef}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Have a project in mind? Let`s talk!
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              I`m always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            ref={buttonRef}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-purple-500/15 text-white font-medium text-lg transition-all mb-10"
          >
            Contact Me
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Social Links */}
          <div ref={socialLinksRef} className="flex justify-center gap-8">
            <Link
              href="https://www.linkedin.com/in/-yuvraj08/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-slate-300 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="text-sm">LinkedIn</span>
            </Link>

            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                <Github className="w-6 h-6" />
              </div>
              <span className="text-sm">GitHub</span>
            </Link>

            <Link
              href="mailto:your.email@example.com"
              className="group flex flex-col items-center gap-2 text-slate-300 hover:text-white transition-colors"
              aria-label="Email Me"
            >
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-sm">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
