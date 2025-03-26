"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (headingRef.current) {
      timeline.from(headingRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.8,
      });
    }

    if (contactInfoRef.current) {
      timeline.from(
        contactInfoRef.current.children,
        {
          opacity: 0,
          x: -50,
          stagger: 0.2,
          duration: 0.6,
        },
        "-=0.4"
      );
    }

    if (formRef.current) {
      timeline.from(
        formRef.current.children,
        {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          duration: 0.6,
        },
        "-=0.4"
      );
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    // Implement form submission logic here
    console.log("Form submitted:", data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Contact Information Section */}
        <div
          ref={contactInfoRef}
          className="bg-blue-600 text-white p-12 flex flex-col justify-center"
        >
          <h2 ref={headingRef} className="text-4xl font-bold mb-8">
            Contact Information
          </h2>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="w-8 h-8" />
              <span className="text-lg">hello@example.com</span>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="w-8 h-8" />
              <span className="text-lg">(123) 456-7890</span>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="w-8 h-8" />
              <span className="text-lg">123 Tech Lane, Innovation City</span>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <form ref={formRef} onSubmit={handleSubmit} className="p-12 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Send a Message
          </h2>

          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;