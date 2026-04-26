import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '¿Cuánto Cuesta un Certificado Energético? — Precios 2026',
  description:
    'Precio de un certificado energético en España en 2026. Desde 89 € para pisos hasta 80 m². Técnico habilitado, CE3x, registro oficial incluido. Madrid y Segovia.',
  alternates: { canonical: 'https://micertificadoenergetico.com/precio-certificado-energetico' },
  openGraph: {
    title: '¿Cuánto Cuesta un Certificado Energético? Precios 2026',
    description: 'Desde 89 € para pisos. Técnico habilitado, CE3x, registro oficial incluido.',
    url: 'https://micertificadoenergetico.com/precio-certificado-energetico',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Cuánto cuesta un certificado energético?', acceptedAnswer: { '@type': 'Answer', text: 'El precio de un certificado energético en España oscila entre 60 € y 300 € dependiendo del tipo y tamaño del inmueble. Para un piso de hasta 80 m², el precio habitual es de 89-120 €. Para casas unifamiliares, entre 149-250 €. El precio siempre debe incluir la visita, la elaboración del informe y el registro oficial.' } },
    { '@type': 'Question', name: '¿Qué incluye el precio del certificado energético?', acceptedAnswer: { '@type': 'Answer', text: 'El precio del certificado energético debe incluir siempre: visita técnica al inmueble, toma de datos, elaboración del informe con CE3x u otro software reconocido, la etiqueta energética en PDF y el registro en el organismo autonómico competente. Desconfía de precios muy bajos que no incluyen el registro.' } },
  ],
}

const precios = [
  { tipo: 'Piso / Apartamento', rangos: [{ label: 'Hasta 80 m²', precio: '89 €' }, { label: '80 – 120 m²', precio: '119 €' }, { label: 'Más de 120 m²', precio: '149 €' }] },
  { tipo: 'Casa / Chalet', rangos: [{ label: 'Hasta 150 m²', precio: '149 €' }, { label: '150 – 250 m²', precio: '199 €' }, { label: 'Más de 250 m²', precio: '249 €' }], destacado: true },
  { tipo: 'Edificio completo', rangos: [{ label: 'Hasta 4 viviendas', precio: 'Desde 350 €' }, { label: '5 – 10 viviendas', precio: 'Consultar' }, { label: 'Más de 10 viviendas', precio: 'Consultar' }] },
]

const faqs = [
  { q: '¿Cuánto cuesta un certificado energético en España en 2026?', a: 'En 2026 el precio de un certificado energético en España varía entre 60 € y 300 € según el tipo y tamaño del inmueble y la comunidad autónoma. El precio medio para un piso estándar de 80 m² está entre 89 € y 150 €. Siempre debe incluir la visita, elaboración y registro oficial.' },
  { q: '¿Por qué varía tanto el precio del certificado energético?', a: 'El precio del certificado energético varía según el tamaño del inmueble (m²), el tipo de propiedad (piso, casa, edificio), la complejidad de las instalaciones de climatización, la provincia y si el técnico cobra el registro por separado. Asegúrate de que el precio incluya el registro oficial.' },
  { q: '¿Qué pasa si no tengo certificado energético?', a: 'Sin certificado energético no puedes anunciarte legalmente para vender o alquilar tu vivienda. La infracción se clasifica como leve, grave o muy grave, con multas de hasta 6.000 €. Además, los portales inmobiliarios como Idealista o Fotocasa exigen indicar la calificación energética en los anuncios.' },
  { q: '¿Cuánto tiempo dura el certificado energético?', a: 'El certificado energético tiene una validez de 10 años desde su registro. Si realizas reformas que mejoren significativamente la eficiencia energética del inmueble (nueva calefacción, ventanas, aislamiento), puedes renovarlo antes para obtener una mejor calificación.' },
  { q: '¿Puedo hacer el certificado energético yo mismo?', a: 'No. El certificado energético solo puede elaborarlo un técnico habilitado (arquitecto, arquitecto técnico, ingeniero o ingeniero técnico). Además, debe estar registrado en el organismo oficial de cada comunidad autónoma para tener validez legal.' },
]

