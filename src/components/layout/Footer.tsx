export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
            ByteMarket
          </p>
          <p>Frontend academico de tienda de hardware con arquitectura en capas.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-slate-700 px-3 py-1">Next.js</span>
          <span className="rounded-full border border-slate-700 px-3 py-1">React</span>
          <span className="rounded-full border border-slate-700 px-3 py-1">TypeScript</span>
          <span className="rounded-full border border-slate-700 px-3 py-1">Responsive UI</span>
        </div>
      </div>
    </footer>
  );
}
