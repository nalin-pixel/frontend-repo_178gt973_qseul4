import React from 'react'

export default function LocalSEO() {
  return (
    <section className="py-14 sm:py-20 bg-rose-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Beauty & spa treatments near you</h2>
            <p className="text-slate-700 mt-3">Looking for CACI facials near me, Elemis body treatments near me, massage near me or BIAB nails near me? We’re centrally located on Warwick Street and welcome clients from across Leamington Spa and Warwickshire.</p>
            <ul className="mt-4 text-slate-700 grid grid-cols-2 gap-2 text-sm">
              {['Leamington Spa','Warwick','Kenilworth','Whitnash','Cubbington','Sydenham','Radford Semele','Warwickshire'].map((area) => (
                <li key={area} className="bg-white border rounded-lg px-3 py-2">{area}</li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="font-semibold text-slate-900">FAQs</h3>
              <div className="mt-3 space-y-4">
                <div>
                  <p className="font-medium text-slate-800">Do you offer evening appointments?</p>
                  <p className="text-slate-600">Yes — we’re open late Tuesday to Friday, with Saturday availability too.</p>
                </div>
                <div>
                  <p className="font-medium text-slate-800">Which facial is best for lifting and toning?</p>
                  <p className="text-slate-600">Our CACI non‑surgical facials are designed to tone and firm with visible results. We’ll recommend the right course for your goals.</p>
                </div>
                <div>
                  <p className="font-medium text-slate-800">Are your nail treatments BIAB?</p>
                  <p className="text-slate-600">Yes — we’re known for our BIAB expertise for stronger, longer‑lasting nails.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-64 sm:h-80 bg-white border rounded-2xl overflow-hidden">
              <iframe
                title="map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=111%20Warwick%20St%2C%20Leamington%20Spa%20CV32%204QZ&output=embed"
              />
            </div>
            <p className="mt-3 text-sm text-slate-600">Find us: 111 Warwick St, Leamington Spa CV32 4QZ</p>
          </div>
        </div>
      </div>
    </section>
  )
}
