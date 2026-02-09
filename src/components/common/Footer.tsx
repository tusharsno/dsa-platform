import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Code2, ExternalLink, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand & Mission Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/20">
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold tracking-tighter">DSA Learn</span>
            </Link>
            <p className="text-muted-foreground text-base max-w-sm leading-relaxed">
              Empowering developers to ace coding interviews and master data structures with a structured, intuitive learning experience.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Github size={20} />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="font-bold text-foreground mb-6 text-sm uppercase tracking-widest">Platform</h3>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground">
              <li><Link href="/topics" className="hover:text-primary flex items-center gap-1 group transition-colors">Explore Topics <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/problems" className="hover:text-primary transition-colors">Curated Problems</Link></li>
              <li><Link href="/roadmap" className="hover:text-primary transition-colors">Learning Roadmap</Link></li>
              <li><Link href="/contribute" className="hover:text-primary transition-colors">Contribute</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-foreground mb-6 text-sm uppercase tracking-widest">Resources</h3>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground">
              <li><Link href="/docs" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Technical Blog</Link></li>
              <li><Link href="/community" className="hover:text-primary transition-colors">Discord Community</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">Help Center</Link></li>
            </ul>
          </div>

          {/* Support/Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-6 text-sm uppercase tracking-widest">Support</h3>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground">
              <li className="flex items-center gap-2"><Mail size={16} /> support@dsalearn.com</li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground font-medium">
            © {currentYear} DSA Learn. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground font-medium">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> by 
            <Link href="https://yourportfolio.com" className="text-foreground hover:text-primary underline underline-offset-4 transition-colors">
               Your Name
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}