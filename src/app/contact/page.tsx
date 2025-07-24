"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  MapPin,
  // Phone,
  // Calendar,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  FileText,
  Instagram,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm } from "react-hook-form";
import { BsYoutube } from "react-icons/bs";
import emailjs from "@emailjs/browser";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Form data type
type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  // Form state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  // Refs for animations
  const pageRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // Form validation with react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // Send email to yourself (you receive the form content)
      await emailjs.send(
        "service_04vximp",
        "template_prhs3ej",
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          time: new Date().toLocaleString(), // optional
        },
        "W5Z94UZeg_ngq8-8A"
      );

      // Send confirmation email to client
      await emailjs.send(
        "service_04vximp",
        "template_hcij30v",
        {
          name: data.name,
          email: data.email,
          message: data.message,
          time: new Date().toLocaleString(),
        },
        "W5Z94UZeg_ngq8-8A"
      );

      setFormStatus("success");
      reset();

      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setFormStatus("error");

      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // FAQ data
  const faqItems = [
    {
      question: "What is your typical response time?",
      answer:
        "I typically respond to all inquiries within 24-48 hours during business days.",
    },
    {
      question: "Do you take on freelance projects?",
      answer:
        "Yes, I'm open to freelance opportunities that align with my skills and interests.",
    },
    {
      question: "What information should I include in my message?",
      answer:
        "Please include project details, timeline, budget (if applicable), and any specific requirements or questions you have.",
    },
    {
      question: "Are you available for remote work?",
      answer:
        "Yes, I'm fully equipped for remote work and have experience collaborating with distributed teams.",
    },
  ];

  // GSAP animations
  useEffect(() => {
    const page = pageRef.current;
    const header = headerRef.current;
    const form = formRef.current;
    const info = infoRef.current;
    const socials = socialsRef.current;
    const faq = faqRef.current;

    if (!page || !header || !form || !info || !socials || !faq) return;

    // Header animation
    gsap.fromTo(
      header.querySelectorAll(".animate-item"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: "power3.out" }
    );

    // Form animation
    gsap.fromTo(
      form,
      { opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: form,
          start: "top 80%",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    // Form fields staggered animation
    gsap.fromTo(
      form.querySelectorAll(".form-field"),
      { opacity: 0, y: 20 },
      {
        scrollTrigger: {
          trigger: form,
          start: "top 80%",
        },
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.3,
      }
    );

    // Contact info animation
    gsap.fromTo(
      info.querySelectorAll(".info-item"),
      { opacity: 0, x: -30 },
      {
        scrollTrigger: {
          trigger: info,
          start: "top 80%",
        },
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
      }
    );

    // Social links animation
    gsap.fromTo(
      socials.querySelectorAll(".social-item"),
      { opacity: 0, scale: 0.8 },
      {
        scrollTrigger: {
          trigger: socials,
          start: "top 85%",
        },
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(1.7)",
      }
    );

    // FAQ animation
    gsap.fromTo(
      faq.querySelectorAll(".faq-item"),
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: faq,
          start: "top 80%",
        },
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
      }
    );

    // Clean up animations on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden"
    >
      {/* Header Section */}
      <section
        ref={headerRef}
        className="relative pt-24 pb-16 md:pt-32 md:pb-20"
      >
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
        </div>

        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="animate-item text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
              Get In Touch
            </h1>
            <p className="animate-item text-xl text-slate-300 mb-8">
              Have a project in mind or want to discuss potential opportunities?
              I`d love to hear from you. Fill out the form below or reach out
              through any of my social channels.
            </p>

            {/* Availability indicator */}
            <div className="animate-item inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/70 backdrop-blur-sm border border-slate-700 text-white mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span>Currently available for new opportunities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="relative py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-slate-700"
              >
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Send Me a Message
                </h2>

                {/* Form status messages */}
                {formStatus === "success" && (
                  <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-200 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <p>
                      Your message has been sent successfully! I`ll get back to
                      you as soon as possible.
                    </p>
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-200 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <p>
                      There was an error sending your message. Please try again
                      or contact me directly via email.
                    </p>
                  </div>
                )}

                {/* Name field */}
                <div className="form-field mb-5">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-lg bg-slate-800/70 border ${
                      errors.name ? "border-red-500/50" : "border-slate-600"
                    } text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-colors`}
                    {...register("name", { required: "Name is required" })}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email field */}
                <div className="form-field mb-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-lg bg-slate-800/70 border ${
                      errors.email ? "border-red-500/50" : "border-slate-600"
                    } text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-colors`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Subject field */}
                <div className="form-field mb-5">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-300 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Project Inquiry"
                    className={`w-full px-4 py-3 rounded-lg bg-slate-800/70 border ${
                      errors.subject ? "border-red-500/50" : "border-slate-600"
                    } text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-colors`}
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    disabled={isSubmitting}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div className="form-field mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                    className={`w-full px-4 py-3 rounded-lg bg-slate-800/70 border ${
                      errors.message ? "border-red-500/50" : "border-slate-600"
                    } text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-colors resize-none`}
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 20,
                        message: "Message should be at least 20 characters",
                      },
                    })}
                    disabled={isSubmitting}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="form-field w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium transition-all hover:shadow-lg hover:shadow-purple-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div ref={infoRef} className="space-y-8">
              {/* Contact details */}
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-slate-700">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Contact Information
                </h2>

                <div className="space-y-5">
                  <div className="info-item flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:contact.yuvraj08@gmail.com"
                        className="text-slate-300 hover:text-purple-400 transition-colors"
                      >
                        contact.yuvraj08@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="info-item flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">
                        Location
                      </h3>
                      <p className="text-slate-300">Amritsar, Punjab, India</p>
                    </div>
                  </div>
                  {/* 
                  <div className="info-item flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">
                        Phone
                      </h3>
                      <a
                        href="tel:+11234567890"
                        className="text-slate-300 hover:text-cyan-400 transition-colors"
                      >
                        +1 (123) 456-7890
                      </a>
                    </div>
                  </div> */}

                  {/* <div className="info-item flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">
                        Availability
                      </h3>
                      <p className="text-slate-300">
                        Monday - Friday, 9:00 AM - 6:00 PM PST
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Social Media Links */}
              <div
                ref={socialsRef}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-slate-700"
              >
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Connect With Me
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <Link
                    href="https://github.com/yuvraj-08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-item group flex flex-col items-center gap-3 p-4 rounded-lg bg-slate-800/70 hover:bg-slate-700/70 border border-slate-700 transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center group-hover:bg-slate-600 transition-colors">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-slate-300 group-hover:text-white transition-colors">
                      GitHub
                    </span>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/-yuvraj08/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-item group flex flex-col items-center gap-3 p-4 rounded-lg bg-slate-800/70 hover:bg-slate-700/70 border border-slate-700 transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center group-hover:bg-slate-600 transition-colors">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-slate-300 group-hover:text-white transition-colors">
                      LinkedIn
                    </span>
                  </Link>

                  <Link
                    href="https://www.youtube.com/@YuvrajSingh-08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-item group flex flex-col items-center gap-3 p-4 rounded-lg bg-slate-800/70 hover:bg-slate-700/70 border border-slate-700 transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center group-hover:bg-slate-600 transition-colors">
                      <BsYoutube className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-slate-300 group-hover:text-white transition-colors">
                      Youtube
                    </span>
                  </Link>

                  <Link
                    href="https://www.instagram.com/u_v.1707/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-item group flex flex-col items-center gap-3 p-4 rounded-lg bg-slate-800/70 hover:bg-slate-700/70 border border-slate-700 transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center group-hover:bg-slate-600 transition-colors">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-slate-300 group-hover:text-white transition-colors">
                      Instagram
                    </span>
                  </Link>

                  <Link
                    href="mailto:contact.yuvraj08@gmail.com"
                    className="social-item group flex flex-col items-center gap-3 p-4 rounded-lg bg-slate-800/70 hover:bg-slate-700/70 border border-slate-700 transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center group-hover:bg-slate-600 transition-colors">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-slate-300 group-hover:text-white transition-colors">
                      Email
                    </span>
                  </Link>

                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    className="social-item group flex flex-col items-center gap-3 p-4 rounded-lg bg-slate-800/70 hover:bg-slate-700/70 border border-slate-700 transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center group-hover:bg-slate-600 transition-colors">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-slate-300 group-hover:text-white transition-colors">
                      Resume
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        ref={faqRef}
        className="relative py-16 md:py-24 bg-slate-900/50 border-t border-slate-800"
      >
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Frequently Asked Questions
          </h2>

          <div className="grid gap-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="faq-item bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all"
              >
                <h3 className="text-xl font-bold mb-3 text-white">
                  {item.question}
                </h3>
                <p className="text-slate-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative pt-24 pb-28">
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 md:p-12 border border-slate-800 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Ready to Start a Project?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Whether you have a specific project in mind or just want to
              explore possibilities, I`m here to help bring your ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact-form"
                onClick={(e) => {
                  e.preventDefault();
                  formRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium transition-all hover:shadow-lg hover:shadow-purple-500/20"
              >
                Send a Message
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/projects"
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-700 text-white font-medium transition-all hover:border-slate-500"
              >
                View My Projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
