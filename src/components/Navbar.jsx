import { Menu, Phone, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/20 ring-1 ring-white/20 grid place-items-center">
            <span className="text-white font-bold">QB</span>
          </div>
          <div>
            <p className="text-white font-semibold leading-tight">Dental Books</p>
            <p className="text-xs text-slate-300/70">QuickBooks Online | Remote</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="text-slate-300 hover:text-white transition">Services</a>
          <a href="#benefits" className="text-slate-300 hover:text-white transition">Why Dentists</a>
          <a href="#process" className="text-slate-300 hover:text-white transition">Process</a>
          <a href="#cta" className="text-slate-300 hover:text-white transition">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="mailto:hello@dentalbooks.co"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/10 transition"
          >
            <Mail className="h-4 w-4" />
            <span className="text-sm">hello@dentalbooks.co</span>
          </a>
          <a
            href="tel:+15551234567"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold shadow hover:opacity-95 transition"
          >
            <Phone className="h-4 w-4" />
            <span className="text-sm">Book a call</span>
          </a>
          <button className="md:hidden p-2 text-slate-200" aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
