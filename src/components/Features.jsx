import { ShieldCheck, CalendarCheck, Receipt, Banknote, FileSpreadsheet, Bell } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "QBO-Centric & Secure",
    desc: "Bank-grade security, read-only bank feeds, and role-based access. Aligned with HIPAA-friendly practices.",
  },
  {
    icon: CalendarCheck,
    title: "Predictable Close",
    desc: "Monthly close by the 5th business day with clear deliverables and status updates.",
  },
  {
    icon: Receipt,
    title: "Clean Categorization",
    desc: "Dental-specific chart of accounts and class tracking for providers and locations.",
  },
  {
    icon: Banknote,
    title: "Collections & Payouts",
    desc: "Reconcile insurance payouts, patient payments, and merchant processors without the chaos.",
  },
  {
    icon: FileSpreadsheet,
    title: "Reporting That Matters",
    desc: "P&L by provider, production vs. collection, chair-time economics, and AR snapshots.",
  },
  {
    icon: Bell,
    title: "Proactive Alerts",
    desc: "Unusual spend, missed deposits, and cash runway notifications before they become problems.",
  },
];

export default function Features() {
  return (
    <section id="benefits" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Built for private dental clinics</h2>
          <p className="mt-4 text-slate-300">A specialist partner who speaks your language and keeps your books pristine.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500/80 text-slate-900 grid place-items-center shadow mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
