import type { Metadata, Viewport } from "next";
import "./globals.css";
import BottomNav from "./components/BottonNav";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "My Mobile App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="antialiased">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem('theme');
                  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && systemDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      {/* 1. Added [webkit-tap-highlight-color:transparent] to prevent the ugly blue box on tap.
          2. selection:bg-blue-500/30 improves the look of text selection in both modes.
      */}
      <body 
        suppressHydrationWarning
        className="bg-slate-200 dark:bg-slate-950 flex justify-center min-h-screen transition-colors duration-300 select-none [webkit-tap-highlight-color:transparent]"
      >
        <div className="relative w-full max-w-[450px] min-h-screen bg-background text-foreground flex flex-col shadow-2xl overflow-hidden border-x border-foreground/5">
          
          <main 
            className="flex-1 overflow-y-auto" 
            style={{ 
              paddingTop: "env(safe-area-inset-top)",
              paddingBottom: "env(safe-area-inset-bottom)" 
            }}
          >
            {/* Wrapping children in a p-6 div ensures the padding doesn't 
               interfere with the scrollbar or the touch areas of items.
            */}
            <div className="p-6">
              {children}
            </div>
          </main>

          <BottomNav />
        </div>
      </body>
    </html>
  );
}