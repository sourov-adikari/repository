export default function Loading() {
  return (
    <main className="w-full flex flex-col pt-28 min-h-screen" role="status" aria-label="Loading project">
      <article className="max-w-6xl mx-auto w-full px-5 md:px-6 pb-20">
        {/* Back to projects */}
        <div className="mb-7 flex items-center gap-1.5">
          <div className="motion-safe:animate-pulse rounded bg-muted h-4 w-4 shrink-0" />
          <div className="motion-safe:animate-pulse rounded-xl bg-muted h-4 w-32" />
        </div>

        {/* Project hero image */}
        <div className="motion-safe:animate-pulse w-full h-[460px] overflow-hidden rounded-[1.75rem] border border-foreground/10 shadow-xl mb-8 bg-muted" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-7 lg:gap-10 items-start">
          {/* Main project content */}
          <div>
            {/* Category / status / year */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <div className="motion-safe:animate-pulse rounded-xl bg-muted h-3 w-20" />
              <div className="motion-safe:animate-pulse rounded-full bg-muted h-6 w-20" />
              <div className="motion-safe:animate-pulse rounded-xl bg-muted h-3 w-10" />
            </div>

            {/* Title */}
            <div className="space-y-2 mb-4">
              <div className="motion-safe:animate-pulse rounded-xl bg-muted h-10 md:h-12 w-4/5" />
              <div className="motion-safe:animate-pulse rounded-xl bg-muted h-10 md:h-12 w-2/5" />
            </div>

            {/* Short description */}
            <div className="space-y-2">
              <div className="motion-safe:animate-pulse rounded-xl bg-muted h-5 w-full" />
              <div className="motion-safe:animate-pulse rounded-xl bg-muted h-5 w-11/12" />
            </div>

            {/* Project Overview */}
            <section className="mt-7">
              <div className="motion-safe:animate-pulse rounded-xl bg-muted h-5 w-36 mb-2" />
              <div className="space-y-2">
                <div className="motion-safe:animate-pulse rounded-xl bg-muted h-4 w-full" />
                <div className="motion-safe:animate-pulse rounded-xl bg-muted h-4 w-full" />
                <div className="motion-safe:animate-pulse rounded-xl bg-muted h-4 w-4/5" />
              </div>
            </section>

            {/* Purpose / Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
              <div className="p-5 rounded-2xl border border-foreground/10 bg-foreground/[0.025]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="motion-safe:animate-pulse rounded bg-muted h-4 w-4 shrink-0" />
                  <div className="motion-safe:animate-pulse rounded-xl bg-muted h-4 w-16" />
                </div>
                <div className="space-y-2">
                  <div className="motion-safe:animate-pulse rounded-xl bg-muted h-4 w-full" />
                  <div className="motion-safe:animate-pulse rounded-xl bg-muted h-4 w-11/12" />
                  <div className="motion-safe:animate-pulse rounded-xl bg-muted h-4 w-3/4" />
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-foreground/10 bg-foreground/[0.025]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="motion-safe:animate-pulse rounded bg-muted h-4 w-4 shrink-0" />
                  <div className="motion-safe:animate-pulse rounded-xl bg-muted h-4 w-16" />
                </div>
                <div className="space-y-2">
                  <div className="motion-safe:animate-pulse rounded-xl bg-muted h-4 w-full" />
                  <div className="motion-safe:animate-pulse rounded-xl bg-muted h-4 w-11/12" />
                  <div className="motion-safe:animate-pulse rounded-xl bg-muted h-4 w-3/4" />
                </div>
              </div>
            </div>

            {/* Key Features */}
            <section className="mt-7">
              <div className="motion-safe:animate-pulse rounded-xl bg-muted h-5 w-28 mb-3" />
              <div className="grid sm:grid-cols-2 gap-2.5">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-foreground/[0.025] border border-foreground/10 text-sm"
                  >
                    <div className="motion-safe:animate-pulse rounded-full bg-muted h-4 w-4 shrink-0 mt-0.5" />
                    <div className="space-y-1.5 flex-1 pt-0.5">
                      <div className="motion-safe:animate-pulse rounded-xl bg-muted h-3.5 w-full" />
                      <div className="motion-safe:animate-pulse rounded-xl bg-muted h-3.5 w-4/5" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Highlights */}
            <section className="mt-7">
              <div className="motion-safe:animate-pulse rounded-xl bg-muted h-5 w-24 mb-3" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="motion-safe:animate-pulse rounded-lg bg-muted h-7"
                    style={{ width: `${72 + (index % 3) * 18}px` }}
                  />
                ))}
              </div>
            </section>

            {/* Lessons Learned */}
            <section className="mt-7">
              <div className="flex items-center gap-2 mb-3">
                <div className="motion-safe:animate-pulse rounded bg-muted h-4 w-4 shrink-0" />
                <div className="motion-safe:animate-pulse rounded-xl bg-muted h-5 w-32" />
              </div>
              <ul className="space-y-2">
                {Array.from({ length: 3 }).map((_, index) => (
                  <li key={index} className="pl-4 border-l-2 border-primary/20 space-y-1.5">
                    <div className="motion-safe:animate-pulse rounded-xl bg-muted h-4 w-full" />
                    <div className="motion-safe:animate-pulse rounded-xl bg-muted h-4 w-4/5" />
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 space-y-4">
            {/* Technology Stack */}
            <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.025] p-5">
              <div className="motion-safe:animate-pulse rounded-xl bg-muted h-4 w-32 mb-3" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="motion-safe:animate-pulse rounded-lg bg-muted h-7"
                    style={{ width: `${58 + (index % 4) * 12}px` }}
                  />
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.025] p-5">
              <div className="motion-safe:animate-pulse rounded-xl bg-muted h-4 w-28 mb-3" />
              <div className="flex flex-col gap-2">
                <div className="motion-safe:animate-pulse rounded-xl bg-muted h-5 w-28" />
                <div className="motion-safe:animate-pulse rounded-xl bg-muted h-5 w-20" />
              </div>
            </div>
          </aside>
        </div>
      </article>

      <span className="sr-only">Loading project...</span>
    </main>
  );
}
