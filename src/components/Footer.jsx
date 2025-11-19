import React from 'react'
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="pt-12 pb-16 bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-slate-900">The Treatment Rooms Leamington Spa</h3>
            <p className="text-slate-600 mt-2">CACI & Elemis specialists • Massage • Facials • Nails • Brows • Lashes</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a href="https://the-treatment-rooms.co.uk/" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl bg-rose-600 text-white font-semibold w-max">Book Online</a>
              <a href="tel:01926336951" className="px-5 py-3 rounded-xl bg-rose-100 text-rose-800 font-semibold w-max">Call 01926 336951</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">Visit</h4>
            <p className="text-slate-600 mt-2 flex items-start gap-2"><MapPin className="w-4 h-4 mt-1" />111 Warwick St, Leamington Spa CV32 4QZ</p>
            <p className="text-slate-600 mt-2 flex items-start gap-2"><Phone className="w-4 h-4 mt-1" />01926 336951</p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">Hours</h4>
            <ul className="text-slate-600 mt-2 space-y-1 text-sm">
              <li><Clock className="inline w-4 h-4 mr-2" />Mon 10:00–16:00</li>
              <li>Tue 10:00–19:00</li>
              <li>Wed 10:00–19:00</li>
              <li>Thu 10:00–20:00</li>
              <li>Fri 10:00–18:30</li>
              <li>Sat 09:00–16:00</li>
              <li>Sun Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t pt-6">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} The Treatment Rooms Leamington Spa</p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" aria-label="Instagram" className="text-slate-500 hover:text-slate-700"><Instagram className="w-5 h-5" /></a>
            <a href="https://facebook.com" aria-label="Facebook" className="text-slate-500 hover:text-slate-700"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
