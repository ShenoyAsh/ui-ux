"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";

export default function DonatePage() {
  const [amount, setAmount] = useState(50);
  const [frequency, setFrequency] = useState("Monthly");

  const amounts = [
    { val: 25, label: "Supplies medical kits for 5 students" },
    { val: 50, label: "Plants 10 trees in the Amazon Canopy", highlight: true },
    { val: 100, label: "Funds digital literacy for a school lab" },
    { val: 250, label: "Provides clean energy for a rural hospital" },
  ];

  const recentActivity = [
    { name: "John D.", location: "London, UK", amount: "$50", time: "2m ago" },
    { name: "Satoshi K.", location: "Tokyo, JP", amount: "$100", time: "5m ago" },
    { name: "Maria G.", location: "Madrid, ES", amount: "$25", time: "12m ago" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-primary/10">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left: Global Impact Narrative */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="lg:col-span-5 space-y-10"
        >
          <div className="space-y-6">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">Global Solidarity</span>
            <h1 className="text-6xl font-bold text-slate-900 leading-tight tracking-tighter">Your support <br />redefines futures.</h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-md">Join a global movement leveraging technology and transparency to create verifiable change across 42 nations.</p>
          </div>

          {/* Recent Activity Card */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-slate-200/50 border border-slate-100">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Live Global Activity
            </h3>
            <div className="space-y-6">
              {recentActivity.map((act, i) => (
                <div key={i} className="flex justify-between items-center group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500 text-xs">{act.name[0]}</div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{act.name}</div>
                      <div className="text-[10px] text-slate-400 font-medium">{act.location}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-primary">{act.amount}</div>
                    <div className="text-[10px] text-slate-400 font-medium">{act.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="material-symbols-outlined text-4xl">verified</span>
            <span className="material-symbols-outlined text-4xl">security</span>
            <span className="material-symbols-outlined text-4xl">public</span>
          </div>
        </motion.div>

        {/* Right: Premium Donation Form */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-7"
        >
          <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-3xl border border-slate-100 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -mr-32 -mt-32 rounded-full"></div>

            {/* Frequency Selection */}
            <div className="mb-12 relative z-10">
              <label className="block text-xs font-black text-slate-400 mb-6 uppercase tracking-[0.2em]">Donation Frequency</label>
              <div className="inline-flex bg-slate-100 p-1.5 rounded-2xl">
                {["Monthly", "One-time"].map(f => (
                  <button 
                    key={f}
                    onClick={() => setFrequency(f)}
                    className={`relative px-10 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${frequency === f ? "text-slate-900" : "text-slate-400 hover:text-slate-600"}`}
                  >
                    {frequency === f && (
                      <motion.div layoutId="freq-pill" className="absolute inset-0 bg-white rounded-xl shadow-xl border border-slate-200" />
                    )}
                    <span className="relative z-10">{f}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-12 relative z-10">
              <label className="block text-xs font-black text-slate-400 mb-6 uppercase tracking-[0.2em]">Select Contribution</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {amounts.map((a) => (
                  <motion.button 
                    key={a.val}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setAmount(a.val)}
                    className={`relative flex flex-col items-center justify-center py-8 px-4 rounded-3xl border-2 transition-all duration-500 ${amount === a.val ? "border-primary bg-primary/5 ring-4 ring-primary/10 shadow-xl" : "border-slate-100 hover:border-primary/30 bg-white"}`}
                  >
                    <span className={`text-4xl font-black tracking-tighter ${amount === a.val ? "text-primary" : "text-slate-900"}`}>${a.val}</span>
                    <span className={`text-[9px] text-center leading-tight mt-3 font-bold uppercase tracking-widest ${amount === a.val ? "text-primary/70" : "text-slate-400"}`}>{a.label}</span>
                    {a.highlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl">Impact Multiplier</div>
                    )}
                  </motion.button>
                ))}
              </div>
              
              <div className="mt-8 relative group">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 font-black text-2xl group-focus-within:text-primary transition-colors">$</span>
                <input 
                  type="number"
                  className="w-full pl-12 pr-6 py-6 bg-slate-50 border-none rounded-2xl focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all text-2xl font-black text-slate-900 placeholder:text-slate-200"
                  placeholder="Enter Custom Amount"
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </div>
            </div>

            {/* Action Section */}
            <div className="space-y-8 pt-10 border-t border-slate-100 relative z-10">
              <button className="w-full py-6 bg-primary text-white rounded-[2rem] font-black text-xl shadow-2xl shadow-primary/30 hover:opacity-95 active:translate-y-1 transition-all flex items-center justify-center gap-3 group">
                Support Global Mission
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform text-2xl">rocket_launch</span>
              </button>
              
              <div className="flex items-center justify-center gap-10 opacity-40">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">lock</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Secure SSL</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">receipt_long</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Tax Receipt</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </main>
  );
}
