"use client"
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex flex-col h-screen bg-slate-50"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      {/* App Header */}
      <header className="p-6 bg-blue-600 text-white shadow-md">
        <h1 className="text-xl font-bold text-center">Hello Mobile</h1>
      </header>

      {/* Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center border border-slate-200">
          <span className="text-5xl mb-4 block">📱</span>
          <h2 className="text-2xl font-bold text-slate-800">Native Feel</h2>
          <p className="text-slate-500 mt-2">Next.js + Capacitor + PNPM</p>

          <button
            onClick={() => alert("Mobile button clicked!")}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold active:scale-95 transition-transform"
          >
            Test Haptic
          </button>
        </div>
      </div>

      {/* Bottom Tabs */}
      <nav
        className="p-4 bg-white border-t border-slate-200 flex justify-around items-center"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <button className="text-blue-600">🏠</button>
        <button className="text-slate-400">👤</button>
        <button className="text-slate-400">⚙️</button>
      </nav>
    </main>
  );
}
