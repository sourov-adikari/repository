export default function Loading() {
  return (
    <main className="mx-auto min-h-[80vh] w-full max-w-6xl px-5 pb-20 pt-36 md:px-6" role="status" aria-label="Loading project">
      <div className="motion-safe:animate-pulse rounded-xl bg-muted h-4 w-32" /><div className="motion-safe:animate-pulse rounded-[1.75rem] bg-muted mt-7 h-[18rem] w-full md:h-[28rem]" />
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_300px]"><div className="space-y-5"><div className="motion-safe:animate-pulse rounded-xl bg-muted h-4 w-24" /><div className="motion-safe:animate-pulse rounded-xl bg-muted h-12 w-4/5" /><div className="motion-safe:animate-pulse rounded-xl bg-muted h-5 w-full" /><div className="motion-safe:animate-pulse rounded-xl bg-muted h-5 w-11/12" /><div className="motion-safe:animate-pulse rounded-xl bg-muted mt-8 h-32 w-full" /></div><div className="space-y-4"><div className="motion-safe:animate-pulse rounded-xl bg-muted h-40 w-full" /><div className="motion-safe:animate-pulse rounded-xl bg-muted h-28 w-full" /></div></div><span className="sr-only">Loading project...</span>
    </main>
  );
}