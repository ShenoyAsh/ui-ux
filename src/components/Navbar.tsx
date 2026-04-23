"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Global Missions", href: "/programs" },
    { name: "Live Impact", href: "/impact" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
            <span className="material-symbols-outlined">public</span>
          </div>
          <span className="text-2xl font-black text-slate-900 tracking-tighter uppercase">
            Nexus<span className="text-primary">Global</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 font-bold text-sm uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${
                pathname === link.href
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-slate-500 hover:text-primary"
              } transition-all duration-300`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Live Updates
          </div>
          <Link href="/donate">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-7 py-3 rounded-xl font-bold text-sm hover:shadow-xl shadow-primary/20 transition-all uppercase tracking-wider"
            >
              Support Now
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
