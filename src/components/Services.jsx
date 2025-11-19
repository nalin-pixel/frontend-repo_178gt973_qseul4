import React from 'react'
import { Sparkles, Heart, Scissors, Eye, HandHeart, Waves } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'CACI Facials',
    desc: 'Lift, tone and firm with advanced non‑surgical facial treatments for visible results.',
    bullets: ['Microcurrent lifting', 'Eye & jowl lift options', 'Course packages available']
  },
  {
    icon: Waves,
    title: 'Elemis Body',
    desc: 'Luxurious, clinically proven body treatments that smooth, hydrate and glow.',
    bullets: ['Peels & wraps', 'Targeted back therapies', 'Radiant skin finish']
  },
  {
    icon: HandHeart,
    title: 'Massage',
    desc: 'Deep tissue, hot stone and relaxing Swedish to ease tension and restore calm.',
    bullets: ['Hot stone available', 'Back, neck & shoulder', 'Full body options']
  },
  {
    icon: Scissors,
    title: 'Nails',
    desc: 'BIAB and gel specialists for strong, beautiful nails that last.',
    bullets: ['BIAB overlays', 'Gel manicures', 'Classic & French']
  },
  {
    icon: Eye,
    title: 'Brows & Lashes',
    desc: 'Face‑framing brow shaping and lash lifts for effortless everyday polish.',
    bullets: ['Brow shaping & tint', 'Lash lifts', 'Brow lamination']
  },
  {
    icon: Heart,
    title: 'Gift Vouchers',
    desc: 'Treat someone special with a little time to unwind and feel their best.',
    bullets: ['Digital & physical', 'Any amount', 'Perfect for occasions']
  }
]

export default function Services() {
  return (
    <section className="py-14 sm:py-20 bg-rose-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Treatments at a glance</h2>
          <p className="text-slate-600 mt-2">Short, effective sessions and luxurious spa rituals designed around you.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc, bullets }) => (
            <div key={title} className="bg-white rounded-2xl border p-6 flex flex-col">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="text-slate-600 mt-3 flex-1">{desc}</p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 list-disc list-inside">
                {bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
