import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Certificado Energético en Madrid — Desde 89 € · 48 h',
  description:
    'Certificado energético en Madrid elaborado por técnico habilitado con CE3x. Obligatorio para vender o alquilar. Resultado en 48 h y registro oficial incluido. Desde 89 €.',
  alternates: { canonical: 'https://micertificadoenergetico.com/certificado-energetico-madrid' },
  openGraph: {
    title: 'Certificado Energético en Madrid — Desde 89 €',
    description: 'Técnico habilitado, CE3x, resultado en 48 h, registro oficial incluido.',
    url: 'https://micertificadoenergetico.com/certificado-energetico-madrid',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Certificado Energético Madrid',
  description: 'Elaboración de certificado energético en Madrid por técnico habilitado con software CE3x. Registro oficial incluido.',
  provider: { '@type': 'LocalBusiness', name: 'Mi Certificado Energético', url: 'https://micertificadoenergetico.com', telephone: '+34685752625' },
  areaServed: { '@type': 'City', name: 'Madrid' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    itemListElement: [
      { '@type': 'Offer', name: 'Certificado energético piso hasta 80 m² Madrid', price: '89', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: 'Certificado energético piso 80-120 m² Madrid', price: '119', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: 'Certificado energético casa unifamiliar Madrid', price: '149', priceCurrency: 'EUR' },
    ],
  },
}

const faqs = [
  { q: '¿Cuánto cuesta el certificado energético en Madrid?', a: 'El precio del certificado energético en Madrid depende del tipo y tamaño del inmueble. Para un piso de hasta 80 m², el precio es de 89 €. Para pisos de 80-120 m², 119 €. Para casas unifamiliares hasta 150 m², 149 €. Todos los precios incluyen visita, elaboración con CE3x y registro oficial.' },
  { q: '¿Es obligatorio el certificado energético en Madrid para vender?', a: 'Sí, el certificado energético es obligatorio en toda España, incluido Madrid, desde 2013 (RD 235/2013). Sin él no puedes vender ni alquilar tu vivienda legalmente. La multa por incumplimiento puede llegar a 6.000 €.' },
  { q: '¿Cuánto tarda el certificado energético en Madrid?', a: 'El proceso completo tarda entre 24 y 48 horas hábiles desde la visita. Primero se realiza la visita técnica al inmueble (45-90 minutos), después se elabora el informe con CE3x y se registra en la Comunidad de Madrid.' },
  { q: '¿Dónde se registra el certificado energético en Madrid?', a: 'El certificado energético en Madrid se registra en la Agencia de Energía para el Empleo de la Comunidad de Madrid. El técnico habilitado es quien realiza este trámite. El registro está incluido en nuestro servicio sin coste adicional.' },
  { q: '¿Qué validez tiene el certificado energético en Madrid?', a: 'El certificado energético tiene una validez de 10 años en toda España. Solo deberás renovarlo si realizas obras que mejoren o empeoren el rendimiento energético del inmueble.' },
]

