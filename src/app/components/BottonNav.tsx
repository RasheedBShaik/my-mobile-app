"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Settings } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  // Helper function to check if a link is active
  const isActive = (path: string) => pathname === path;

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Profile", href: "/profile/", icon: User },
    { name: "Settings", href: "/settings/", icon: Settings },
  ];

  return (
    <nav 
      className="bg-background/80 backdrop-blur-md border-t border-foreground/5 flex justify-around items-center h-16 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]" 
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.href);

        return (
          <Link 
            key={item.name} 
            href={item.href} 
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${
              active ? "text-blue-600 scale-110" : "opacity-50 text-foreground"
            }`}
          >
            <Icon size={22} strokeWidth={active ? 2.5 : 2} />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}