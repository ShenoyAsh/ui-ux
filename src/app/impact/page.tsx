"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ value, duration = 2 }: { value: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const target = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');

  useEffect(() => {
    let start = 0;
    const end = target;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count.toLocaleString(undefined, { maximumFractionDigits: 1 })}{suffix}</span>;
}

export default function ImpactPage() {
  const stats = [
    { label: "Lives Impacted", value: "1.4M+", icon: "favorite" },
    { label: "Verified Transparency", value: "100%", icon: "verified" },
    { label: "Active Countries", value: "42", icon: "public" },
    { label: "Success Rate", value: "98.4%", icon: "trending_up" }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-32 space-y-8"
        >
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] border border-primary/20">Real-Time Data Feed</span>
          <h1 className="text-7xl font-black text-slate-900 tracking-tighter leading-tight">Quantifying <br />Radical Change.</h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">Our blockchain-verified dashboard ensures every contribution creates a measurable, verifiable ripple effect across the globe.</p>
        </motion.section>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center space-y-6 group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-20 h-20 bg-primary/5 rounded-[2rem] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined text-4xl">{stat.icon}</span>
              </div>
              <div>
                <div className="text-5xl font-black text-slate-900 tracking-tighter mb-2">
                  <Counter value={stat.value} />
                </div>
                <div className="text-slate-400 font-black uppercase tracking-widest text-[10px]">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Timeline */}
        <section className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Our Evolution</h2>
            <div className="h-px flex-grow bg-slate-200"></div>
          </div>
          
          <div className="space-y-16 relative">
            <div className="absolute left-[39px] top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block"></div>
            {[
              { year: "2010", title: "The Foundation", desc: "Nexus Global was founded with a single mission: to create a radical new model for transparent charitable giving using peer-to-peer verification." },
              { year: "2015", title: "Global Expansion", desc: "Scaled operations to 12 countries and launched our first open-source data tracking dashboard for donors, achieving 100% audit compliance." },
              { year: "2022", title: "The Million Milestone", desc: "Successfully reached our milestone of serving 1 million people through sustainable health and education programs across four continents." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-12 relative"
              >
                <div className="w-20 h-20 bg-white border-4 border-slate-100 rounded-3xl flex items-center justify-center flex-shrink-0 z-10 shadow-lg group hover:border-primary transition-colors">
                  <span className="text-lg font-black text-primary">{item.year}</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
