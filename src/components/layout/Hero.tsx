export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.24),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.24),_transparent_30%),linear-gradient(135deg,_rgba(15,23,42,0.98),_rgba(8,47,73,0.92))] px-6 py-10 shadow-2xl shadow-cyan-950/40 sm:px-10 lg:px-12">
      <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent)] lg:block" />
      <div className="relative grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Catalogo Premium
          </span>
          <div className="space-y-4">
            <h2 className="max-w-3xl font-[family-name:var(--font-display)] text-4xl font-bold leading-tight text-white sm:text-5xl">
              Construye un setup brutal con componentes listos para rendir al maximo.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Explora GPUs, procesadores, monitores y perifericos con una experiencia moderna,
              filtros en tiempo real y un carrito deslizante siempre a la mano.
            </p>
          </div>
        </div>

        <div className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Top Picks</p>
              <p className="text-2xl font-bold text-white">Gaming + Creator</p>
            </div>
            <p className="text-sm font-medium text-cyan-200">Stock simulado</p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-sm text-slate-200">
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <p className="text-2xl font-bold text-cyan-300">8</p>
              <p>Productos destacados</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <p className="text-2xl font-bold text-orange-300">4</p>
              <p>Categorias activas</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <p className="text-2xl font-bold text-emerald-300">24h</p>
              <p>Actualizacion visual</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
