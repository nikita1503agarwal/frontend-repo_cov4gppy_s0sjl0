import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-80">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-950 pointer-events-none" />
      </div>

      <div className="relative grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-slate-200 text-xs mb-6">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            HIPAA-aware workflows • QBO ProAdvisor • Dental Specialists
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
            Remote QuickBooks for US Dentists
          </h1>
          <p className="mt-6 text-slate-300 text-lg max-w-xl">
            Minimalist, accurate, and on-time bookkeeping for private dental clinics. We reconcile, categorize, and report so you can focus on patient care.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold shadow">
              Get a quote
            </a>
            <a href="#services" className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5">
              See services
            </a>
            <div className="text-xs text-slate-400">
              <p>Avg. onboarding: 3 days • Monthly close by day 5</p>
            </div>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 h-[480px] sm:h-[560px] lg:h-[640px]">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
