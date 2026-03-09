"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Bell,
  Moon,
  Lock,
  User,
  ChevronRight,
  Info,
  LucideIcon,
} from "lucide-react";
import { StatusBar, Style } from '@capacitor/status-bar';

interface SettingItem {
  name: string;
  icon: LucideIcon;
  type: "link" | "toggle";
  id: string;
  href?: string; // Path for link items
}

interface SettingGroup {
  title: string;
  items: SettingItem[];
}

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();

  // Load theme and sync Status Bar on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      applyTheme(true);
    } else {
      applyTheme(false);
    }
  }, []);

  const applyTheme = async (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add("dark");
      // Capacitor: Make status bar icons white for dark background
      try { await StatusBar.setStyle({ style: Style.Dark }); } catch (e) {}
    } else {
      document.documentElement.classList.remove("dark");
      // Capacitor: Make status bar icons dark for light background
      try { await StatusBar.setStyle({ style: Style.Light }); } catch (e) {}
    }
  };

  const handleToggle = (id: string, checked: boolean) => {
    if (id === "dark-mode") {
      setIsDarkMode(checked);
      localStorage.setItem("theme", checked ? "dark" : "light");
      applyTheme(checked);
    }
  };

  const settingsGroups: SettingGroup[] = [
    {
      title: "Account",
      items: [
        { id: "profile", name: "Profile Details", icon: User, type: "link", href: "/profile/" },
        { id: "security", name: "Security", icon: Lock, type: "link", href: "/security/" },
      ],
    },
    {
      title: "Preferences",
      items: [
        { id: "notifications", name: "Notifications", icon: Bell, type: "toggle" },
        { id: "dark-mode", name: "Dark Mode", icon: Moon, type: "toggle" },
      ],
    },
    {
      title: "Support",
      items: [{ id: "about", name: "About App", icon: Info, type: "link", href: "/about/" }],
    },
  ];

  return (
    <div className="pb-10 animate-in fade-in duration-500">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Settings</h1>
        <p className="text-foreground/60 text-sm">Manage your app experience</p>
      </header>

      <div className="space-y-8">
        {settingsGroups.map((group) => (
          <section key={group.title}>
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 ml-1">
              {group.title}
            </h2>
            <div className="bg-foreground/5 rounded-2xl overflow-hidden border border-foreground/5 shadow-sm">
              {group.items.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => item.type === "link" && item.href && router.push(item.href)}
                  className={`flex items-center justify-between p-4 active:bg-foreground/10 transition-colors cursor-pointer ${
                    index !== group.items.length - 1 ? "border-b border-foreground/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-background rounded-lg shadow-sm border border-foreground/5">
                      <item.icon size={18} className="text-blue-600" />
                    </div>
                    <span className="font-medium text-sm">{item.name}</span>
                  </div>

                  {item.type === "toggle" ? (
                    <label className="relative inline-flex items-center cursor-pointer" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={item.id === "dark-mode" ? isDarkMode : undefined}
                        onChange={(e) => handleToggle(item.id, e.target.checked)}
                      />
                      <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  ) : (
                    <ChevronRight size={18} className="opacity-20" />
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="mt-12 text-center">
        <p className="text-[10px] font-bold text-foreground/20 uppercase tracking-[0.2em]">
          Version 1.0.4 (Build 2026)
        </p>
      </footer>
    </div>
  );
}