"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
};

// Sample project data - replace with your actual projects
const projects: ProjectType[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and sales tracking.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/project",
    featured: true,
  },
  {
    id: 2,
    title: "AI Content Generator",
    description:
      "An AI-powered application that generates high-quality content for blogs, social media, and marketing materials.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Node.js", "OpenAI API", "MongoDB"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/project",
    featured: true,
  },
  {
    id: 3,
    title: "Fitness Tracking App",
    description:
      "A mobile-first web application for tracking workouts, nutrition, and fitness goals with personalized recommendations.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "TypeScript", "Firebase", "Chart.js"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/project",
    featured: true,
  },
];

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<HTMLDivElement[]>([])


  useEffect(() => {
    // Capture current ref values to use in cleanup
    const section = sectionRef.current;
    const heading = headingRef.current;
    const projectElements = projectRefs.current.filter(
      Boolean
    ) as HTMLDivElement[];

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

    // Create animations for each project card with staggered effect
    const projectsTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 60%",
        toggleActions: "play none none none",
      },
    });

    projectsTl.fromTo(
      projectElements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    // Clean up animations on component unmount
    return () => {
      if (headingTl.scrollTrigger) {
        headingTl.scrollTrigger.kill();
      }
      if (projectsTl.scrollTrigger) {
        projectsTl.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-40 w-80 h-80 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-cyan-500 opacity-10 blur-3xl"></div>
      </div>

      <div className="container max-w-[80%] mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div ref={headingRef} className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Featured Projects
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Here are some of my recent projects that showcase my skills and
            expertise in web development and design.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) projectRefs.current[index] = el;
              }}
              
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 flex flex-col h-full"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              {/* Project content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-slate-700 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action links */}
                <div className="flex gap-4 mt-auto">
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all projects button */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 text-white font-medium transition-all"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
