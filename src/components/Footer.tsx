"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-sm">public</span>
            </div>
            <span className="text-xl font-black tracking-tighter uppercase">Nexus<span className="text-primary">Global</span></span>
          </div>
          <p className="font-inter text-sm text-slate-400 leading-relaxed max-w-xs">
            Leveraging frontier technology and local leadership to redefine the future of global humanitarian aid.
          </p>
          <div className="flex gap-4">
            {["facebook", "public", "share"].map((icon, i) => (
              <button key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-lg">{icon}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-primary">Global Missions</h4>
          <ul className="space-y-4 text-sm font-bold text-slate-400">
            <li><Link href="/programs" className="hover:text-white transition-colors">Environment</Link></li>
            <li><Link href="/programs" className="hover:text-white transition-colors">Tech Education</Link></li>
            <li><Link href="/programs" className="hover:text-white transition-colors">Clean Energy</Link></li>
            <li><Link href="/programs" className="hover:text-white transition-colors">Emergency Relief</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-secondary">Regional Hubs</h4>
          <ul className="space-y-4 text-sm font-bold text-slate-400">
            <li>London, UK (HQ)</li>
            <li>Singapore (APAC)</li>
            <li>Nairobi, KE (Africa)</li>
            <li>New York, US (Americas)</li>
          </ul>
        </div>

        <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10">
          <h4 className="font-black uppercase tracking-widest text-[10px] mb-4 text-slate-400">Newsletter</h4>
          <p className="text-xs text-slate-300 mb-6 font-medium">Join 1.2M subscribers for monthly transparency reports.</p>
          <div className="flex gap-2">
            <input className="bg-white/10 border-none rounded-xl px-4 py-3 text-xs flex-grow focus:ring-2 focus:ring-primary" placeholder="Email" />
            <button className="bg-primary px-4 rounded-xl hover:bg-secondary transition-colors">
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-500">
        <p>© 2024 Nexus Global. Blockchain Verified NGO.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white">Privacy Protocol</Link>
          <Link href="#" className="hover:text-white">Transparency Report</Link>
          <Link href="#" className="hover:text-white">Terms of Action</Link>
        </div>
      </div>
      
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 blur-[150px] -mr-48 -mb-48 rounded-full"></div>
    </footer>
  );
}
