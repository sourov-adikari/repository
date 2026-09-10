export default function Loading() {
  return (
    <main className="min-h-screen pt-28" role="status" aria-label="Loading home page">
      <section className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div className="space-y-5"><div className="motion-safe:animate-pulse rounded-xl bg-muted h-6 w-32" /><div className="motion-safe:animate-pulse rounded-xl bg-muted h-14 w-4/5 max-w-xl" /><div className="motion-safe:animate-pulse rounded-xl bg-muted h-5 w-full max-w-xl" /><div className="motion-safe:animate-pulse rounded-xl bg-muted h-5 w-4/5 max-w-lg" /><div className="flex gap-3 pt-3"><div className="motion-safe:animate-pulse rounded-full bg-muted h-11 w-32" /><div className="motion-safe:animate-pulse rounded-full bg-muted h-11 w-28" /></div></div>
        <div className="motion-safe:animate-pulse rounded-[1.75rem] bg-muted mx-auto h-[25rem] w-full max-w-md" />
      </section><span className="sr-only">Loading home page content...</span>
    </main>
  );
}