import Link from "next/link"

export const metadata = {
  title: "Page Not Found | Westhafen Consulting",
  description: "The page you're looking for could not be found.",
}

export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">404</p>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
          Page not found.
        </h1>
        <p className="text-lg text-neutral-400 leading-relaxed mb-10 max-w-lg mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="px-8 py-3 bg-[#9a2f43] text-white font-medium rounded-full hover:bg-[#7f2536] transition-colors"
          >
            Return to home
          </Link>
          <Link 
            href="/contact" 
            className="px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
