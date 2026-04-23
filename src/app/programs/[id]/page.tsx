import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ProgramDetailPage() {
  // In a real app, this would fetch data based on params.id
  const program = {
    title: "Pure Water for Rural Communities in East Africa",
    category: "Sustainable Water Initiative",
    desc: "Ensuring every child has access to clean, safe drinking water through sustainable solar-powered borehole technology.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkugsmJVoxDgeg95ezJyacGdSozIAjO3zoORiGFUcwHEdw07Y4X8RUzqZpQV_-EQ51FODAhGJlvPBXsC-TDeAFh3FpSWo34_89Qg9PZSnallM7LCvsqnW0gaTf7sfcwfn2Yx7LTfXomFvRwPAjv1nbA5Hpdkt40zP_FMrdtusO7f_TKnNM1_0Rn0f-n2cKO_qWBlstXvFc-i92A8HUoVfYbL1GHMz2GQfbHNzRCKwCX0S1EAn6QeR9W1dOohV4wbmxRGzLeO0Odec",
    raised: 42500,
    goal: 60000,
    progress: 71,
    story: "In many rural regions, families walk over 5 miles daily to collect water that is often contaminated. This cycle of water poverty leads to health crises, prevents children from attending school, and stalls local economic growth. Our mission is to break this cycle by installing permanent, community-managed water systems.",
    impactImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuArdVbI7Yqq5Ot3jHoFifzdfb-gE9UZ9STBat6q58ywWrlxdzG41E8jxZqu0tyexEg7v5dVkILW-6KF1UaC9OccjapKZgCP3U5XLYSwV8Ak3GPUWJi7FPWET98UFp7Yjt0zhFv09kppoyNBUmlyZQUxHt4JEzimhXZ0CwTVy_QsoqZVy4CFVV3sYkcPZ0fiYojsmTVejg5eK9r2_AJQ5pitX8lBxoCzz-eW7cilXe03geFz5R4qUNmpp4A21kkovNp0UBYAlFXprtE"
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('${program.image}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-12 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">{program.category}</span>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">{program.title}</h1>
            <p className="text-xl text-white/90 max-w-2xl font-medium">{program.desc}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-on-surface mb-6">The Challenge</h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">{program.story}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">opacity</span>
                <h3 className="text-3xl font-bold mb-2">12,000+</h3>
                <p className="text-on-surface-variant font-medium">People currently lacking safe water.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">school</span>
                <h3 className="text-3xl font-bold mb-2">40%</h3>
                <p className="text-on-surface-variant font-medium">Increase in school attendance expected.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-on-surface mb-6">The Impact Story</h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">Amina, a 12-year-old, used to spend four hours every morning fetching water. Today, she is the top of her class and dreams of becoming a doctor. Your support doesn&apos;t just provide water; it provides a future.</p>
            <img src={program.impactImg} alt="Impact" className="w-full h-96 object-cover rounded-3xl my-12 shadow-xl" />
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-50">
              <h4 className="text-xl font-bold mb-4">Fundraising Progress</h4>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-primary">${program.raised.toLocaleString()}</span>
                <span className="text-on-surface-variant text-sm font-medium">raised of ${program.goal.toLocaleString()}</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full mb-8">
                <div className="bg-primary h-full rounded-full" style={{ width: `${program.progress}%` }}></div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {[25, 50, 100].map(v => (
                    <button key={v} className="py-3 border-2 border-slate-100 rounded-xl font-bold hover:border-primary hover:text-primary transition-all">${v}</button>
                  ))}
                </div>
                <Link href="/donate">
                  <button className="w-full bg-primary text-on-primary py-5 rounded-2xl font-bold text-xl shadow-lg hover:opacity-90 transition-all mt-4">
                    Support This Program
                  </button>
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <p className="text-xs font-bold text-on-surface-variant mb-4 uppercase tracking-widest">Share this story</p>
                <div className="flex gap-4">
                  <button className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-primary transition-all">
                    <span className="material-symbols-outlined">share</span>
                  </button>
                  <button className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-primary transition-all">
                    <span className="material-symbols-outlined">chat</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Programs */}
      <section className="bg-surface-container-low py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-on-surface mb-12">Other Ways to Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
              <div className="h-48 overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8NgnVx8Y98Hnrls9WMljSBI2X8RodBpKKqN_3axMaGNE11veof_KReQDRLh1K-PtKgU6aRFijsmw1lXbbkCaTWIDuvmkO6WMMyYwXCW6_wgPfs7sAkC8xydJaSuJ6S6k7rkut3Q7jeijOHdiGuTkaGNC8YBMG915DOBKohcuaBEuZv8J0js9pGWnyAlDzv4cT21VehE3l1E9AiqL1cFV2n4WIAxkv0Sk4YxzK93YL8OdI3GESEVHsnIEd-oneMd7yenRik9TVqd4" alt="Education" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">Education</span>
                <h3 className="text-xl font-bold mb-4 leading-tight">Digital Literacy in Remote Schools</h3>
                <Link href="#" className="text-primary font-semibold flex items-center hover:translate-x-1 transition-transform">
                  View Details <span className="material-symbols-outlined ml-1">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
