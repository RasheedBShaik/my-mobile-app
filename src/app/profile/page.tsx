"use client";

import {
  User,
  Mail,
  MapPin,
  Calendar,
  Edit2,
  Camera,
  LogOut,
} from "lucide-react";

export default function Profile() {
  return (
    <div className="flex flex-col pb-10 animate-in slide-in-from-bottom-4 duration-500">
      {/* 1. Header / Avatar Section */}
      <div className="flex flex-col items-center mt-4 mb-8">
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-blue-600/10 border-4 border-background flex items-center justify-center shadow-xl overflow-hidden">
            <User size={64} className="text-blue-600" />
          </div>
          <button className="absolute bottom-1 right-1 bg-blue-600 p-2 rounded-full text-white shadow-lg active:scale-95 transition-transform">
            <Camera size={18} />
          </button>
        </div>

        <h1 className="mt-4 text-2xl font-bold">John Doe</h1>
        <p className="text-foreground/50 text-sm flex items-center gap-1">
          <MapPin size={14} /> New York, USA
        </p>
      </div>

      {/* 2. Stats Row */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Posts", value: "12" },
          { label: "Followers", value: "850" },
          { label: "Following", value: "124" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-foreground/5 p-3 rounded-2xl text-center border border-foreground/5"
          >
            <div className="font-bold text-lg">{stat.value}</div>
            <div className="text-[10px] uppercase tracking-wider opacity-50">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* 3. Info List */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 ml-1">
          About Me
        </h3>

        <div className="bg-foreground/5 rounded-2xl p-4 space-y-4 border border-foreground/5">
          <div className="flex items-center gap-4">
            <Mail className="text-foreground/40" size={20} />
            <div>
              <p className="text-[10px] uppercase opacity-40 font-bold">
                Email
              </p>
              <p className="text-sm font-medium">john.doe@example.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Calendar className="text-foreground/40" size={20} />
            <div>
              <p className="text-[10px] uppercase opacity-40 font-bold">
                Joined
              </p>
              <p className="text-sm font-medium">March 2024</p>
            </div>
          </div>
        </div>

        {/* 4. Action Buttons */}
        <div className="flex flex-col gap-3 pt-4">
          <button className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all">
            <Edit2 size={18} />
            Edit Profile
          </button>

          <button className="flex items-center justify-center gap-2 w-full bg-red-500/10 text-red-500 font-bold py-4 rounded-2xl active:bg-red-500/20 transition-all">
            <LogOut size={18} />
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
