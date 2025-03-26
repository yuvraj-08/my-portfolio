"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Search,
  X,
  Filter,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Project type definition
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
};

// Technology categories for filtering
const techCategories = [
  { name: "All", icon: "🌐" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "JavaScript", icon: "JS" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "Node.js", icon: "🟢" },
  { name: "Firebase", icon: "🔥" },
  { name: "Supabase", icon: "⚡" },
  { name: "GSAP", icon: "🔄" },
  { name: "Three.js", icon: "3D" },
  { name: "API", icon: "🔌" },
];

// Sample projects data - replace with your actual projects
const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and sales tracking.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    category: "Dashboard",
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
    category: "Web App",
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
    category: "Mobile",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/project",
    featured: true,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and responsive design.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    category: "Web App",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
  },
  {
    id: 5,
    title: "Real Estate Listing Platform",
    description:
      "A platform for real estate listings with search, filtering, and user authentication features.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Firebase", "Google Maps API", "Styled Components"],
    category: "Web App",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
  },
  {
    id: 6,
    title: "Task Management System",
    description:
      "A collaborative task management system with real-time updates, notifications, and team features.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    category: "Dashboard",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
  },
  {
    id: 7,
    title: "Weather Forecast App",
    description:
      "A weather forecast application with location detection, 7-day forecasts, and interactive maps.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "JavaScript", "Weather API", "CSS"],
    category: "Web App",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
  },
  {
    id: 8,
    title: "E-commerce Store",
    description:
      "A fully functional e-commerce store with product listings, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "TypeScript", "Stripe API", "Tailwind CSS"],
    category: "E-commerce",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
  },
  {
    id: 9,
    title: "Social Media Dashboard",
    description:
      "A dashboard for managing and analyzing social media accounts across multiple platforms.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Node.js", "Social Media APIs", "Chart.js"],
    category: "Dashboard",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
  },
  {
    id: 10,
    title: "3D Product Configurator",
    description:
      "An interactive 3D product configurator allowing users to customize products in real-time.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Three.js", "JavaScript", "WebGL"],
    category: "Web App",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
  },
  {
    id: 11,
    title: "Recipe Sharing Platform",
    description:
      "A platform for sharing and discovering recipes with search, filtering, and user profiles.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "JavaScript"],
    category: "Web App",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
  },
  {
    id: 12,
    title: "Interactive Data Visualization",
    description:
      "Interactive data visualizations for complex datasets using D3.js and React.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "D3.js", "TypeScript", "CSS"],
    category: "Dashboard",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
  },
  {
    id: 13,
    title: "Mobile Banking App",
    description:
      "A mobile banking application with secure authentication, transaction history, and payment features.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React Native", "TypeScript", "API Integration", "Redux"],
    category: "Mobile",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
  },
  {
    id: 14,
    title: "Booking System",
    description:
      "An appointment booking system for businesses with calendar integration and automated reminders.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    category: "Web App",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
  },
  {
    id: 15,
    title: "Cryptocurrency Dashboard",
    description:
      "A real-time cryptocurrency dashboard with price tracking, portfolio management, and alerts.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Crypto APIs", "Chart.js", "Styled Components"],
    category: "Dashboard",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
  },
  {
    id: 16,
    title: "Learning Management System",
    description:
      "A learning management system for online courses with video lessons, quizzes, and progress tracking.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    category: "Web App",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
  },
  {
    id: 17,
    title: "AR Product Viewer",
    description:
      "An augmented reality product viewer allowing users to see products in their own space.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "AR.js", "Three.js", "JavaScript"],
    category: "Web App",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
  },
  {
    id: 18,
    title: "Travel Planner",
    description:
      "A travel planning application with itinerary creation, map integration, and booking features.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "Google Maps API", "Firebase", "Tailwind CSS"],
    category: "Web App",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
  },
  {
    id: 19,
    title: "Music Streaming App",
    description:
      "A music streaming application with playlist creation, artist profiles, and audio visualization.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Node.js", "MongoDB", "Web Audio API"],
    category: "Web App",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
  },
  {
    id: 20,
    title: "Inventory Management System",
    description:
      "An inventory management system for businesses with barcode scanning, stock alerts, and reporting.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "TypeScript", "Supabase", "Chart.js"],
    category: "Dashboard",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
  },
];

