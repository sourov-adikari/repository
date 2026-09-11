export default function Loading() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 pb-20 pt-36" role="status" aria-label="Loading privacy policy">
      <span className="sr-only">Loading privacy policy...</span>

      <div aria-hidden="true">
        <div className="motion-safe:animate-pulse rounded-xl bg-muted h-3 w-20" />
        <div className="motion-safe:animate-pulse rounded-xl bg-muted mt-3 h-9 md:h-12 w-4/5 max-w-lg" />
        <div className="motion-safe:animate-pulse rounded-xl bg-muted mt-4 h-4 w-40" />

        <div className="mt-10 space-y-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="space-y-3">
              <div className="motion-safe:animate-pulse rounded-xl bg-muted h-7 w-56" />
              <div className="space-y-2">
                <div className="motion-safe:animate-pulse rounded-xl bg-muted h-4 w-full" />
                <div className="motion-safe:animate-pulse rounded-xl bg-muted h-4 w-11/12" />
                <div className="motion-safe:animate-pulse rounded-xl bg-muted h-4 w-4/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
