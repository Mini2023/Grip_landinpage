"use client";

import { Github, Twitter, MessageSquare, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-emerald-400 flex items-center justify-center font-bold text-black text-xl italic">G</div>
            <span className="text-2xl font-bold tracking-tighter text-white">GRIP</span>
          </div>
          <p className="text-neutral-500 max-w-sm text-sm">
            Forging digital discipline through analytical awareness.
            Privacy-first, local-storage only.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20">
          <LinkGroup 
            title="App" 
            links={[
              { label: "Enter App", href: "https://grip-omega.vercel.app", primary: true },
              { label: "Changelog", href: "#" },
              { label: "Feedback", href: "#" }
            ]} 
          />
          <LinkGroup 
            title="Source" 
            links={[
              { label: "GitHub", href: "https://github.com/Mini2023/Grip" },
              { label: "Security", href: "#" },
              { label: "Terms", href: "#" }
            ]} 
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-neutral-600">
        <span>© 2026 GRIP LABORATORY</span>
        <div className="flex gap-6">
          <a href="https://github.com/Mini2023" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
          </a>
          <Twitter className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
    </footer>
  );
}

function LinkGroup({ title, links }: any) {
  return (
    <div className="space-y-6">
      <h4 className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold">{title}</h4>
      <ul className="space-y-4">
        {links.map((link: any, i: number) => (
          <li key={i}>
            <a 
              href={link.href} 
              className={`group inline-flex items-center gap-1 text-sm transition-colors ${link.primary ? 'text-emerald-400 font-bold hover:text-emerald-300' : 'text-neutral-400 hover:text-white'}`}
            >
              {link.label}
              {link.primary && <ArrowUpRight className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
