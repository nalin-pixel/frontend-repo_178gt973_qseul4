import React from 'react'
import { ShieldCheck, Users, Award, Clock } from 'lucide-react'

export default function WhyChooseUs() {
  return (
    <section className="py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-14 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Why choose The Treatment Rooms</h2>
          <p className="text-slate-600 mt-2">A warm, family‑run salon trusted by the community for outstanding care and results.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white border rounded-2xl p-6">
            <ShieldCheck className="w-6 h-6 text-rose-600" />
            <h3 className="mt-3 font-semibold text-slate-900">Qualified specialists</h3>
            <p className="text-slate-600 mt-1">Expertly trained in CACI & Elemis — professional grade treatments tailored to your skin and goals.</p>
          </div>
          <div className="bg-white border rounded-2xl p-6">
            <Users className="w-6 h-6 text-rose-600" />
            <h3 className="mt-3 font-semibold text-slate-900">Personal, welcoming</h3>
            <p className="text-slate-600 mt-1">You’ll always be greeted by name and made comfortable from the moment you arrive.</p>
          </div>
          <div className="bg-white border rounded-2xl p-6">
            <Award className="w-6 h-6 text-rose-600" />
            <h3 className="mt-3 font-semibold text-slate-900">Proven results</h3>
            <p className="text-slate-600 mt-1">Hundreds of 5‑star reviews highlight our beautiful salon, expert therapists and lasting results.</p>
          </div>
          <div className="bg-white border rounded-2xl p-6">
            <Clock className="w-6 h-6 text-rose-600" />
            <h3 className="mt-3 font-semibold text-slate-900">Convenient hours</h3>
            <p className="text-slate-600 mt-1">Open late Tue–Fri with Saturday appointments available.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
