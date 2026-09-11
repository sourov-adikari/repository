export default function Loading() {
  return (
    <main className="w-full flex flex-col pt-28 min-h-screen" role="status" aria-label="Loading services">
      <span className="sr-only">Loading services...</span>

      {/* Page-level heading (from page.tsx, sits above ServicesSection) */}
      <section className="max-w-7xl mx-auto w-full px-5 md:px-6" aria-hidden="true">
        <div className="mb-8 md:mb-10">
          <div className="motion-safe:animate-pulse h-3 w-20 rounded bg-muted mb-2" />
          <div className="motion-safe:animate-pulse h-9 md:h-12 w-64 md:w-80 rounded-xl bg-muted" />
        </div>
      </section>

      {/* ServicesSection */}
      <section className="max-w-7xl mx-auto w-full px-6 py-24" aria-hidden="true">
        <div className="mb-12 text-center">
          <div className="motion-safe:animate-pulse h-9 md:h-12 w-52 md:w-64 rounded-xl bg-muted mx-auto mb-3" />
          <div className="motion-safe:animate-pulse h-4 w-full max-w-md rounded bg-muted mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-[1.5rem] border border-border/80 bg-card/80 p-7 h-full">
              <div className="flex flex-col gap-5">
                <div className="motion-safe:animate-pulse w-12 h-12 rounded-xl bg-muted" />
                <div>
                  <div className="motion-safe:animate-pulse h-6 w-2/3 rounded-lg bg-muted mb-2" />
                  <div className="space-y-2">
                    <div className="motion-safe:animate-pulse h-3.5 w-full rounded bg-muted" />
                    <div className="motion-safe:animate-pulse h-3.5 w-full rounded bg-muted" />
                    <div className="motion-safe:animate-pulse h-3.5 w-2/3 rounded bg-muted" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["w-16", "w-20", "w-14"].map((width, j) => (
                    <div key={j} className={`motion-safe:animate-pulse h-6 rounded-lg bg-muted ${width}`} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
