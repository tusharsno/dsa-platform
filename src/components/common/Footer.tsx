"use client";

import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Code2,
  ExternalLink,
  Heart,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { user, isLoaded } = useUser();

  return (
    <footer className="relative overflow-hidden bg-black">
      {/* Top border with gradient - bold in middle */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="container px-6 py-12 mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-1 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight">
                <span className="text-white">Syntax</span>
                <span className="text-white/40">ia</span>
              </span>
            </Link>
            
            <p className="text-white/50 text-sm leading-relaxed font-light max-w-xs">
              Master algorithms and data structures with a structured, intuitive learning experience.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: Github, href: "https://github.com/tusharsno", label: "GitHub" },
                { icon: Twitter, href: "https://twitter.com/tusharsno", label: "Twitter" },
                { icon: Linkedin, href: "https://linkedin.com/in/tusharbarua", label: "LinkedIn" }
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Platform Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-semibold text-white mb-4 text-sm">
              Platform
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "Topics", href: "/topics" },
                { name: "Problems", href: "/problems" },
                { name: "Roadmap", href: "/roadmap" },
                { name: "Dashboard", href: "/dashboard" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold text-white mb-4 text-sm">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "Documentation", href: "/docs" },
                { name: "Blog", href: "/blog" },
                { name: "Community", href: "/community" },
                { name: "Help Center", href: "/help" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-semibold text-white mb-4 text-sm">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "Privacy", href: "/privacy" },
                { name: "Terms", href: "/terms" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-white/40 text-sm">
            © {currentYear} Syntaxia. All rights reserved.
          </p>
          
          <p className="text-white/40 text-sm">
            Built by{" "}
            <Link
              href="https://github.com/tusharsno"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300"
            >
              Tushar
            </Link>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
