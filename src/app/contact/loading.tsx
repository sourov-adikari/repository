export default function Loading() {
  return (
    <main className="w-full flex flex-col pt-28 min-h-screen" role="status" aria-label="Loading contact page">
      <span className="sr-only">Loading contact page...</span>

      <section className="max-w-7xl mx-auto w-full px-5 md:px-6 py-16 md:py-20" aria-hidden="true">
        {/* Header — eyebrow, heading, intro line */}
        <div className="mb-9 text-center">
          <div className="motion-safe:animate-pulse h-3 w-24 rounded bg-muted mx-auto mb-2" />
          <div className="motion-safe:animate-pulse h-9 md:h-12 w-56 md:w-72 rounded-xl bg-muted mx-auto mb-3" />
          <div className="space-y-2 max-w-2xl mx-auto">
            <div className="motion-safe:animate-pulse h-4 w-full rounded bg-muted" />
            <div className="motion-safe:animate-pulse h-4 w-2/3 mx-auto rounded bg-muted" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-5 items-stretch">
          {/* Contact information card */}
          <div className="rounded-[1.75rem] border border-foreground/10 bg-card/70 p-6 md:p-7 flex flex-col justify-between">
            <div>
              <div className="motion-safe:animate-pulse h-6 w-36 rounded-full bg-muted" />
              <div className="motion-safe:animate-pulse h-7 md:h-8 w-full max-w-xs rounded-lg bg-muted mt-4 mb-2" />
              <div className="space-y-2 mt-2">
                <div className="motion-safe:animate-pulse h-3.5 w-full rounded bg-muted" />
                <div className="motion-safe:animate-pulse h-3.5 w-full rounded bg-muted" />
                <div className="motion-safe:animate-pulse h-3.5 w-3/4 rounded bg-muted" />
              </div>
            </div>

            <div className="mt-8 space-y-2.5">
              {/* email row */}
              <div className="flex items-center gap-3 rounded-2xl border border-foreground/10 bg-background/60 px-3.5 py-3">
                <div className="motion-safe:animate-pulse w-9 h-9 rounded-xl bg-muted shrink-0" />
                <div className="motion-safe:animate-pulse h-4 w-44 rounded bg-muted" />
                <div className="motion-safe:animate-pulse ml-auto w-8 h-8 rounded-lg bg-muted shrink-0" />
              </div>
              {/* location row */}
              <div className="flex items-center gap-3 rounded-2xl border border-foreground/10 bg-background/60 px-3.5 py-3">
                <div className="motion-safe:animate-pulse w-9 h-9 rounded-xl bg-muted shrink-0" />
                <div className="motion-safe:animate-pulse h-4 w-32 rounded bg-muted" />
              </div>
            </div>
          </div>

          {/* Contact form card */}
          <div className="rounded-[1.75rem] border border-foreground/10 bg-card/70 p-5 md:p-7">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="min-h-[5.25rem]">
                  <div className="motion-safe:animate-pulse h-3 w-20 rounded bg-muted mb-1.5" />
                  <div className="motion-safe:animate-pulse h-11 w-full rounded-xl bg-muted" />
                </div>
                <div className="min-h-[5.25rem]">
                  <div className="motion-safe:animate-pulse h-3 w-20 rounded bg-muted mb-1.5" />
                  <div className="motion-safe:animate-pulse h-11 w-full rounded-xl bg-muted" />
                </div>
              </div>

              <div className="min-h-[5.25rem]">
                <div className="motion-safe:animate-pulse h-3 w-16 rounded bg-muted mb-1.5" />
                <div className="motion-safe:animate-pulse h-11 w-full rounded-xl bg-muted" />
              </div>

              <div className="min-h-[11.25rem]">
                <div className="motion-safe:animate-pulse h-3 w-20 rounded bg-muted mb-1.5" />
                <div className="motion-safe:animate-pulse h-[150px] w-full rounded-xl bg-muted" />
              </div>

              <div className="motion-safe:animate-pulse h-11 w-full rounded-xl bg-muted" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
