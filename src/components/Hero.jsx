import React from 'react'
import Spline from '@splinetool/react-spline'
import { Phone, Star } from 'lucide-react'

const phoneNumber = '01926 336951'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-peach-100 via-white to-white" aria-hidden="true" />

      {/* Spline 3D scene */}
      <div className="relative h-[420px] sm:h-[520px] lg:h-[640px]">
        <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* soft gradient overlay to enhance legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white" />
      </div>

      {/* Content */}
      <div className="relative mx-auto -mt-28 sm:-mt-36 lg:-mt-48 max-w-6xl px-4 sm:px-6">
        <div className="bg-white/80 backdrop-blur-xl border border-rose-100 shadow-xl rounded-3xl p-6 sm:p-10">
          {/* Rating badge */}
          <div className="flex flex-wrap items-center gap-3 text-rose-700/90 mb-4">
            <div className="flex items-center gap-1.5 bg-rose-50 px-3 py-1.5 rounded-full">
              <Star className="w-4 h-4 fill-rose-500 text-rose-500" />
              <span className="font-semibold">5.0</span>
              <span className="text-rose-700/70">Rated by hundreds</span>
            </div>
            <span className="text-sm text-rose-700/70">Loved for warm, welcoming service and exceptional results</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Feel beautifully refreshed with expert CACI & Elemis treatments
          </h1>
          <p className="mt-4 text-slate-700 text-base sm:text-lg max-w-3xl">
            The Treatment Rooms Leamington Spa — premium facials, body treatments, and relaxation therapies in the heart of Warwickshire.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://the-treatment-rooms.co.uk/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-rose-600 text-white font-semibold shadow-sm hover:bg-rose-700 transition-colors"
            >
              Book Your Treatment
            </a>
            <a
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-rose-100 text-rose-800 font-semibold hover:bg-rose-200 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" /> Tap to Call {phoneNumber}
            </a>
          </div>

          <p className="mt-3 text-sm text-slate-500">
            111 Warwick St, Leamington Spa CV32 4QZ • Open Mon–Sat
          </p>
        </div>
      </div>
    </section>
  )
}
