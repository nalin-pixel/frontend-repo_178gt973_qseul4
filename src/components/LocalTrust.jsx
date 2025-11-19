import React from 'react'
import { MapPin, ShieldCheck, Star } from 'lucide-react'

export default function LocalTrust() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border bg-white">
            <div className="flex items-center gap-2 text-rose-600 mb-2">
              <Star className="w-5 h-5" />
              <h3 className="text-lg font-semibold">Local favourite</h3>
            </div>
            <p className="text-slate-600">5.0 ★ rating across hundreds of reviews. Guests love our warm, welcoming team and exceptional results.</p>
          </div>
          <div className="p-6 rounded-2xl border bg-white">
            <div className="flex items-center gap-2 text-rose-600 mb-2">
              <ShieldCheck className="w-5 h-5" />
              <h3 className="text-lg font-semibold">CACI & Elemis specialists</h3>
            </div>
            <p className="text-slate-600">Advanced non‑surgical facials and indulgent spa therapies with premium, results‑driven brands.</p>
          </div>
          <div className="p-6 rounded-2xl border bg-white">
            <div className="flex items-center gap-2 text-rose-600 mb-2">
              <MapPin className="w-5 h-5" />
              <h3 className="text-lg font-semibold">Serving Warwickshire</h3>
            </div>
            <p className="text-slate-600">Conveniently located on Warwick Street, Leamington Spa — welcoming clients from Leamington, Warwick, Kenilworth, and beyond.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
