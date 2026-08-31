import Link from "next/link"

export const metadata = {
  title: "Thank You | JHC Consulting",
  description: "Thank you for reaching out to JHC Consulting.",
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
          Message received
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
          Thank you for reaching out.
        </h1>
        <p className="text-neutral-300 text-lg leading-relaxed mb-4 max-w-xl mx-auto">
          Your inquiry has been received and will be reviewed carefully. For substantive matters involving strategic, organizational, or governance questions, we typically respond within two business days.
        </p>
        <p className="text-neutral-400 text-sm leading-relaxed mb-12 max-w-xl mx-auto">
          If your matter is time-sensitive, please indicate this in a follow-up email to ensure appropriate prioritization.
        </p>
        <Link 
          href="/" 
          className="inline-block px-8 py-3 bg-[#4a9eb3] text-white font-medium rounded-full hover:bg-[#3d8a9d] transition-colors"
        >
          Return to home
        </Link>
      </div>
    </div>
  )
}
