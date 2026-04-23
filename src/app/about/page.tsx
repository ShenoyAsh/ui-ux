"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  const team = [
    { name: "Dr. Elena Rodriguez", role: "Chief Executive Officer", region: "Global", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYcjO_iepRJZlBSNzrp-jLtd5nH3RTZo7vTOT9gG81fxmCaWNQ1W9_aYoy6DGiOc3FSOhBsSxGrzPGxR0TjOQ4Eiy5_xDpxuSmtLMBHS6kuQbRFhW7LbgaIZ7WM2dIj9R_mt6Y1GM8Ku4KpTLqB0JeOlKYfxPyZR4rrWA6HBygL76MwvWl2cT5XXsmcssCbkyoF0WesNKzbfuUJP0uy86z_xP2GH-pJ6FHNXYo3kBdlSWuagjdWL0TSJtoBAwK-KAhecRgKbvdSpM" },
    { name: "Marcus Thorne", role: "Head of Operations", region: "EMEA", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMCOs5sU1UpTN4A_IunmlZea_nuCfcTSFhB47muJX4oB60yFVHqNHJbG7l1yZsq-qQqemWmpiDuMrt9X_5RFrNzNi4nOO0641qiQ8548HuvkN3xHirCui2i8i7raUKjmOlkBHuWBXNTDpbtbIB2ugY7ngu2h31O2K4yGgunx8jTarcXw1vAMfRGaq6xYvJDgMrIEuassQvaEKbzy12R4a6qgEcOK5bg-_81dN-ECV8EosFIH-9u_abVyWEU-Zej2QUG8iFvhbzrB0" },
    { name: "Sarah Chen", role: "Director of Programs", region: "APAC", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCffGILp0KHhqCpuyXfa3L7_oLEPzFvnc2C9xw762g9FkEXsdUJrTpwJqdo20yFvVgnhhKFFXky4TbA-AP-HktqxKvG7F9S1RN2M_RAAZ8w-CSqCsHGcV92DxMvZroOriVMC5Uf1Jn4fwK_eDL-LVmJqIfjRsKj3i2u7si7m46AE47XyDWWZKPrKWz6vEF8eYaz5-i1t2ve2QKvyyaseTTyA47BdwV6oqAH74lFJZh38yrpegT3IrjpnFfCkAfkSm8eFk1pPZtSXiQ" },
    { name: "David Okoro", role: "Strategic Partnerships", region: "Africa", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBemiKKu1Xnvzz4PVCFAztDAKxriRtMDglGZZPppH7tThVeGMun78xggq7sncN7AODplmXPoDWNoAH3x1cLWRZw9-vQYK0LdAGVTVmQZ7Ub4W_QMgwt35wXqxXe9A5BNUBXfLwwvGooBmc0rolIP1RURxzzp4wLoIFS95mZ2ZwdJdRLvPU2_szU7OLd64VbtG7Mqb5w60NglLFZiKHp7Ybc2OdDmf-RSKoMwFJTliBjoe6xgKpXVvuS-6iGzrLn5P2oVBnrhWa8QA0" }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-32 space-y-8"
        >
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] border border-primary/20">Our Philosophy</span>
          <h1 className="text-7xl font-black text-slate-900 tracking-tighter leading-tight">Driven by <br />Collective Humanity.</h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">Nexus Global is a distributed network of technologists, field experts, and community leaders united by a single mission: to solve localized challenges with global efficiency.</p>
        </motion.section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-5xl font-black tracking-tight text-slate-900">Beyond Aid. <br />Sustainable Autonomy.</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              We don&apos;t believe in &quot;one-size-fits-all&quot; solutions. Every community we serve has unique challenges and strengths. Our role is to provide the resources and technical expertise while the local leadership drives the transformation.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                <h4 className="text-4xl font-black text-primary mb-2">92%</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Efficiency Rating</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                <h4 className="text-4xl font-black text-secondary mb-2">42</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Nations</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[700px] rounded-[4rem] overflow-hidden shadow-3xl"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH8b0kgFsFZMWUre5SGPUxBFkLEDY2M0KE-ars1lDWY_Tz08KheklpUPh29Co3FM_t52CJtSgIwLZxLzZL9lS3MBDrTVSqH97hB7yk3hCrZ3oY47rL1m_fRA-wvvpToT9R3uzPwnY2bIjdB_xh_wQxICBEwYQT5I5XoowEwY8j1gYpzOiwqzSQLGHNp7tgdmX68X2okecHIwknYMqiJ9KeKiJyEDny_algVWgCvvjmpKLDVo7dzQ7ZfyYNsJMPJjeJJ_bK0D4W0ok" 
              alt="Our global team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </motion.div>
        </section>

        <section className="mb-40">
          <div className="flex items-center gap-6 mb-20">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">The Team</h2>
            <div className="h-px flex-grow bg-slate-200"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="h-[450px] rounded-[3rem] overflow-hidden mb-8 shadow-xl group-hover:shadow-3xl transition-all duration-500 relative">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black text-primary uppercase tracking-widest">{member.region}</span>
                  </div>
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-1">{member.name}</h4>
                <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