export default function PrecioCertificadoEnergetico() {
  return (
    <main className="min-h-screen bg-[#F7F3EE] text-[#1C1208]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <nav className="flex justify-between items-center px-4 sm:px-6 py-4 max-w-6xl mx-auto border-b border-[#E8DFD8]">
        <a href="/"><Image src="/logo-mce.png" alt="Mi Certificado Energético" width={56} height={56} priority /></a>
        <a href="/#solicitar" className="bg-[#C4531A] text-white text-sm px-4 py-2 rounded-full hover:bg-[#A84414] transition-colors">
          Solicitar certificado
        </a>
      </nav>

      <section className="max-w-4xl mx-auto px-5 pt-14 pb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-5 tracking-tight">
          ¿Cuánto cuesta un<br />
          <span className="text-[#C4531A]">certificado energético?</span>
        </h1>
        <p className="text-xl text-[#6B5B4E] max-w-2xl mx-auto mb-8 leading-relaxed">
          Precios actualizados para 2026. Todos nuestros precios incluyen visita, elaboración con CE3x y registro oficial.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-5 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {precios.map((p) => (
            <div key={p.tipo} className={`rounded-2xl p-6 border ${p.destacado ? 'border-[#C4531A] bg-[#FDF0EB]' : 'border-[#E8DFD8] bg-white'}`}>
              {p.destacado && <span className="text-xs bg-[#C4531A] text-white px-2 py-0.5 rounded-full font-semibold mb-3 inline-block">Más solicitado</span>}
              <h3 className="font-bold text-xl mb-4">{p.tipo}</h3>
              <ul className="space-y-3">
                {p.rangos.map((r) => (
                  <li key={r.label} className="flex justify-between text-sm border-b border-[#E8DFD8] pb-3 last:border-0 last:pb-0">
                    <span className="text-[#6B5B4E]">{r.label}</span>
                    <span className="font-black text-[#C4531A]">{r.precio}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-[#6B5B4E] mt-6">Todos los precios incluyen visita, elaboración con CE3x y registro oficial. Sin letra pequeña.</p>
      </section>

      <section className="bg-[#C4531A] py-16 text-center px-5">
        <h2 className="text-3xl font-black text-white mb-4">Precio cerrado, sin sorpresas</h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">Solicita tu certificado y te confirmo el precio exacto en menos de 24 horas.</p>
        <a href="/#solicitar" className="inline-block bg-white text-[#C4531A] px-8 py-4 rounded-full font-bold hover:bg-[#F7F3EE] transition-colors">
          Solicitar certificado →
        </a>
      </section>

      <section className="py-16 max-w-3xl mx-auto px-5">
        <h2 className="text-3xl font-black mb-10">Preguntas sobre el precio del certificado energético</h2>
        <div className="space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="border-b border-[#E8DFD8] pb-6">
              <h3 className="font-bold text-lg mb-2">{f.q}</h3>
              <p className="text-[#6B5B4E] leading-relaxed text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-10 border-t border-[#E8DFD8]">
        <div className="max-w-5xl mx-auto px-5">
          <p className="text-sm font-semibold text-[#6B5B4E] uppercase tracking-wide mb-4">Por zona</p>
          <div className="flex flex-wrap gap-3">
            <a href="/certificado-energetico-madrid" className="border border-[#E8DFD8] rounded-full px-4 py-2 text-sm hover:border-[#C4531A] hover:text-[#C4531A] transition-colors">Certificado energético Madrid →</a>
            <a href="/certificado-energetico-segovia" className="border border-[#E8DFD8] rounded-full px-4 py-2 text-sm hover:border-[#C4531A] hover:text-[#C4531A] transition-colors">Certificado energético Segovia →</a>
            <a href="/" className="border border-[#E8DFD8] rounded-full px-4 py-2 text-sm hover:border-[#C4531A] hover:text-[#C4531A] transition-colors">Solicitar certificado →</a>
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
