"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProgramDetailPage() {
  const program = {
    title: "Amazon Canopy Shield",
    category: "ENVIRONMENT",
    region: "South America",
    desc: "Protecting indigenous lands and restoring critical biodiversity in the heart of the Amazon through satellite monitoring and local patrols.",
    image: "/amazon.png",
    raised: 840200,
    goal: 1200000,
    progress: "70%",
    story: "The Amazon rainforest is at a tipping point. Every hectare lost releases carbon and displaces communities who have guarded this land for centuries. The 'Canopy Shield' isn't just about planting trees; it's about providing local indigenous communities with the technology—satellite data and drones—to detect illegal logging in real-time.",
    impactStats: [
      { label: "Land Protected", value: "450k", unit: "Hectares", icon: "forest" },
      { label: "Species Saved", value: "1.2k+", unit: "Endangered", icon: "biotech" }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('${program.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-12 md:p-24 max-w-7xl mx-auto z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl space-y-8"
          >
            <div className="flex gap-4">
              <span className="bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">{program.category}</span>
              <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">{program.region}</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">{program.title}</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-medium leading-relaxed">{program.desc}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Left: Narrative */}
        <div className="lg:col-span-7 space-y-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">The Mission.</h2>
              <p className="text-xl text-slate-500 leading-relaxed font-medium">{program.story}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {program.impactStats.map((stat, i) => (
                <div key={i} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 group hover:border-primary transition-all duration-500">
                  <span className="material-symbols-outlined text-primary text-5xl mb-6">{stat.icon}</span>
                  <h3 className="text-5xl font-black text-slate-900 mb-2">{stat.value}</h3>
                  <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">{stat.label} ({stat.unit})</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Radical Transparency.</h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Every dollar contributed to the Canopy Shield is logged on our public ledger. We don&apos;t just send aid; we build infrastructure. Currently, 88% of funds go directly to indigenous patrol stipends and satellite maintenance.
            </p>
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden group">
              <img src="/hero-bg.png" alt="Field work" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        {/* Right: Sidebar Donation */}
        <div className="lg:col-span-5">
          <div className="sticky top-32">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-12 rounded-[3.5rem] shadow-3xl border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-[80px] -mr-24 -mt-24 rounded-full" />
              
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-8 relative z-10">Campaign Pulse</h3>
              
              <div className="space-y-10 relative z-10">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-5xl font-black text-slate-900 tracking-tighter">${program.raised.toLocaleString()}</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Raised of ${program.goal.toLocaleString()}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-primary">{program.progress}</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Efficiency 92%</div>
                  </div>
                </div>

                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: program.progress }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[10, 50, 100].map(v => (
                    <button key={v} className="py-4 rounded-2xl border-2 border-slate-100 font-black text-slate-600 hover:border-primary hover:text-primary transition-all active:scale-95 text-lg">${v}</button>
                  ))}
                </div>

                <Link href="/donate" className="block">
                  <button className="w-full py-6 bg-slate-900 text-white rounded-[2rem] font-black text-xl shadow-2xl hover:bg-primary transition-all active:translate-y-1">
                    Support Mission
                  </button>
                </Link>

                <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Share Impact</p>
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
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
