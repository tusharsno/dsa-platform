"use client";

import { Youtube, Linkedin, Github, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs";

export default function CreatorSection() {
  const { user, isLoaded } = useUser();

  return (
    <section className="py-16 relative overflow-hidden bg-black">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/80 text-xs font-medium shadow-lg mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Cpu className="w-3 h-3 text-white/60" />
            </motion.div>
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent font-semibold tracking-wide">
              MEET THE CREATOR
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.1] mb-4">
            Meet the creator.
            <br />
            <span className="text-white/40">Built with passion.</span>
          </h2>
          
          <p className="text-white/60 max-w-2xl text-base leading-relaxed font-light">
            {isLoaded && user 
              ? "Learn about the person behind this platform."
              : "Discover the journey and vision behind DSA Learn."
            }
          </p>
        </div>

        {/* Creator Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 md:p-12 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              {/* Profile Image */}
              <div className="shrink-0">
                <motion.div
                  className="relative w-56 h-56 md:w-64 md:h-64 rounded-xl overflow-hidden border border-white/20 shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/tushar/tushar_photo.jpg"
                    alt="Tushar Barua"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Tushar Barua
                </motion.h3>

                <motion.div 
                  className="space-y-5 text-white/70 text-lg leading-relaxed font-light mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <p>
                    Hi! I'm a software engineer passionate about helping
                    others excel in coding interviews and level up their technical
                    careers. My journey is driven by a deep interest in solving
                    complex algorithmic challenges and building efficient systems.
                  </p>

                  <p>
                    After solving 250+ problems and competing in global contests,
                    I created DSA Learn to help make the learning process more
                    systematic and enjoyable for everyone through research-backed
                    methodologies.
                  </p>
                </motion.div>

                {/* Social Links & CTA */}
                <motion.div 
                  className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  {/* Social Icons */}
                  <div className="flex items-center gap-4">
                    {[
                      { icon: Linkedin, href: "#", label: "LinkedIn" },
                      { icon: Youtube, href: "https://youtube.com/@tusharbarua5074", label: "YouTube" },
                      { icon: Github, href: "#", label: "GitHub" }
                    ].map((social, index) => (
                      <motion.div
                        key={social.label}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={social.href}
                          className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
                          aria-label={social.label}
                        >
                          <social.icon className="w-4 h-4" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm hover:bg-white/20 hover:border-white/30 transition-all duration-300 cursor-pointer"
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Premium accent line */}
            <motion.div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
