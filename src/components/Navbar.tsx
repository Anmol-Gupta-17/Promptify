import { GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Questions', href: '#questions' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Resources', href: '#resources' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass-strong">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-sky-500 flex items-center justify-center group-hover:scale-105 transition-transform">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">
            Student<span className="text-gradient">Path</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-300 hover:text-teal-300 transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <button className="md:hidden text-slate-300" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass-strong border-t border-slate-800/50">
          <div className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800/50 hover:text-teal-300 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
