export default function Loading() {
  return (
    <main className="w-full flex flex-col pt-28 min-h-screen" role="status" aria-label="Loading profile page">
      <span className="sr-only">Loading profile page...</span>

      {/* About skeleton — mirrors AboutSection's image + copy + stats grid */}
      <section className="about-section max-w-7xl mx-auto w-full px-6 py-24 md:py-28" aria-hidden="true">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="w-full flex justify-center">
            <div className="motion-safe:animate-pulse relative w-full max-w-sm aspect-[4/5] rounded-[2rem] border border-foreground/10 bg-muted" />
          </div>

          <div className="min-w-0 space-y-8">
            <div>
              <div className="motion-safe:animate-pulse h-3 w-24 rounded bg-muted mb-4" />
              <div className="space-y-3 mb-5">
                <div className="motion-safe:animate-pulse h-8 md:h-11 w-full max-w-md rounded-xl bg-muted" />
                <div className="motion-safe:animate-pulse h-8 md:h-11 w-2/3 max-w-xs rounded-xl bg-muted" />
              </div>
              <div className="space-y-2.5 max-w-2xl">
                <div className="motion-safe:animate-pulse h-4 w-full rounded bg-muted" />
                <div className="motion-safe:animate-pulse h-4 w-full rounded bg-muted" />
                <div className="motion-safe:animate-pulse h-4 w-5/6 rounded bg-muted" />
              </div>
            </div>

            <div className="h-px w-24 bg-gradient-to-r from-muted to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-2xl border border-foreground/10 bg-card/70 p-5 md:p-6 min-h-36 flex flex-col justify-between">
                  <div className="motion-safe:animate-pulse w-max p-3 rounded-xl bg-muted"><div className="w-6 h-6" /></div>
                  <div className="space-y-2">
                    <div className="motion-safe:animate-pulse h-7 w-14 rounded-lg bg-muted" />
                    <div className="motion-safe:animate-pulse h-3.5 w-28 rounded bg-muted" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Languages skeleton — mirrors LanguagesSection's heading + wrapped chip list */}
      <section className="languages-section max-w-7xl mx-auto w-full px-6 pb-24 pt-4 md:pb-32" aria-hidden="true">
        <div className="flex items-center gap-3 mb-8 border-t border-foreground/10 pt-10">
          <div className="motion-safe:animate-pulse w-10 h-10 rounded-xl bg-muted" />
          <div className="motion-safe:animate-pulse h-7 md:h-8 w-36 rounded-lg bg-muted" />
        </div>
        <div className="flex flex-wrap gap-3">
          {["w-24", "w-32", "w-28", "w-20", "w-36", "w-24"].map((width, i) => (
            <div key={i} className={`rounded-2xl border border-foreground/10 bg-card/70 px-5 py-3 h-11 flex items-center ${width}`}>
              <div className="motion-safe:animate-pulse h-4 w-full rounded bg-muted" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
