export default function Loading() {
  return (
    <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-5 pb-20 pt-36 md:px-6" role="status" aria-label="Loading education">
      <div className="mx-auto mb-10 max-w-2xl text-center"><div className="motion-safe:animate-pulse rounded-xl bg-muted mx-auto h-3 w-24" /><div className="motion-safe:animate-pulse rounded-xl bg-muted mx-auto mt-5 h-10 w-3/4 max-w-md" /></div>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2"><div className="motion-safe:animate-pulse rounded-[2rem] bg-muted h-72" /><div className="motion-safe:animate-pulse rounded-[2rem] bg-muted h-72" /></div><div className="motion-safe:animate-pulse rounded-xl bg-muted mx-auto mt-12 h-8 w-56" /><span className="sr-only">Loading education...</span>
    </main>
  );
}