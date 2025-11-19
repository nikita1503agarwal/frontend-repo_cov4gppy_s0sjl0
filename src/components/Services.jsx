import { ListChecks, RefreshCcw, ArrowDownUp, FileBarChart2 } from "lucide-react";

const services = [
  {
    icon: ListChecks,
    title: "Monthly bookkeeping",
    points: [
      "Bank & credit card reconciliation",
      "Categorization using dental COA",
      "Receipt management & audit trail",
    ],
  },
  {
    icon: RefreshCcw,
    title: "Catch-up & cleanup",
    points: [
      "Backlog cleanups and corrections",
      "Fix misapplied deposits & AR mapping",
      "Standardize classes and items",
    ],
  },
  {
    icon: ArrowDownUp,
    title: "Payroll & sales tax coordination",
    points: [
      "Sync payroll summaries to QBO",
      "Coordinate state/local filings",
      "Quarterly review meetings",
    ],
  },
  {
    icon: FileBarChart2,
    title: "Controller-level reporting",
    points: [
      "P&L by provider/location",
      "Production vs collection dashboards",
      "Cash flow and burn insights",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">What we do</h2>
          <p className="mt-4 text-slate-300">Everything required to keep your QuickBooks pristine and decision-ready.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, points }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500/80 text-slate-900 grid place-items-center shadow mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
