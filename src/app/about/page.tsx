"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Linkedin,
  Mail,
  BookOpen,
  Code,
  Zap,
  Calendar,
  Briefcase,
  Award,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { RiGithubLine } from "@remixicon/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJava,
  FaCogs,
  FaRobot,
  FaLayerGroup,
  FaGithub,
  FaGitAlt,
  FaPaw,
  FaCode,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiAntdesign,
  SiFirebase,
  SiSupabase,
  SiPrisma,
  SiMongodb,
  SiExpress,
  SiAmazon,
  SiJavascript,
  SiRedux,
  SiPostgresql,
  SiMysql,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiDbeaver,
  SiCloudinary,
} from "react-icons/si";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export default function AboutPage() {
  // State for 3D tech stack hover
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  // Refs for GSAP animations
  const pageRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Tech stack data
  const techStack = [
    // Frontend
    {
      name: "HTML",
      icon: <FaHtml5 />,
      color: "#E34F26",
      bgColor: "rgba(227, 79, 38, 0.1)",
      category: "Frontend",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      color: "#1572B6",
      bgColor: "rgba(21, 114, 182, 0.1)",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "#F7DF1E",
      bgColor: "rgba(247, 223, 30, 0.1)",
      category: "Frontend",
    },
    {
      name: "React",
      icon: <FaReact />,
      color: "#61DAFB",
      bgColor: "rgba(97, 218, 251, 0.1)",
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: "#000000",
      bgColor: "rgba(0, 0, 0, 0.1)",
      category: "Frontend",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "#3178C6",
      bgColor: "rgba(49, 120, 198, 0.1)",
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "#38B2AC",
      bgColor: "rgba(56, 178, 172, 0.1)",
      category: "Frontend",
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap />,
      color: "#7952B3",
      bgColor: "rgba(121, 82, 179, 0.1)",
      category: "Frontend",
    },
    {
      name: "Ant Design",
      icon: <SiAntdesign />,
      color: "#1677FF",
      bgColor: "rgba(22, 119, 255, 0.1)",
      category: "Frontend",
    },
    {
      name: "Material UI",
      icon: <FaLayerGroup />,
      color: "#007FFF",
      bgColor: "rgba(0, 127, 255, 0.1)",
      category: "Frontend",
    },
    {
      name: "Refine.dev",
      icon: <FaCogs />,
      color: "#2F54EB",
      bgColor: "rgba(47, 84, 235, 0.1)",
      category: "Frontend",
    },

    // State Management
    {
      name: "Redux",
      icon: <SiRedux />,
      color: "#764ABC",
      bgColor: "rgba(118, 74, 188, 0.1)",
      category: "State Management",
    },
    {
      name: "Zustand",
      icon: <FaPaw />,
      color: "#000000",
      bgColor: "rgba(0, 0, 0, 0.1)",
      category: "State Management",
    },

    // Backend
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "#339933",
      bgColor: "rgba(51, 153, 51, 0.1)",
      category: "Backend",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      color: "#000000",
      bgColor: "rgba(0, 0, 0, 0.1)",
      category: "Backend",
    },
    {
      name: "Java",
      icon: <FaJava />,
      color: "#007396",
      bgColor: "rgba(0, 115, 150, 0.1)",
      category: "Backend",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      color: "#FFCA28",
      bgColor: "rgba(255, 202, 40, 0.1)",
      category: "Backend",
    },
    {
      name: "Supabase",
      icon: <SiSupabase />,
      color: "#3ECF8E",
      bgColor: "rgba(62, 207, 142, 0.1)",
      category: "Backend",
    },
    {
      name: "Prisma ORM",
      icon: <SiPrisma />,
      color: "#0C344B",
      bgColor: "rgba(12, 52, 75, 0.1)",
      category: "Backend",
    },

    // Databases
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "#47A248",
      bgColor: "rgba(71, 162, 72, 0.1)",
      category: "Database",
    },
    {
      name: "MongoDB Atlas",
      icon: <SiMongodb />,
      color: "#47A248",
      bgColor: "rgba(71, 162, 72, 0.1)",
      category: "Database",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      color: "#4169E1",
      bgColor: "rgba(65, 105, 225, 0.1)",
      category: "Database",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      color: "#4479A1",
      bgColor: "rgba(68, 121, 161, 0.1)",
      category: "Database",
    },
    {
      name: "DBeaver",
      icon: <SiDbeaver />,
      color: "#372923",
      bgColor: "rgba(55, 41, 35, 0.1)",
      category: "Database",
    },

    // Deployment/Cloud
    {
      name: "Vercel",
      icon: <SiVercel />,
      color: "#000000",
      bgColor: "rgba(0, 0, 0, 0.1)",
      category: "Cloud/Deployment",
    },
    {
      name: "Netlify",
      icon: <SiNetlify />,
      color: "#00C7B7",
      bgColor: "rgba(0, 199, 183, 0.1)",
      category: "Cloud/Deployment",
    },
    {
      name: "AWS Basics",
      icon: <SiAmazon />,
      color: "#FF9900",
      bgColor: "rgba(255, 153, 0, 0.1)",
      category: "Cloud/Deployment",
    },

    // Dev Tools
    {
      name: "Git",
      icon: <FaGitAlt />,
      color: "#F05032",
      bgColor: "rgba(240, 80, 50, 0.1)",
      category: "Dev Tools",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      color: "#181717",
      bgColor: "rgba(24, 23, 23, 0.1)",
      category: "Dev Tools",
    },
    {
      name: "Postman",
      icon: <SiPostman />,
      color: "#FF6C37",
      bgColor: "rgba(255, 108, 55, 0.1)",
      category: "Dev Tools",
    },
    {
      name: "VS Code",
      icon: <FaCode />,
      color: "#007ACC",
      bgColor: "rgba(0, 122, 204, 0.1)",
      category: "Dev Tools",
    },

    // AI Tools
    {
      name: "Prompt Engineering",
      icon: <FaRobot />,
      color: "#6E56CF",
      bgColor: "rgba(110, 86, 207, 0.1)",
      category: "AI Tools",
    },

    // Media/Assets
    {
      name: "Cloudinary",
      icon: <SiCloudinary />,
      color: "#3448C5",
      bgColor: "rgba(52, 72, 197, 0.1)",
      category: "Media/Assets",
    },
  ];

  useEffect(() => {
    // Capture current ref values
    const page = pageRef.current;
    const intro = introRef.current;
    const background = backgroundRef.current;
    const timeline = timelineRef.current;
    const skills = skillsRef.current;
    const certifications = certificationsRef.current;
    const philosophy = philosophyRef.current;
    const cta = ctaRef.current;

    if (
      !page ||
      !intro ||
      !background ||
      !timeline ||
      !skills ||
      !certifications ||
      !philosophy ||
      !cta
    )
      return;

    // Initial animation for intro section
    const introTl = gsap.timeline();

    introTl
      .fromTo(
        intro.querySelector(".intro-image"),
        { opacity: 0, scale: 0.8, rotationY: -15 },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "power3.out",
        }
      )
      .fromTo(
        intro.querySelector("h1"),
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        "-=0.8"
      )
      .fromTo(
        intro.querySelector("h2"),
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        intro.querySelector("p"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        intro.querySelectorAll(".social-icon"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );

    // Background section animation
    gsap.fromTo(
      background.querySelectorAll(".background-card"),
      { opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: background,
          start: "top 75%",
        },
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    // Timeline animations
    const timelineItems = timeline.querySelectorAll(".timeline-item");

    timelineItems.forEach((item, index) => {
      const direction = index % 2 === 0 ? -50 : 50;

      gsap.fromTo(
        item,
        { opacity: 0, x: direction },
        {
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
        }
      );
    });

    // Timeline connector animation
    gsap.fromTo(
      timeline.querySelector(".timeline-connector"),
      { height: 0 },
      {
        scrollTrigger: {
          trigger: timeline,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 0.5,
        },
        height: "100%",
        duration: 1,
        ease: "none",
      }
    );

    // 3D Tech stack animations
    gsap.fromTo(
      skills.querySelectorAll(".tech-item"),
      { opacity: 0, scale: 0.8, rotationY: -15 },
      {
        scrollTrigger: {
          trigger: skills,
          start: "top 75%",
        },
        opacity: 1,
        scale: 1,
        rotationY: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)",
      }
    );

    // Certifications animation with reveal effect
    const certItems = certifications.querySelectorAll(".cert-item");

    certItems.forEach((item) => {
      const certTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
        },
      });

      certTl
        .fromTo(
          item.querySelector(".cert-reveal"),
          { width: "100%" },
          { width: 0, duration: 0.6, ease: "power2.inOut" }
        )
        .fromTo(
          item.querySelector(".cert-content"),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );
    });

    // Philosophy section animation
    const philosophyTl = gsap.timeline({
      scrollTrigger: {
        trigger: philosophy,
        start: "top 70%",
      },
    });

    philosophyTl
      .fromTo(
        philosophy.querySelector(".philosophy-icon"),
        { opacity: 0, scale: 0.5, rotation: -10 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        }
      )
      .fromTo(
        philosophy.querySelector("p"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        philosophy.querySelectorAll(".philosophy-value"),
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" },
        "-=0.5"
      );

    // CTA animation
    gsap.fromTo(
      cta.querySelector(".cta-content"),
      { opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: cta,
          start: "top 80%",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    // Button hover animations
    const buttons = cta.querySelectorAll("a");

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Clean up animations on component unmount
    return () => {
      introTl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());

      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", () => {});
        button.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Introduction Section */}
      <section
        ref={introRef}
        className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
        </div>

        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Hey there! I`m Yuvraj Singh
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                A Passionate Full Stack Developer
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                I specialize in building{" "}
                <span className="text-white font-medium">
                  modern, scalable web applications
                </span>{" "}
                with technologies like{" "}
                <span className="text-white font-medium">
                  Next.js, Tailwind CSS, and Supabase
                </span>
                . My goal is to create intuitive and high-performing web
                experiences that leave a lasting impact.
              </p>

              <div className="flex gap-5 pt-4">
                <Link
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-slate-400 hover:text-white transition-colors"
                >
                  <RiGithubLine className="w-6 h-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/-yuvraj08/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-slate-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="mailto:your.email@example.com"
                  className="social-icon text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="w-6 h-6" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>

            <div className="intro-image flex justify-center lg:justify-end perspective-1000">
              <div className="relative transform-3d">
                <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-slate-800 shadow-xl w-72 h-72 md:w-96 md:h-96 transform-3d">
                  <Image
                    // src="https://static.vecteezy.com/system/resources/thumbnails/052/043/661/small_2x/young-man-with-glasses-and-black-jacket-works-on-a-laptop-3d-icon-isolated-png.png"
                    src="https://png.pngtree.com/recommend-works/png-clipart/20250209/ourmid/pngtree-a-fashionable-young-man-wearing-glasses-png-image_15332439.png"
                    alt="Your Name"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl border border-slate-700 transform-3d"></div>

                {/* Decorative elements */}
                <div className="absolute -z-10 -top-6 -left-6 w-24 h-24 rounded-full border border-purple-500/30 transform-3d"></div>
                <div className="absolute -z-10 -top-10 -left-10 w-32 h-32 rounded-full border border-purple-500/20 transform-3d"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Background Section */}
      <section
        ref={backgroundRef}
        className="relative py-20 md:py-24 bg-slate-900/50"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            My Background
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="background-card bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/30 transition-all duration-300 transform-gpu hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mr-3">
                  <Code className="w-5 h-5 text-purple-400" />
                </div>
                Who I Am
              </h3>
              <p className="text-slate-300 leading-relaxed">
                I`m a Full Stack Developer with a deep interest in front-end and
                back-end development. My journey started with self-learning
                coding. Since then, I have worked on multiple projects,
                exploring the latest trends in web development.
              </p>
            </div>

            <div className="background-card bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/30 transition-all duration-300 transform-gpu hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                What Drives Me
              </h3>
              <p className="text-slate-300 leading-relaxed">
                I`m passionate about{" "}
                <span className="text-white font-medium">
                  clean code, smooth animations, and user-friendly interfaces
                </span>
                . Whether it`s designing sleek UI/UX or optimizing website
                performance, I always strive for excellence.
              </p>
            </div>

            <div className="background-card bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 transform-gpu hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-3">
                  <BookOpen className="w-5 h-5 text-cyan-400" />
                </div>
                Currently Learning
              </h3>
              <ul className="text-slate-300 space-y-2">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 mr-2"></div>
                  <span>
                    Advanced{" "}
                    <span className="text-white font-medium">
                      Framer Motion
                    </span>{" "}
                    & <span className="text-white font-medium">GSAP</span> for
                    animations
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 mr-2"></div>
                  <span>
                    Exploring{" "}
                    <span className="text-white font-medium">AI & Web3</span>{" "}
                    technologies
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 mr-2"></div>
                  <span>
                    Mastering{" "}
                    <span className="text-white font-medium">TypeScript</span>{" "}
                    and advanced React patterns
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional paragraphs from home page */}
          <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 md:p-10 border border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="background-card">
                <p className="text-lg text-slate-300 leading-relaxed">
                  I`m an enthusiastic Full Stack Developer with 1.5 years of
                  professional experience. My journey in web development began
                  with a passion for creating intuitive and responsive user
                  interfaces.
                </p>
              </div>
              <div className="background-card">
                <p className="text-lg text-slate-300 leading-relaxed">
                  I thrive in collaborative environments and enjoy tackling
                  challenging problems. My experience in the industry has taught
                  me the importance of clean code, effective communication, and
                  staying current with rapidly evolving technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section (Education & Work Experience) */}
      <section ref={timelineRef} className="relative py-20 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-purple-500 opacity-5 blur-3xl"></div>
        </div>

        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Education & Experience
          </h2>

          <div className="relative">
            {/* Timeline connector */}
            <div className="timeline-connector absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-blue-500 h-0 top-0 bottom-0"></div>

            {/* Timeline items */}
            <div className="space-y-16">
              {/* Education 1 */}
              <div className="timeline-item relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right mr-5">
                  <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-sm font-medium text-white mb-4">
                    2018 - 2022
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Degree/Certification Name
                  </h3>
                  <p className="text-slate-300">University/Platform Name</p>
                  <p className="text-slate-400 mt-4">
                    Brief description of what you learned and accomplished
                    during this educational experience.
                  </p>
                </div>
                <div className="hidden md:block"></div>

                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-slate-800 border-4 border-purple-500 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-purple-400" />
                </div>
              </div>

              {/* Work Experience 1 */}
              <div className="timeline-item relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:block"></div>
                <div className="ml-5">
                  <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-sm font-medium text-white mb-4">
                    2022 - 2023
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Junior Developer
                  </h3>
                  <p className="text-slate-300">Company Name</p>
                  <p className="text-slate-400 mt-4">
                    Worked on various web development projects using React,
                    Next.js, and TypeScript. Collaborated with a team of
                    designers and developers to deliver high-quality web
                    applications.
                  </p>
                </div>

                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-slate-800 border-4 border-blue-500 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                </div>
              </div>

              {/* Education 2 */}
              <div className="timeline-item relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right mr-5">
                  <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-sm font-medium text-white mb-4">
                    2023
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Advanced Frontend Course
                  </h3>
                  <p className="text-slate-300">Online Platform</p>
                  <p className="text-slate-400 mt-4">
                    Completed an intensive course on advanced frontend
                    development techniques, focusing on performance optimization
                    and modern JavaScript frameworks.
                  </p>
                </div>
                <div className="hidden md:block"></div>

                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-slate-800 border-4 border-purple-500 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-purple-400" />
                </div>
              </div>

              {/* Work Experience 2 */}
              <div className="timeline-item relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:block"></div>
                <div className="ml-5">
                  <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-sm font-medium text-white mb-4">
                    2023 - Present
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Full Stack Developer
                  </h3>
                  <p className="text-slate-300">Current Company</p>
                  <p className="text-slate-400 mt-4">
                    Developing and maintaining web applications using Next.js,
                    TypeScript, and Supabase. Implementing responsive designs
                    and optimizing application performance.
                  </p>
                </div>

                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-slate-800 border-4 border-blue-500 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Technologies Section with 3D elements */}
      <section
        ref={skillsRef}
        className="relative py-20 md:py-24 bg-slate-900/50"
      >
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Skills & Technologies
          </h2>

          {Array.from(new Set(techStack.map((t) => t.category))).map(
            (category) => (
              <div key={category} className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  {category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 perspective-1000">
                  {techStack
                    .filter((tech) => tech.category === category)
                    .map((tech) => (
                      <div
                        key={tech.name}
                        className="tech-item relative h-40 cursor-pointer transform-style-3d transition-transform duration-500"
                        style={{
                          transform:
                            hoveredTech === tech.name
                              ? "rotateY(15deg) rotateX(-10deg)"
                              : "rotateY(0) rotateX(0)",
                          transformStyle: "preserve-3d",
                        }}
                        onMouseEnter={() => setHoveredTech(tech.name)}
                        onMouseLeave={() => setHoveredTech(null)}
                      >
                        <div
                          className="absolute inset-0 rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm flex flex-col items-center justify-center p-4 transform-style-3d"
                          style={{
                            backfaceVisibility: "hidden",
                            transform: "translateZ(0px)",
                          }}
                        >
                          <div
                            className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4"
                            style={{ backgroundColor: tech.bgColor }}
                          >
                            {tech.icon}
                          </div>
                          <span className="text-white font-medium text-lg">
                            {tech.name}
                          </span>
                        </div>

                        <div
                          className="absolute inset-0 rounded-xl bg-slate-900/80"
                          style={{
                            transform: "translateZ(-20px)",
                            filter: "blur(8px)",
                            opacity: hoveredTech === tech.name ? 0.6 : 0.3,
                            transition: "opacity 0.5s ease",
                          }}
                        ></div>

                        <div
                          className="absolute w-8 h-8 rounded-full"
                          style={{
                            backgroundColor: tech.bgColor,
                            top: "10%",
                            right: "15%",
                            transform: `translateZ(${
                              hoveredTech === tech.name ? 30 : 15
                            }px)`,
                            opacity: 0.6,
                            transition: "transform 0.5s ease",
                          }}
                        ></div>
                        <div
                          className="absolute w-4 h-4 rounded-full"
                          style={{
                            backgroundColor: tech.bgColor,
                            bottom: "20%",
                            left: "15%",
                            transform: `translateZ(${
                              hoveredTech === tech.name ? 40 : 20
                            }px)`,
                            opacity: 0.4,
                            transition: "transform 0.5s ease",
                          }}
                        ></div>
                      </div>
                    ))}
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Certifications Section */}
      <section ref={certificationsRef} className="relative py-20 md:py-24">
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Certification 1 */}
            <div className="cert-item relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              <div className="cert-reveal absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 z-10"></div>
              <div className="cert-content p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      Frontend Development Certification
                    </h3>
                    <p className="text-slate-300 mb-2">Platform Name</p>
                    <p className="text-slate-400">
                      Comprehensive certification covering modern frontend
                      development techniques, responsive design, and JavaScript
                      frameworks.
                    </p>
                    <div className="mt-4 inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-sm font-medium text-white">
                      Issued: January 2023
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certification 2 */}
            <div className="cert-item relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              <div className="cert-reveal absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 z-10"></div>
              <div className="cert-content p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      React & Next.js Mastery
                    </h3>
                    <p className="text-slate-300 mb-2">Platform Name</p>
                    <p className="text-slate-400">
                      Advanced course covering React hooks, context API, Next.js
                      server components, and performance optimization
                      techniques.
                    </p>
                    <div className="mt-4 inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-sm font-medium text-white">
                      Issued: March 2023
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certification 3 */}
            <div className="cert-item relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              <div className="cert-reveal absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 z-10"></div>
              <div className="cert-content p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      TypeScript Advanced Concepts
                    </h3>
                    <p className="text-slate-300 mb-2">Platform Name</p>
                    <p className="text-slate-400">
                      Deep dive into TypeScript`s type system, generics, utility
                      types, and integration with React and Next.js
                      applications.
                    </p>
                    <div className="mt-4 inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-sm font-medium text-white">
                      Issued: June 2023
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certification 4 */}
            <div className="cert-item relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              <div className="cert-reveal absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 z-10"></div>
              <div className="cert-content p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      UI/UX Design Fundamentals
                    </h3>
                    <p className="text-slate-300 mb-2">Platform Name</p>
                    <p className="text-slate-400">
                      Comprehensive course on user interface design principles,
                      user experience best practices, and design systems
                      implementation.
                    </p>
                    <div className="mt-4 inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-sm font-medium text-white">
                      Issued: September 2023
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Philosophy Section */}
      <section
        ref={philosophyRef}
        className="relative py-20 md:py-24 bg-slate-900/50"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-500 opacity-5 blur-3xl"></div>
        </div>

        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            My Philosophy
          </h2>

          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 md:p-10 border border-slate-800">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="philosophy-icon relative w-48 h-48 md:w-64 md:h-64">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 animate-pulse"></div>
                  <div className="absolute inset-4 rounded-full bg-slate-800 flex items-center justify-center">
                    <div className="text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                      🌟
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <p className="text-xl text-slate-300 leading-relaxed">
                  I believe in{" "}
                  <span className="text-white font-medium">
                    continuous learning, problem-solving, and collaboration
                  </span>
                  . Whether it`s contributing to open-source projects or working
                  on real-world applications, I`m always excited to push my
                  limits and explore new technologies.
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="philosophy-value flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span className="text-slate-200">Continuous Learning</span>
                  </div>
                  <div className="philosophy-value flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span className="text-slate-200">Problem Solving</span>
                  </div>
                  <div className="philosophy-value flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span className="text-slate-200">Collaboration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section ref={ctaRef} className="relative pt-24 pb-28">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="cta-content text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Want to Work Together?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              I`m open to{" "}
              <span className="text-white font-medium">
                freelance work, collaborations, or full-time opportunities
              </span>
              . Feel free to check out my projects and get in touch!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium transition-all hover:shadow-lg hover:shadow-purple-500/20"
              >
                View My Projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-700 text-white font-medium transition-all hover:border-slate-500"
              >
                Contact Me
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