// ProjectCard component with isolated hover state
const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="project-card relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative h-full rounded-xl overflow-hidden border border-slate-700 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 ${
          isHovered
            ? "border-purple-500/50 shadow-lg shadow-purple-500/10 translate-y-[-8px]"
            : ""
        }`}
      >
        {/* Project image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className={`object-cover transition-all duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-xs font-medium text-white">
              Featured
            </div>
          )}
        </div>

        {/* Project content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3
            className={`text-lg font-bold mb-2 transition-all duration-300 ${
              isHovered
                ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
                : "text-white"
            }`}
          >
            {project.title}
          </h3>
          <p className="text-slate-300 text-sm mb-4 flex-grow line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className={`px-2 py-1 text-xs rounded-full transition-all duration-300 ${
                  isHovered
                    ? "bg-slate-700/80 text-white"
                    : "bg-slate-700 text-slate-300"
                }`}
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
              className={`flex items-center gap-1 text-sm font-medium transition-all duration-300 ${
                isHovered ? "text-purple-300" : "text-purple-400"
              }`}
            >
              <ExternalLink
                className={`w-4 h-4 transition-all duration-300 ${
                  isHovered ? "transform translate-x-[-2px]" : ""
                }`}
              />
              Live Demo
            </Link>
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1 text-sm font-medium transition-all duration-300 ${
                isHovered ? "text-white" : "text-slate-300"
              }`}
            >
              <Github
                className={`w-4 h-4 transition-all duration-300 ${
                  isHovered ? "transform translate-x-[-2px]" : ""
                }`}
              />
              Source Code
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsPage() {
  // State for filters and search
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);
  const [visibleProjects, setVisibleProjects] = useState<number>(8);

  // Refs for animations
  const pageRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const projectsGridRef = useRef<HTMLDivElement>(null);

  // Add this new state for the filter scroll
  const filterScrollRef = useRef<HTMLDivElement>(null);

  // Add this function for scrolling the filters
  const scrollFilters = (direction: "left" | "right") => {
    if (!filterScrollRef.current) return;

    const scrollAmount = 200;
    const currentScroll = filterScrollRef.current.scrollLeft;

    filterScrollRef.current.scrollTo({
      left:
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount,
      behavior: "smooth",
    });
  };

  // Filter projects based on selected technologies, category, and search query
  const filteredProjects = projectsData.filter((project) => {
    // Filter by selected technologies
    const techMatch =
      selectedTech.length === 0 ||
      selectedTech.every((tech) => project.technologies.includes(tech));

    // Filter by search query
    const searchMatch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return techMatch && searchMatch;
  });

  // Handle technology filter toggle
  const toggleTechFilter = (tech: string) => {
    if (tech === "All") {
      setSelectedTech([]);
      return;
    }

    if (selectedTech.includes(tech)) {
      setSelectedTech(selectedTech.filter((t) => t !== tech));
    } else {
      setSelectedTech([...selectedTech, tech]);
    }
  };

  // Load more projects
  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 8, filteredProjects.length));
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedTech([]);
    setSearchQuery("");
  };

  // GSAP animations
  useEffect(() => {
    const page = pageRef.current;
    const header = headerRef.current;
    const filters = filtersRef.current;
    const projectsGrid = projectsGridRef.current;

    if (!page || !header || !filters || !projectsGrid) return;

    // Header animation
    gsap.fromTo(
      header.querySelectorAll(".animate-item"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: "power3.out" }
    );

    // Filters animation
    gsap.fromTo(
      filters.querySelectorAll(".filter-item"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.3,
      }
    );

    // Projects grid animation
    const projectItems = projectsGrid.querySelectorAll(".project-card");
    gsap.fromTo(
      projectItems,
      { opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: projectsGrid,
          start: "top 80%",
        },
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
      }
    );

    // Clean up animations on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // Re-run animations when filters change
  useEffect(() => {
    if (!projectsGridRef.current) return;

    // Get only the visible project cards
    const projectItems =
      projectsGridRef.current.querySelectorAll(".project-card");

    gsap.fromTo(
      projectItems,
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: "power2.out",
      }
    );
  }, [filteredProjects, visibleProjects]);

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Header Section */}
      <section
        ref={headerRef}
        className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
        </div>

        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="animate-item text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
              My Projects
            </h1>
            <p className="animate-item text-xl text-slate-300 mb-8">
              Explore my portfolio of web applications, mobile apps, and UI/UX
              designs. Each project represents my passion for creating
              intuitive, high-performing digital experiences.
            </p>

            {/* Search bar */}
            <div className="animate-item relative max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-3 pl-10 pr-10 rounded-full bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section
        ref={filtersRef}
        className="py-6 border-y border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-20"
      >
        <div className="container max-w-6xl mx-auto px-4">
          {/* Mobile filter toggle */}
          <div className="md:hidden flex justify-between items-center mb-4">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-white"
            >
              <Filter className="w-4 h-4" />
              Filters {selectedTech.length > 0 && `(${selectedTech.length})`}
            </button>

            {(selectedTech.length > 0 || searchQuery) && (
              <button
                onClick={resetFilters}
                className="text-sm text-slate-300 hover:text-white"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Mobile filters */}
          <div
            className={`md:hidden ${
              showMobileFilters ? "block" : "hidden"
            } mb-6`}
          >
            <div>
              <h3 className="text-sm font-medium text-slate-300 mb-2">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {techCategories.map((tech) => (
                  <button
                    key={tech.name}
                    onClick={() => toggleTechFilter(tech.name)}
                    className={`filter-item flex items-center gap-1 px-3 py-1 text-sm rounded-full ${
                      tech.name === "All" && selectedTech.length === 0
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                        : selectedTech.includes(tech.name)
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop filters - scrollable */}
          <div className="hidden md:flex items-center">
            {/* Left scroll button */}
            <button
              onClick={() => scrollFilters("left")}
              className="flex-shrink-0 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 mr-2"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Scrollable filter container */}
            <div className="relative flex-grow overflow-hidden">
              <div
                ref={filterScrollRef}
                className="flex gap-2 overflow-x-auto scrollbar-hide py-2 px-1"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {techCategories.map((tech) => (
                  <button
                    key={tech.name}
                    onClick={() => toggleTechFilter(tech.name)}
                    className={`filter-item flex-shrink-0 flex items-center gap-1 px-3 py-1 text-sm rounded-full transition-all ${
                      tech.name === "All" && selectedTech.length === 0
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                        : selectedTech.includes(tech.name)
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right scroll button */}
            <button
              onClick={() => scrollFilters("right")}
              className="flex-shrink-0 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 ml-2"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Reset filters button */}
            {(selectedTech.length > 0 || searchQuery) && (
              <button
                onClick={resetFilters}
                className="filter-item text-sm text-slate-300 hover:text-white px-4 py-2 ml-4"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          {/* Results count */}
          <div className="mb-8 flex justify-between items-center">
            <p className="text-slate-300">
              Showing{" "}
              <span className="text-white font-medium">
                {Math.min(visibleProjects, filteredProjects.length)}
              </span>{" "}
              of{" "}
              <span className="text-white font-medium">
                {filteredProjects.length}
              </span>{" "}
              projects
            </p>

            {/* Sort options could go here */}
          </div>

          {/* Projects grid */}
          {filteredProjects.length > 0 ? (
            <div
              ref={projectsGridRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProjects.slice(0, visibleProjects).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                No projects found
              </h3>
              <p className="text-slate-300 mb-6 max-w-md">
                No projects match your current filters. Try adjusting your
                search criteria or reset the filters.
              </p>
              <button
                onClick={resetFilters}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 text-white font-medium transition-all"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Load more button */}
          {visibleProjects < filteredProjects.length && (
            <div className="mt-12 text-center">
              <button
                onClick={loadMoreProjects}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 text-white font-medium transition-all"
              >
                Load More Projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Project Stats Section */}
      <section className="relative py-16 md:py-24 bg-slate-900/50 border-t border-slate-800">
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Project Highlights
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                My portfolio showcases a diverse range of projects that
                demonstrate my technical skills and creative problem-solving
                abilities. Here`s a breakdown of my project experience:
              </p>

              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700">
                  <h3 className="text-lg font-bold mb-3 text-white">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techCategories.slice(1).map((tech) => (
                      <span
                        key={tech.name}
                        className="flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-slate-700 text-slate-300"
                      >
                        <span>{tech.icon}</span>
                        <span>{tech.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                  {projectsData.length}+
                </div>
                <div className="text-slate-300">Total Projects</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                  {projectsData.filter((p) => p.featured).length}
                </div>
                <div className="text-slate-300">Featured Projects</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                  {new Set(projectsData.flatMap((p) => p.technologies)).size}
                </div>
                <div className="text-slate-300">Technologies</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                  {new Set(projectsData.map((p) => p.category)).size}
                </div>
                <div className="text-slate-300">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative pt-24 pb-28">
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Interested in Working Together?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              I`m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium text-lg transition-all hover:shadow-lg hover:shadow-purple-500/20"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
