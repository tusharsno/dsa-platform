"use client";

import { Youtube, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CreatorSection() {
  return (
    <section className="py-24 bg-background transition-colors duration-300">
      <div className="container max-w-5xl mx-auto px-6">
        {/* Title Style: Centered & Minimal */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase">
            MEET THE <span className="text-primary italic">CREATOR</span>
          </h2>
          <div className="h-1 w-20 bg-primary mt-4 mx-auto rounded-full" />
        </div>

        {/* AlgoMaster Style Layout with Vertical Centering */}
        <div className="bg-zinc-50/30 dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 rounded-2xl p-8 md:p-12 shadow-sm">
          {/* items-center added below for vertical alignment */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
            {/* Picture Section */}
            <div className="shrink-0">
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-lg group">
                <Image
                  src="/tushar/tushar_photo.jpg"
                  alt="Tushar Barua"
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  priority
                />
              </div>
            </div>

            {/* Content Section: Short & Uniform */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-5 tracking-tight">
                Tushar Barua
              </h3>

              <div className="space-y-5 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed font-normal">
                <p>
                  Hi! I&apos;m a software engineer passionate about helping
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
              </div>

              {/* Socials & CTA */}
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mt-8 pt-6 border-t border-zinc-200/50 dark:border-white/5">
                <div className="flex items-center gap-5 text-zinc-400 dark:text-zinc-500">
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    <Linkedin size={20} />
                  </Link>
                  <Link
                    href="https://youtube.com/@tusharbarua5074"
                    className="hover:text-primary transition-colors"
                  >
                    <Youtube size={20} />
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </Link>
                </div>

                <Link
                  href="https://wa.me/your-number"
                  className="text-sm font-bold text-zinc-900 dark:text-white hover:text-primary dark:hover:text-primary transition-all uppercase tracking-widest flex items-center gap-2"
                >
                  Get in Touch <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
