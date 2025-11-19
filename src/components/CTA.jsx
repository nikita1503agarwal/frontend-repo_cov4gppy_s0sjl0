export default function CTA() {
  return (
    <section id="cta" className="py-20 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">Let’s keep your books spotless</h2>
        <p className="mt-4 text-slate-300">Share your clinic size, current tools, and any backlog. We’ll send a fixed monthly quote within 24 hours.</p>
        <form className="mt-8 grid sm:grid-cols-3 gap-3">
          <input type="text" placeholder="Clinic name" className="col-span-3 sm:col-span-1 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
          <input type="email" placeholder="Work email" className="col-span-3 sm:col-span-1 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
          <input type="text" placeholder="# of providers" className="col-span-3 sm:col-span-1 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
          <button type="submit" className="col-span-3 mt-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold shadow">Request quote</button>
        </form>
        <p className="mt-3 text-xs text-slate-400">By submitting, you agree to our terms. We’ll never share your info.</p>
      </div>
    </section>
  );
}
