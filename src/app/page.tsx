"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const stats = [
    { icon: "public", value: "42", label: "Countries Active", progress: "100%" },
    { icon: "favorite", value: "1.4M", label: "Lives Impacted", progress: "92%" },
    { icon: "verified_user", value: "100%", label: "Transparency", progress: "100%" },
  ];

  const programs = [
    {
      id: "amazon-protection",
      category: "CONSERVATION",
      title: "Amazon Canopy Shield",
      desc: "Protecting indigenous lands and restoring critical biodiversity in the heart of the Amazon.",
      image: "/amazon.png",
      goal: "$1.2M",
      raised: "$840k",
      progress: "70%",
      region: "South America"
    },
    {
      id: "asia-digital",
      category: "EDUCATION",
      title: "Future-Ready Classrooms",
      desc: "Bridging the digital divide for 50,000 students in rural Southeast Asia through satellite tech.",
      image: "/asia-edu.png",
      goal: "$450k",
      raised: "$310k",
      progress: "68%",
      region: "Southeast Asia"
    },
    {
      id: "clean-energy",
      category: "SUSTAINABILITY",
      title: "Global Energy Transition",
      desc: "Deploying modular solar microgrids to power hospitals and schools in off-grid regions.",
      image: "/clean-energy.png",
      goal: "$2.5M",
      raised: "$1.8M",
      progress: "72%",
      region: "Global South"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <main className="min-h-screen bg-white selection:bg-primary/10">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/hero-bg.png"
            alt="Global Impact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-2xl space-y-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              Global Relief Network
            </span>
            <h1 className="text-7xl font-bold text-white leading-[1.05] tracking-tight">
              Nexus Global: <br />
              <span className="text-secondary">Radical Clarity.</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed max-w-lg">
              We leverage technology and local leadership to solve the world&apos;s most complex challenges with verifiable, real-time results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/donate">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                >
                  Join the Mission <span className="material-symbols-outlined">arrow_forward</span>
                </motion.button>
              </Link>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                Watch Impact <span className="material-symbols-outlined">play_circle</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        >
          <span className="material-symbols-outlined text-4xl">keyboard_double_arrow_down</span>
        </motion.div>
      </section>

      {/* Trust & Stats Section */}
      <section className="py-24 bg-surface-container-low border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 flex items-center gap-6 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <span className="material-symbols-outlined text-3xl">{stat.icon}</span>
                </div>
                <div>
                  <div className="text-4xl font-bold text-slate-900 tracking-tight">{stat.value}</div>
                  <div className="text-slate-500 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Programs Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="max-w-2xl space-y-4"
            >
              <h2 className="text-5xl font-bold tracking-tight text-slate-900">Global Initiatives</h2>
              <p className="text-xl text-slate-600">Verifiable solutions spanning across continents, driven by data and localized expertise.</p>
            </motion.div>
            <Link href="/programs" className="group text-primary font-bold flex items-center gap-2 text-lg">
              Explore All Programs 
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">chevron_right</span>
            </Link>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {programs.map((program) => (
              <motion.div 
                key={program.id} 
                variants={itemVariants}
                className="group flex flex-col bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:bg-white hover:shadow-3xl transition-all duration-500"
              >
                <div className="h-72 relative overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-primary uppercase tracking-widest">{program.category}</span>
                    <span className="px-3 py-1 bg-primary/90 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest">{program.region}</span>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">{program.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{program.desc}</p>
                  
                  <div className="space-y-3 pt-4">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Progress</span>
                      <span className="text-lg font-bold text-primary">{program.progress}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: program.progress }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      ></motion.div>
                    </div>
                    <div className="flex justify-between text-[11px] font-bold text-slate-500">
                      <span>Raised: {program.raised}</span>
                      <span>Target: {program.goal}</span>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link href="/donate">
                      <button className="w-full py-4 bg-white border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary hover:text-white transition-all duration-300">
                        Support Initiative
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Impact Map CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-primary rounded-[3rem] p-12 md:p-24 text-center space-y-10 relative overflow-hidden shadow-3xl"
          >
            <div className="relative z-10 space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">Radical Transparency, <br />Global Transformation.</h2>
              <p className="text-xl text-primary-container max-w-2xl mx-auto leading-relaxed">
                We use blockchain verification to track every donation from your wallet to the project site. Join 1.2M donors worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Link href="/impact">
                  <button className="px-10 py-5 bg-secondary text-white rounded-2xl font-bold text-xl hover:bg-white hover:text-primary transition-all shadow-xl">
                    View Real-Time Data
                  </button>
                </Link>
                <Link href="/about">
                  <button className="px-10 py-5 bg-white/10 text-white border border-white/20 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all">
                    Our Global Partners
                  </button>
                </Link>
              </div>
            </div>
            {/* Abstract Map Background Decoration */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[400px] absolute -top-20 -right-20">public</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
