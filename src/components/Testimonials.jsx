import React from 'react'

const testimonials = [
  {
    quote: 'Warm, welcoming and truly professional — my skin has never looked better after CACI.',
    name: 'Emily P.',
  },
  {
    quote: 'The massage was incredible. I left feeling lighter and completely relaxed.',
    name: 'James R.',
  },
  {
    quote: 'Beautiful salon and the best BIAB nails — they last for weeks!',
    name: 'Sophie L.',
  },
  {
    quote: 'Friendly team, great advice and outstanding results every time.',
    name: 'Hannah G.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Kind words from our guests</h2>
          <p className="text-slate-600 mt-2">A few short notes inspired by the hundreds of 5‑star reviews we’re proud to have earned.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white border rounded-2xl p-6">
              <p className="text-slate-800 text-lg">“{t.quote}”</p>
              <p className="mt-3 text-sm text-slate-500">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
