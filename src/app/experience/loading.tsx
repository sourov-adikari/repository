export default function Loading() {
  return (
    <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-5 pb-20 pt-36 md:px-6" role="status" aria-label="Loading experience">
      <div className="mb-10"><div className="motion-safe:animate-pulse rounded-xl bg-muted h-3 w-24" /><div className="motion-safe:animate-pulse rounded-xl bg-muted mt-5 h-12 w-80 max-w-full" /></div>
      <div className="mx-auto max-w-4xl space-y-5"><div className="motion-safe:animate-pulse rounded-xl bg-muted h-28" /><div className="motion-safe:animate-pulse rounded-xl bg-muted h-28" /><div className="motion-safe:animate-pulse rounded-xl bg-muted h-28" /></div><span className="sr-only">Loading experience...</span>
    </main>
  );
}