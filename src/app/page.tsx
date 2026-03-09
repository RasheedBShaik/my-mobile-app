"use client";

import { 
  LayoutGrid, 
  Zap, 
  Star, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck 
} from "lucide-react";

export default function Home() {
  const features = [
    { title: "Fast Sync", icon: Zap, color: "text-amber-500", bg: "bg-amber-500/10" },
    { title: "Security", icon: ShieldCheck, color: "text-green-500", bg: "bg-green-500/10" },
    { title: "Favorites", icon: Star, color: "text-purple-500", bg: "bg-purple-500/10" },
    { title: "Analytics", icon: TrendingUp, color: "text-blue-500", bg: "bg-blue-500/10" },
  ];

  return (
    <div className="flex flex-col pb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
      {/* 1. Welcome Header */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">Hello, John 👋</h1>
          <p className="text-foreground/50 text-sm">Your app is ready for action.</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/30">
          JD
        </div>
      </header>

      {/* 2. Hero Card */}
      <div className="relative overflow-hidden bg-blue-600 rounded-3xl p-6 mb-8 text-white shadow-xl shadow-blue-600/20">
        <div className="relative z-10">
          <h2 className="text-lg font-bold mb-1">Capacitor Power</h2>
          <p className="text-blue-100 text-sm mb-4 max-w-[200px]">
            You are running a production-ready Next.js build.
          </p>
          <button className="bg-white text-blue-600 text-xs font-bold px-4 py-2 rounded-full active:scale-95 transition-transform flex items-center gap-2">
            Get Started <ArrowRight size={14} />
          </button>
        </div>
        {/* Background Decor */}
        <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-[-20%] left-[-5%] w-24 h-24 bg-blue-400/20 rounded-full blur-xl" />
      </div>

      {/* 3. Feature Grid */}
      <section className="mb-8">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600">Quick Actions</h3>
          <span className="text-[10px] font-bold opacity-30 uppercase">See All</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {features.map((f) => (
            <button 
              key={f.title}
              className="flex flex-col items-start p-4 rounded-2xl bg-foreground/5 border border-foreground/5 active:bg-foreground/10 transition-colors text-left"
            >
              <div className={`p-2 rounded-xl ${f.bg} ${f.color} mb-3`}>
                <f.icon size={20} />
              </div>
              <span className="font-bold text-sm">{f.title}</span>
            </button>
          ))}
        </div>
      </section>

      {/* 4. Activity List */}
      <section>
        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">Recent Updates</h3>
        <div className="space-y-3">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center gap-4 p-3 bg-foreground/5 rounded-2xl border border-foreground/5">
              <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center">
                <LayoutGrid size={18} className="opacity-40" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold">System Update {i}</p>
                <p className="text-xs opacity-50">Sync completed 2h ago</p>
              </div>
              <ChevronRight size={16} className="opacity-20" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Helper icon for the list
function ChevronRight({ size, className }: { size: number, className: string }) {
  return (
    <svg 
      width={size} height={size} viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
      className={className}
    >
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}