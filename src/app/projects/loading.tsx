export default function Loading() {
  return (
    <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-5 pb-20 pt-36 md:px-6" role="status" aria-label="Loading projects">
      <div className="mb-10"><div className="motion-safe:animate-pulse rounded-xl bg-muted h-3 w-24" /><div className="motion-safe:animate-pulse rounded-xl bg-muted mt-5 h-12 w-80 max-w-full" /><div className="motion-safe:animate-pulse rounded-xl bg-muted mt-4 h-4 w-full max-w-2xl" /></div>
      <div className="mb-7 flex gap-3"><div className="motion-safe:animate-pulse rounded-xl bg-muted h-10 flex-1" /><div className="motion-safe:animate-pulse rounded-xl bg-muted h-10 w-36" /><div className="motion-safe:animate-pulse rounded-xl bg-muted h-10 w-32" /></div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"><div className="motion-safe:animate-pulse rounded-[1.75rem] bg-muted h-[390px]" /><div className="motion-safe:animate-pulse rounded-[1.75rem] bg-muted h-[390px]" /><div className="motion-safe:animate-pulse rounded-[1.75rem] bg-muted h-[390px]" /></div><span className="sr-only">Loading projects...</span>
    </main>
  );
}