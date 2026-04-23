"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProgramsPage() {
  const categories = ["All Missions", "Environment", "Tech Education", "Clean Energy", "Healthcare"];
  
  const programs = [
    {
      id: "amazon-canopy",
      category: "ENVIRONMENT",
      title: "Amazon Canopy Shield",
      desc: "Protecting indigenous lands and restoring critical biodiversity in the heart of the Amazon through satellite monitoring and local patrols.",
      image: "/amazon.png",
      raised: "$840,200",
      goal: "$1,200,000",
      progress: "70%",
      region: "South America"
    },
    {
      id: "asia-digital",
      category: "TECH EDUCATION",
      title: "Digital Horizon Labs",
      desc: "Deploying satellite-linked computer labs to 500 remote schools across Southeast Asia to bridge the knowledge gap.",
      image: "/asia-edu.png",
      raised: "$315,000",
      goal: "$450,000",
      progress: "68%",
      region: "Southeast Asia"
    },
    {
      id: "global-microgrids",
      category: "CLEAN ENERGY",
      title: "Modular Solar Microgrids",
      desc: "Providing reliable, 24/7 renewable energy to hospitals and community centers in off-grid regions globally.",
      image: "/clean-energy.png",
      raised: "$1,820,000",
      goal: "$2,500,000",
      progress: "72%",
      region: "Global South"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 space-y-6"
        >
          <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] border border-primary/20">Active Missions</span>
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter">Global Initiatives.</h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">Scaling localized expertise with global resources to solve the world&apos;s most pressing challenges.</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
          <div className="flex items-center gap-3 overflow-x-auto custom-scroll-hide pb-2 md:pb-0">
            {categories.map((cat, i) => (
              <button 
                key={cat} 
                className={`${i === 0 ? "bg-primary text-white shadow-xl shadow-primary/20" : "bg-slate-100 text-slate-500 hover:bg-slate-200"} px-6 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-2xl border border-slate-100">
            <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest pl-4">Region:</span>
            <select className="bg-transparent border-none text-xs font-bold focus:ring-0 text-slate-900 pr-10">
              <option>Worldwide</option>
              <option>South America</option>
              <option>Southeast Asia</option>
              <option>Sub-Saharan Africa</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((program, index) => (
            <motion.article 
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-3xl transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black text-primary uppercase tracking-widest">{program.category}</span>
                  <span className="px-3 py-1 bg-primary/90 backdrop-blur-md rounded-full text-[9px] font-black text-white uppercase tracking-widest">{program.region}</span>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-primary transition-colors">{program.title}</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed line-clamp-3">{program.desc}</p>
                
                <div className="mt-auto space-y-4">
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Funded</span>
                    <span className="text-xl font-black text-primary">{program.progress}</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: program.progress }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-gradient-to-r from-primary to-secondary h-full rounded-full" 
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-wider pt-1">
                    <span>Raised: {program.raised}</span>
                    <span>Target: {program.goal}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-10 pt-8 border-t border-slate-100">
                  <Link href={`/programs/${program.id}`}>
                    <button className="bg-slate-900 text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primary transition-all active:scale-95">
                      Case Study
                    </button>
                  </Link>
                  <div className="flex gap-4">
                    <button className="text-slate-300 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">share</span>
                    </button>
                    <button className="text-slate-300 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">favorite</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
