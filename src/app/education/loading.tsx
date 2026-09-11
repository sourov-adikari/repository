export default function Loading() {
  return (
    <main className="w-full flex flex-col pt-28 min-h-screen" role="status" aria-label="Loading education page">
      <span className="sr-only">Loading education page...</span>

      <div className="max-w-7xl mx-auto w-full" aria-hidden="true">
        {/* Page-level heading (from page.tsx, sits above EducationSection) */}
        <div className="px-5 md:px-6 mb-3">
          <div className="motion-safe:animate-pulse h-3 w-24 rounded bg-muted mb-2" />
          <div className="motion-safe:animate-pulse h-9 md:h-12 w-72 md:w-96 rounded-xl bg-muted" />
        </div>

        <div className="px-6 py-24 space-y-20">
          {/* Academic background — header + education cards */}
          <div>
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-3">
                <div className="motion-safe:animate-pulse w-12 h-12 rounded-2xl bg-muted" />
                <div className="motion-safe:animate-pulse h-9 md:h-12 w-64 md:w-80 rounded-xl bg-muted" />
              </div>
              <div className="motion-safe:animate-pulse h-5 w-full max-w-2xl rounded bg-muted" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="rounded-[2.25rem] border border-border/80 bg-card/80 p-8 shadow-xl">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="motion-safe:animate-pulse w-14 h-14 rounded-2xl bg-muted" />
                    <div className="motion-safe:animate-pulse h-7 w-32 rounded-full bg-muted" />
                  </div>
                  <div className="motion-safe:animate-pulse h-7 w-3/4 rounded-lg bg-muted mb-2" />
                  <div className="flex flex-wrap items-center gap-4 mb-6 pb-4 border-b border-border/60">
                    <div className="motion-safe:animate-pulse h-4 w-32 rounded bg-muted" />
                    <div className="motion-safe:animate-pulse h-4 w-24 rounded bg-muted" />
                  </div>
                  <div className="space-y-3.5">
                    <div className="motion-safe:animate-pulse h-4 w-full rounded bg-muted" />
                    <div className="motion-safe:animate-pulse h-4 w-full rounded bg-muted" />
                    <div className="motion-safe:animate-pulse h-4 w-2/3 rounded bg-muted" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise & Skills */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="motion-safe:animate-pulse w-10 h-10 rounded-xl bg-muted" />
              <div>
                <div className="motion-safe:animate-pulse h-7 md:h-8 w-52 rounded-lg bg-muted mb-1" />
                <div className="motion-safe:animate-pulse h-4 w-72 max-w-full rounded bg-muted" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="rounded-[1.75rem] border border-foreground/10 p-6 md:p-7 shadow-lg">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="motion-safe:animate-pulse w-10 h-10 rounded-xl bg-muted" />
                      <div className="motion-safe:animate-pulse h-5 w-32 rounded bg-muted" />
                    </div>
                    <div className="space-y-4">
                      {Array.from({ length: 3 }).map((_, j) => (
                        <div key={j} className="space-y-1.5">
                          <div className="flex items-center justify-between gap-4">
                            <div className="motion-safe:animate-pulse h-3.5 w-28 rounded bg-muted" />
                            <div className="motion-safe:animate-pulse h-3 w-8 rounded bg-muted" />
                          </div>
                          <div className="motion-safe:animate-pulse h-1.5 w-full rounded-full bg-muted" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Professional traits */}
              <div className="rounded-[1.75rem] border border-primary/15 p-6 md:p-7 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="motion-safe:animate-pulse w-10 h-10 rounded-xl bg-muted" />
                    <div>
                      <div className="motion-safe:animate-pulse h-5 w-40 rounded bg-muted mb-1" />
                      <div className="motion-safe:animate-pulse h-3.5 w-56 rounded bg-muted" />
                    </div>
                  </div>
                  <div className="motion-safe:animate-pulse h-7 w-40 rounded-full bg-muted" />
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {["w-24", "w-32", "w-20", "w-28", "w-36", "w-24"].map((width, i) => (
                    <div key={i} className={`motion-safe:animate-pulse h-9 rounded-xl bg-muted ${width}`} />
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-border/60 flex items-start gap-3">
                  <div className="motion-safe:animate-pulse w-9 h-9 rounded-xl bg-muted shrink-0" />
                  <div className="space-y-2 flex-1">
                    <div className="motion-safe:animate-pulse h-3.5 w-full rounded bg-muted" />
                    <div className="motion-safe:animate-pulse h-3.5 w-2/3 rounded bg-muted" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
