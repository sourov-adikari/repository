export default function Loading() {
  return (
    <main className="w-full flex flex-col pt-28 min-h-screen" role="status" aria-label="Loading projects">
      <span className="sr-only">Loading projects...</span>

      <section className="w-full max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-20" aria-hidden="true">
        {/* Header — eyebrow, heading, intro line */}
        <div className="mb-8">
          <div className="motion-safe:animate-pulse h-3 w-20 rounded bg-muted mb-2" />
          <div className="motion-safe:animate-pulse h-9 md:h-12 w-72 md:w-96 rounded-xl bg-muted mb-2" />
          <div className="space-y-2 max-w-2xl">
            <div className="motion-safe:animate-pulse h-4 w-full rounded bg-muted" />
            <div className="motion-safe:animate-pulse h-4 w-2/3 rounded bg-muted" />
          </div>
        </div>

        {/* Search / filter bar */}
        <div className="mb-7 rounded-2xl border border-foreground/10 bg-foreground/[0.025] p-3 md:p-4">
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="motion-safe:animate-pulse h-10 flex-1 rounded-xl bg-muted" />
            <div className="motion-safe:animate-pulse h-10 w-full lg:w-36 rounded-xl bg-muted" />
            <div className="motion-safe:animate-pulse h-10 w-full lg:w-32 rounded-xl bg-muted" />
          </div>
          <div className="motion-safe:animate-pulse mt-3 h-3 w-52 max-w-full rounded bg-muted" />
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="relative overflow-hidden rounded-[1.75rem] border border-foreground/10 h-[390px] shadow-xl flex flex-col">
              {/* image area */}
              <div className="motion-safe:animate-pulse flex-1 bg-gradient-to-br from-neutral-700 to-neutral-900" />

              {/* content footer — solid panel, clearly separated from the image area */}
              <div className="bg-neutral-900 border-t border-white/10 p-5 space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="w-full max-w-[75%] space-y-2.5">
                    <div className="motion-safe:animate-pulse h-2.5 w-20 rounded-full bg-white/20" />
                    <div className="motion-safe:animate-pulse h-5 w-3/4 rounded-lg bg-white/25" />
                  </div>
                  <div className="motion-safe:animate-pulse w-9 h-9 rounded-full bg-white/20 shrink-0" />
                </div>
                <div className="space-y-1.5">
                  <div className="motion-safe:animate-pulse h-3 w-full rounded bg-white/15" />
                  <div className="motion-safe:animate-pulse h-3 w-2/3 rounded bg-white/15" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
