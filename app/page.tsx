export default function Home() {
  return (
    <main className="min-w-full text-white">
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono text-white/40 tracking-widest">
              SYSTEM ONLINE
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none">
            TEAM OS
          </h1>

          <p className="mt-6 text-lg text-white/60 max-w-xl">
            Modern management software for organizers,
            leaders, and users. Fast, simple, and scalable.
          </p>

          <div className="flex gap-4 mt-10">
            <button className="px-6 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">
              Open Dashboard
            </button>

            <button className="px-6 py-3 rounded-md border border-white/10 hover:border-white/30 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}