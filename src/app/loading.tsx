export default function Loading() {
  const pulse = "motion-safe:animate-pulse bg-muted";

  return (
    <main className="w-full flex flex-col border-none" role="status" aria-label="Loading home page">
      <section className="relative min-h-[100vh] flex flex-col pt-28 md:pt-32 overflow-hidden bg-background">
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 pb-10">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full">
            <div className={`${pulse} rounded-full h-8 w-40 mb-4`} />
            <div className="mb-3 w-full">
              <div className={`${pulse} rounded-xl h-11 w-32 mx-auto md:mx-0 mb-2`} />
              <div className={`${pulse} rounded-xl h-12 md:h-16 w-full max-w-xl mx-auto md:mx-0`} />
            </div>
            <div className="space-y-2 w-full max-w-xl mb-6">
              <div className={`${pulse} rounded-xl h-5 w-full`} />
              <div className={`${pulse} rounded-xl h-5 w-11/12`} />
              <div className={`${pulse} rounded-xl h-5 w-4/5`} />
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-7 w-full md:w-auto">
              <div className={`${pulse} rounded-full h-11 w-32`} />
              <div className={`${pulse} rounded-full h-11 w-28`} />
              <div className={`${pulse} rounded-full h-11 w-28`} />
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start w-full md:w-auto">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className={`${pulse} rounded-full h-[18px] w-[18px]`} />
              ))}
            </div>
          </div>

          <div className="flex-1 w-full max-w-md relative flex justify-center items-center py-2">
            <div className="w-72 sm:w-80 md:w-84 max-w-full">
              <div className={`${pulse} mx-auto h-7 w-1 rounded-full mb-2`} />
              <div className="rounded-2xl overflow-hidden border border-foreground/10 shadow-xl bg-card">
                <div className={`${pulse} h-36 w-full`} />
                <div className="p-5 flex flex-col items-center gap-3">
                  <div className={`${pulse} rounded-full h-28 w-28`} />
                  <div className={`${pulse} rounded-xl h-6 w-48 max-w-full`} />
                  <div className={`${pulse} rounded-full h-6 w-36`} />
                  <div className="w-full border-t border-border/60 my-0.5" />
                  <div className="grid grid-cols-2 gap-2.5 w-full p-3 rounded-xl border border-border/50 bg-muted/40">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="space-y-1.5">
                        <div className={`${pulse} rounded h-2.5 w-14`} />
                        <div className={`${pulse} rounded-xl h-4 w-full`} />
                      </div>
                    ))}
                  </div>
                  <div className="w-full space-y-2">
                    <div className={`${pulse} rounded-lg h-7 w-full`} />
                    <div className="flex justify-between px-1">
                      <div className={`${pulse} rounded h-2.5 w-24`} />
                      <div className={`${pulse} rounded h-2.5 w-16`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative z-10 mt-auto">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className={`${pulse} rounded-xl h-10`} style={{ width: `${72 + (i % 3) * 18}px` }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-section max-w-7xl mx-auto w-full px-6 py-24 md:py-28">
        <div className="about-content min-w-0 space-y-8">
          <div className="about-copy">
            <div className={`${pulse} rounded-xl h-4 w-24 mb-4`} />
            <div className="space-y-2 mb-5">
              <div className={`${pulse} rounded-xl h-10 md:h-12 w-full max-w-2xl`} />
              <div className={`${pulse} rounded-xl h-10 md:h-12 w-4/5 max-w-xl`} />
            </div>
            <div className="space-y-2 max-w-2xl">
              <div className={`${pulse} rounded-xl h-5 w-full`} />
              <div className={`${pulse} rounded-xl h-5 w-11/12`} />
              <div className={`${pulse} rounded-xl h-5 w-3/4`} />
            </div>
          </div>
          <div className={`${pulse} h-px w-24`} />
          <div className="about-stats grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="p-5 md:p-6 rounded-2xl border border-foreground/10 bg-foreground/[0.025] min-h-36 flex flex-col justify-between">
                <div className={`${pulse} rounded-xl h-12 w-12 mb-4`} />
                <div className={`${pulse} rounded-xl h-9 w-20`} />
                <div className={`${pulse} rounded-xl h-4 w-32`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-20">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="w-full">
              <div className={`${pulse} rounded-xl h-3 w-20 mb-2`} />
              <div className={`${pulse} rounded-xl h-10 md:h-12 w-64 md:w-80 mb-2`} />
              <div className="space-y-2 max-w-2xl">
                <div className={`${pulse} rounded-xl h-4 w-full`} />
                <div className={`${pulse} rounded-xl h-4 w-4/5`} />
              </div>
            </div>
            <div className={`${pulse} rounded-xl h-5 w-36 shrink-0`} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {Array.from({ length: 4 }).map((_, i) => (
            <article key={i} className="relative overflow-hidden rounded-[1.75rem] block shadow-xl border border-foreground/10 h-[390px] bg-muted">
              <div className={`${pulse} absolute inset-0`} />
              <div className="absolute inset-x-6 bottom-6 space-y-3">
                <div className={`${pulse} rounded-xl h-3 w-20`} />
                <div className={`${pulse} rounded-xl h-7 w-3/4`} />
                <div className={`${pulse} rounded-xl h-4 w-5/6`} />
                <div className={`${pulse} rounded-full h-10 w-10 absolute right-0 bottom-0`} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="testimonials" className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="mb-12 text-center">
          <div className={`${pulse} rounded-xl h-4 w-28 mx-auto mb-3`} />
          <div className={`${pulse} rounded-xl h-10 md:h-12 w-72 md:w-96 mx-auto mb-4`} />
          <div className="space-y-2 max-w-xl mx-auto">
            <div className={`${pulse} rounded-xl h-4 w-full`} />
            <div className={`${pulse} rounded-xl h-4 w-4/5 mx-auto`} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {Array.from({ length: 3 }).map((_, i) => (
            <article key={i} className="h-full min-w-0 rounded-[1.75rem] border border-foreground/10 bg-card/70 p-6 md:p-7 shadow-sm flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <div key={star} className={`${pulse} rounded-sm h-3.5 w-3.5`} />
                  ))}
                </div>
                <div className={`${pulse} rounded-xl h-8 w-8`} />
              </div>
              <div className="flex-1 space-y-2">
                <div className={`${pulse} rounded-xl h-4 w-full`} />
                <div className={`${pulse} rounded-xl h-4 w-full`} />
                <div className={`${pulse} rounded-xl h-4 w-11/12`} />
                <div className={`${pulse} rounded-xl h-4 w-3/4`} />
              </div>
              <div className="mt-7 pt-5 border-t border-foreground/10 flex items-center gap-3">
                <div className={`${pulse} rounded-full h-11 w-11 shrink-0`} />
                <div className="min-w-0 flex-1 space-y-1.5">
                  <div className={`${pulse} rounded-xl h-4 w-28`} />
                  <div className={`${pulse} rounded-xl h-3 w-36 max-w-full`} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <span className="sr-only">Loading home page content...</span>
    </main>
  );
}