export default function CertificadoEnergeticoMadrid() {
  return (
    <main className="min-h-screen bg-[#F7F3EE] text-[#1C1208]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <nav className="flex justify-between items-center px-4 sm:px-6 py-4 max-w-6xl mx-auto border-b border-[#E8DFD8]">
        <a href="/">
          <Image src="/logo-mce.png" alt="Mi Certificado Energético" width={56} height={56} priority />
        </a>
        <a href="/#solicitar" className="bg-[#C4531A] text-white text-sm px-4 py-2 rounded-full hover:bg-[#A84414] transition-colors">
          Solicitar certificado
        </a>
      </nav>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-5 pt-14 pb-12 text-center">
        <div className="inline-block bg-[#C4531A]/10 text-[#C4531A] text-xs font-semibold px-3 py-1 rounded-full mb-5 tracking-wide uppercase">
          Técnico habilitado · Registro oficial incluido
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-5 tracking-tight">
          Certificado energético<br />
          <span className="text-[#C4531A]">en Madrid</span>
        </h1>
        <p className="text-xl text-[#6B5B4E] max-w-2xl mx-auto mb-6 leading-relaxed">
          Obligatorio para vender o alquilar tu vivienda. Técnico habilitado, software CE3x, resultado en 48 h y registro en la Comunidad de Madrid incluido.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-[#6B5B4E]">
          {['🛡️ Técnico habilitado', '⚡ Resultado en 48 h', '📋 Registro oficial incluido', '✅ Desde 89 €'].map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>
        <a href="/#solicitar" className="inline-block bg-[#C4531A] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#A84414] transition-colors">
          Solicitar certificado en Madrid →
        </a>
      </section>

      {/* PRECIOS */}
      <section className="bg-[#1C1208] text-[#F7F3EE] py-16">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-black mb-10">Precio del certificado energético en Madrid</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { tipo: 'Piso hasta 80 m²', precio: '89 €', icon: '🏢' },
              { tipo: 'Piso 80 – 120 m²', precio: '119 €', icon: '🏢', popular: true },
              { tipo: 'Casa unifamiliar', precio: 'Desde 149 €', icon: '🏠' },
            ].map((p) => (
              <div key={p.tipo} className={`rounded-2xl p-6 ${p.popular ? 'bg-[#C4531A]' : 'bg-[#2A1E10]'}`}>
                <div className="text-3xl mb-3">{p.icon}</div>
                <p className="font-bold mb-2">{p.tipo}</p>
                <p className="text-3xl font-black">{p.precio}</p>
                <p className="text-xs mt-2 opacity-70">Visita + CE3x + registro incluido</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C4531A] py-16 text-center px-5">
        <h2 className="text-3xl font-black text-white mb-4">¿Necesitas el certificado energético en Madrid?</h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">Rellena el formulario y te contactamos en menos de 24 horas para coordinar la visita.</p>
        <a href="/#solicitar" className="inline-block bg-white text-[#C4531A] px-8 py-4 rounded-full font-bold hover:bg-[#F7F3EE] transition-colors">
          Solicitar ahora →
        </a>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-3xl mx-auto px-5">
        <h2 className="text-3xl font-black mb-10">Preguntas frecuentes — Certificado energético Madrid</h2>
        <div className="space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="border-b border-[#E8DFD8] pb-6">
              <h3 className="font-bold text-lg mb-2">{f.q}</h3>
              <p className="text-[#6B5B4E] leading-relaxed text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LINKS INTERNOS */}
      <section className="bg-white py-10 border-t border-[#E8DFD8]">
        <div className="max-w-5xl mx-auto px-5">
          <p className="text-sm font-semibold text-[#6B5B4E] uppercase tracking-wide mb-4">Más información</p>
          <div className="flex flex-wrap gap-3">
            <a href="/certificado-energetico-segovia" className="border border-[#E8DFD8] rounded-full px-4 py-2 text-sm hover:border-[#C4531A] hover:text-[#C4531A] transition-colors">Certificado energético Segovia →</a>
            <a href="/precio-certificado-energetico" className="border border-[#E8DFD8] rounded-full px-4 py-2 text-sm hover:border-[#C4531A] hover:text-[#C4531A] transition-colors">¿Cuánto cuesta un certificado energético? →</a>
            <a href="/" className="border border-[#E8DFD8] rounded-full px-4 py-2 text-sm hover:border-[#C4531A] hover:text-[#C4531A] transition-colors">Inicio →</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E8DFD8] py-8 px-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-[#6B5B4E]">
          <a href="/"><Image src="/logo-mce.png" alt="Mi Certificado Energético" width={40} height={40} /></a>
          <p>© 2026 · Jesús Polonio · micertificadoenergetico.com</p>
          <a href="mailto:hola@micertificadoenergetico.com">Contacto</a>
        </div>
      </footer>
    </main>
  )
}
