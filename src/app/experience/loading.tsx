export default function Loading() {
  return (
    <main className="w-full flex flex-col pt-28 min-h-screen" role="status" aria-label="Loading career timeline">
      <span className="sr-only">Loading career timeline...</span>

      <section className="max-w-7xl mx-auto w-full" aria-hidden="true">
        {/* Page-level heading (from page.tsx, sits above CareerTimeline) */}
        <div className="px-5 md:px-6 mb-3">
          <div className="motion-safe:animate-pulse h-3 w-16 rounded bg-muted mb-2" />
          <div className="motion-safe:animate-pulse h-9 md:h-12 w-64 md:w-80 rounded-xl bg-muted" />
        </div>

        {/* ScrollTimeline root (min-h-screen in the real component) */}
        <div className="relative min-h-screen w-full overflow-hidden">
          {/* ScrollTimeline's own title + subtitle */}
          <div className="text-center py-16 px-4">
            <div className="motion-safe:animate-pulse h-9 md:h-12 w-56 md:w-72 rounded-xl bg-muted mx-auto mb-4" />
            <div className="motion-safe:animate-pulse h-6 w-full max-w-2xl rounded bg-muted mx-auto" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 pb-24">
            <div className="relative mx-auto">
              {/* connector track line */}
              <div className="motion-safe:animate-pulse absolute left-1/2 -translate-x-1/2 top-0 h-full w-[3px] rounded-full bg-muted" />

              <div className="relative z-20">
                {[0, 1, 2, 3].map((i) => {
                  const rightSide = i % 2 === 1;
                  return (
                    <div key={i} className="relative flex items-center mb-20 py-4 flex-col lg:flex-row">
                      {/* connector dot, centered on the row */}
                      <div className="motion-safe:animate-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-background bg-muted z-30" />

                      <div className={`mt-12 lg:mt-0 w-full lg:w-[calc(50%-40px)] ${rightSide ? "lg:ml-[calc(50%+20px)]" : "lg:mr-[calc(50%+20px)]"}`}>
                        <div className="rounded-lg border border-border/40 bg-card shadow-md p-6">
                          {/* date badge row */}
                          <div className="flex items-center gap-2 mb-2">
                            <div className="motion-safe:animate-pulse w-4 h-4 rounded bg-muted" />
                            <div className="motion-safe:animate-pulse h-3.5 w-14 rounded bg-muted" />
                          </div>
                          <div className="motion-safe:animate-pulse h-6 w-3/4 rounded-lg bg-muted mb-2" />
                          <div className="motion-safe:animate-pulse h-4 w-1/2 rounded bg-muted mb-3" />
                          <div className="space-y-2">
                            <div className="motion-safe:animate-pulse h-3.5 w-full rounded bg-muted" />
                            <div className="motion-safe:animate-pulse h-3.5 w-5/6 rounded bg-muted" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
