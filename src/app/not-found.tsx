import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] w-full items-center justify-center px-6 pt-28">
      <div className="max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">404</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Page not found</h1>
        <p className="mt-3 text-muted-foreground">The page you requested does not exist.</p>
        <Link href="/" className="mt-7 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none">
          Return home
        </Link>
      </div>
    </main>
  );
}