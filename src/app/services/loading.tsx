export default function Loading() {
  return (
    <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-5 pb-20 pt-36 md:px-6" role="status" aria-label="Loading services">
      <div className="mb-10"><div className="motion-safe:animate-pulse rounded-xl bg-muted h-3 w-24" /><div className="motion-safe:animate-pulse rounded-xl bg-muted mt-5 h-12 w-80 max-w-full" /></div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"><div className="motion-safe:animate-pulse rounded-xl bg-muted h-52" /><div className="motion-safe:animate-pulse rounded-xl bg-muted h-52" /><div className="motion-safe:animate-pulse rounded-xl bg-muted h-52" /></div><span className="sr-only">Loading services...</span>
    </main>
  );
}