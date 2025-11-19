import React from 'react'

export default function About() {
  return (
    <section className="py-14 sm:py-20 bg-rose-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">A warm, family‑run salon in the heart of Leamington</h2>
            <p className="text-slate-700 mt-4">Founded by Nikki and lovingly grown with therapists like Jade and our friendly front‑of‑house team, we combine clinical expertise with a genuinely caring touch. Our guests describe us as warm, welcoming and professional — and that’s exactly how we want you to feel: looked after and glowing.</p>
            <p className="text-slate-700 mt-3">From CACI facials to Elemis body therapies, nails, brows and lashes — every treatment is tailored to your needs, explained clearly, and delivered to the highest standard.</p>
          </div>
          <div className="bg-white rounded-2xl border p-6">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-rose-600">5.0★</div>
                <div className="text-slate-600">Average rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-600">Hundreds</div>
                <div className="text-slate-600">Of glowing reviews</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-600">Premium</div>
                <div className="text-slate-600">CACI & Elemis</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-600">Since</div>
                <div className="text-slate-600">Serving Warwickshire</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
