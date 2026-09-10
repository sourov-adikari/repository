export default function Loading() {
  return (
    <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-5 pb-20 pt-36 md:px-6" role="status" aria-label="Loading about page">
      <div className="mx-auto mb-10 max-w-2xl text-center"><div className="motion-safe:animate-pulse rounded-xl bg-muted mx-auto h-3 w-24" /><div className="motion-safe:animate-pulse rounded-xl bg-muted mx-auto mt-5 h-10 w-3/4 max-w-md" /></div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"><div className="motion-safe:animate-pulse rounded-xl bg-muted h-52" /><div className="motion-safe:animate-pulse rounded-xl bg-muted h-52" /><div className="motion-safe:animate-pulse rounded-xl bg-muted h-52" /></div><span className="sr-only">Loading about page...</span>
    </main>
  );
}