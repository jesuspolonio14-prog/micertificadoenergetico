import type { Metadata } from 'next'
import Image from 'next/image'
import FormSolicitud from './FormSolicitud'

export const metadata: Metadata = {
  title: 'Certificado Energético — micertificadoenergetico.com',
  description:
    'Certificado energético obligatorio para vender o alquilar tu vivienda. Técnico habilitado, software CE3x, resultado en 48 h y registro oficial incluido.',
}

const ratings = [
  { letra: 'A', color: '#1A7F37', bg: '#DCFCE7', ancho: '100%' },
  { letra: 'B', color: '#2D9D4A', bg: '#BBF7D0', ancho: '85%' },
  { letra: 'C', color: '#65A30D', bg: '#D9F99D', ancho: '70%' },
  { letra: 'D', color: '#CA8A04', bg: '#FEF08A', ancho: '55%' },
  { letra: 'E', color: '#EA580C', bg: '#FED7AA', ancho: '40%' },
  { letra: 'F', color: '#DC2626', bg: '#FEC7C7', ancho: '25%' },
  { letra: 'G', color: '#991B1B', bg: '#FCA5A5', ancho: '15%' },
]

const precios = [
  {
    tipo: 'Piso / Apartamento',
    icon: '🏢',
    rangos: [
      { label: 'Hasta 80 m²', precio: '89 €' },
      { label: '80 – 120 m²', precio: '119 €' },
      { label: 'Más de 120 m²', precio: '149 €' },
    ],
  },
  {
    tipo: 'Casa / Chalet',
    icon: '🏠',
    rangos: [
      { label: 'Hasta 150 m²', precio: '149 €' },
      { label: '150 – 250 m²', precio: '199 €' },
      { label: 'Más de 250 m²', precio: '249 €' },
    ],
    destacado: true,
  },
  {
    tipo: 'Edificio completo',
    icon: '🏗️',
    rangos: [
      { label: 'Hasta 4 viviendas', precio: 'Desde 350 €' },
      { label: '5 – 10 viviendas', precio: 'Consultar' },
      { label: 'Más de 10 viviendas', precio: 'Consultar' },
    ],
  },
]

const faqs = [
  {
    q: '¿Es obligatorio el certificado energético?',
    a: 'Sí. El Real Decreto 235/2013 obliga a disponer del certificado energético para vender o alquilar cualquier vivienda o edificio en España. Sin él, la operación puede ser sancionada con multas de hasta 6.000 €.',
  },
  {
    q: '¿Cuánto tarda en estar listo?',
    a: 'El proceso es rápido: visita de toma de datos (1-2 h), elaboración del informe con CE3x y registro en el organismo autonómico. El certificado suele estar disponible en 24-48 h hábiles desde la visita.',
  },
  {
    q: '¿Qué documentación necesito tener?',
    a: 'Año de construcción del inmueble, orientación del edificio, tipo de calefacción y agua caliente sanitaria (si la conoces) y cualquier factura energética reciente. En la visita tomo los datos que falten.',
  },
  {
    q: '¿Qué validez tiene el certificado?',
    a: 'El certificado energético tiene una validez de 10 años, salvo que se realicen obras que modifiquen significativamente las condiciones energéticas del inmueble.',
  },
  {
    q: '¿Qué incluye el precio?',
    a: 'Todo: visita al inmueble, toma de datos, elaboración del informe con CE3x, etiqueta energética en PDF y registro oficial ante el organismo autonómico competente. Sin letra pequeña.',
  },
  {
    q: '¿Necesito estar presente durante la visita?',
    a: 'Sí es necesario que alguien dé acceso al inmueble. La visita dura entre 45 minutos y 2 horas según el tamaño y la complejidad del edificio.',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F3EE] text-[#1C1208]">

      {/* NAV */}
      <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <a href="/">
          <Image
            src="/logo-mce.png"
            alt="Mi Certificado Energético"
            width={72}
            height={72}
            priority
          />
        </a>
        <a
          href="#solicitar"
          className="bg-[#C4531A] text-white text-sm px-4 py-2 rounded-full hover:bg-[#A84414] transition-colors"
        >
          Solicitar certificado
        </a>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-[#C4531A]/10 text-[#C4531A] text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
          <span className="w-2 h-2 bg-[#C4531A] rounded-full" />
          Obligatorio por ley desde 2013
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight">
          Tu certificado<br />
          energético,{' '}
          <span className="text-[#C4531A]">sin complicaciones</span>
        </h1>
        <p className="text-xl text-[#6B5B4E] max-w-2xl mx-auto mb-10 leading-relaxed">
          Lo necesitas para vender o alquilar tu vivienda. Lo elaboro con CE3x,
          el software oficial, y gestiono el registro ante el organismo autonómico.
          Precio cerrado, resultado en 48 h.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#solicitar"
            className="bg-[#C4531A] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#A84414] transition-colors"
          >
            Solicitar mi certificado →
          </a>
          <a
            href="#precios"
            className="border border-[#C4B8AE] text-[#6B5B4E] px-8 py-4 rounded-full text-lg hover:border-[#1C1208] hover:text-[#1C1208] transition-colors"
          >
            Ver precios
          </a>
        </div>

        {/* TRUST BADGES */}
        <div className="mt-14 flex flex-wrap justify-center gap-6 text-sm text-[#6B5B4E]">
          {[
            { icon: '🛡️', text: 'Técnico habilitado' },
            { icon: '⚡', text: 'Resultado en 48 h' },
            { icon: '📋', text: 'Registro oficial incluido' },
            { icon: '✅', text: 'Precio sin sorpresas' },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-2">
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* POR QUÉ ES OBLIGATORIO */}
      <section className="bg-[#1C1208] text-[#F7F3EE] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C4531A] text-sm font-semibold uppercase tracking-widest mb-4">La ley</p>
          <h2 className="text-3xl md:text-5xl font-black mb-10 max-w-3xl leading-tight">
            Sin certificado energético no puedes vender ni alquilar
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: 'RD 235/2013',
                title: 'Obligación legal',
                desc: 'El Real Decreto 235/2013 transpone la directiva europea 2010/31/UE y exige el certificado para cualquier venta o alquiler de inmuebles.',
              },
              {
                n: 'Hasta 6.000 €',
                title: 'Multa por incumplimiento',
                desc: 'Las infracciones se clasifican como leves, graves o muy graves. Anunciarte sin indicar la calificación energética ya es una infracción leve.',
              },
              {
                n: '10 años',
                title: 'Validez del certificado',
                desc: 'Una vez obtenido, el certificado es válido durante 10 años. Solo deberás renovarlo si realizas reformas que afecten al rendimiento energético.',
              },
            ].map((c) => (
              <div key={c.n} className="bg-[#2A1E10] rounded-2xl p-6">
                <div className="text-3xl font-black text-[#C4531A] mb-2">{c.n}</div>
                <h3 className="font-bold text-lg mb-2">{c.title}</h3>
                <p className="text-[#B5A090] text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESCALA ENERGÉTICA */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#C4531A] text-sm font-semibold uppercase tracking-widest mb-4">
              Calificación energética
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
              De la A a la G:<br />
              ¿cómo es tu vivienda?
            </h2>
            <p className="text-[#6B5B4E] leading-relaxed mb-6">
              La letra refleja el consumo de energía primaria y las emisiones de CO₂.
              La mayoría de las viviendas en España obtienen entre D y F. Cuanto mejor sea
              la calificación, más valor tiene el inmueble en el mercado.
            </p>
            <p className="text-sm text-[#6B5B4E]">
              El informe incluye también <strong className="text-[#1C1208]">medidas de mejora</strong> para
              subir de letra si decides reformar.
            </p>
          </div>
          <div className="space-y-2">
            {ratings.map((r) => (
              <div key={r.letra} className="flex items-center gap-3">
                <span className="w-8 text-center font-black text-[#1C1208]">{r.letra}</span>
                <div
                  className="h-9 rounded-lg flex items-center px-4"
                  style={{ width: r.ancho, backgroundColor: r.bg }}
                >
                  <span className="font-bold text-sm" style={{ color: r.color }}>{r.letra}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C4531A] text-sm font-semibold uppercase tracking-widest mb-4">Cómo funciona</p>
          <h2 className="text-3xl md:text-5xl font-black mb-16 max-w-2xl leading-tight">
            Tu certificado en 3 pasos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                n: '01',
                title: 'Solicita y agenda',
                desc: 'Rellena el formulario con los datos del inmueble. Me pongo en contacto en menos de 24 h para confirmar precio y acordar la visita.',
              },
              {
                n: '02',
                title: 'Visita técnica',
                desc: 'Acudo al inmueble, tomo medidas, fotografías y datos de instalaciones. La visita dura entre 45 minutos y 2 horas.',
              },
              {
                n: '03',
                title: 'Certificado registrado',
                desc: 'Elaboro el informe con CE3x y lo registro en el organismo autonómico. Recibes la etiqueta energética en PDF en 24-48 h.',
              },
            ].map((s) => (
              <div key={s.n}>
                <div className="text-[#E8DFD8] text-7xl font-black leading-none mb-4">{s.n}</div>
                <h3 className="font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-[#6B5B4E] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="py-24 max-w-6xl mx-auto px-6">
        <p className="text-[#C4531A] text-sm font-semibold uppercase tracking-widest mb-4">Precios</p>
        <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
          Precio cerrado, sin sorpresas
        </h2>
        <p className="text-[#6B5B4E] mb-14 max-w-xl">
          Todos los precios incluyen visita, elaboración del informe, etiqueta energética y
          registro oficial. Sin costes adicionales.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {precios.map((p) => (
            <div
              key={p.tipo}
              className={`rounded-2xl p-6 border ${
                p.destacado
                  ? 'border-[#C4531A] bg-[#FDF0EB]'
                  : 'border-[#E8DFD8] bg-white'
              }`}
            >
              {p.destacado && (
                <span className="text-xs bg-[#C4531A] text-white px-2 py-0.5 rounded-full font-semibold mb-3 inline-block">
                  Más solicitado
                </span>
              )}
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="font-bold text-xl mb-4">{p.tipo}</h3>
              <ul className="space-y-3">
                {p.rangos.map((r) => (
                  <li
                    key={r.label}
                    className="flex justify-between items-center text-sm border-b border-[#E8DFD8] pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-[#6B5B4E]">{r.label}</span>
                    <span className="font-black text-[#C4531A]">{r.precio}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-sm text-[#6B5B4E] mt-8 text-center">
          ¿Tu caso no encaja? Escríbeme y te preparo un precio personalizado.
        </p>
      </section>

      {/* FORMULARIO */}
      <section id="solicitar" className="bg-[#C4531A] py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
              Solicita tu certificado
            </h2>
            <p className="text-white/80 text-lg">
              Rellena el formulario y te respondo en menos de 24 horas con el precio exacto y disponibilidad.
            </p>
          </div>
          <FormSolicitud />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <p className="text-[#C4531A] text-sm font-semibold uppercase tracking-widest mb-4">Preguntas frecuentes</p>
        <h2 className="text-3xl md:text-4xl font-black mb-12 leading-tight">
          Todo lo que necesitas saber
        </h2>
        <div className="space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="border-b border-[#E8DFD8] pb-6">
              <h3 className="font-bold text-lg mb-2">{f.q}</h3>
              <p className="text-[#6B5B4E] leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#1C1208] py-20 text-center px-6">
        <p className="text-[#C4531A] text-sm font-semibold uppercase tracking-widest mb-4">¿Listo?</p>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
          Gestiona tu certificado hoy
        </h2>
        <p className="text-[#B5A090] text-lg mb-10 max-w-xl mx-auto">
          Evita sanciones y ten todo en regla antes de publicar tu inmueble.
        </p>
        <a
          href="#solicitar"
          className="inline-block bg-[#C4531A] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#A84414] transition-colors"
        >
          Solicitar certificado →
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E8DFD8] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <a href="/">
            <Image
              src="/logo-mce.png"
              alt="Mi Certificado Energético"
              width={52}
              height={52}
            />
          </a>
          <p className="text-sm text-[#6B5B4E]">© 2026 · Jesús Polonio · Segovia</p>
          <div className="flex gap-6 text-sm text-[#6B5B4E]">
            <a href="#" className="hover:text-[#1C1208] transition-colors">Privacidad</a>
            <a href="#" className="hover:text-[#1C1208] transition-colors">Términos</a>
            <a href="mailto:hola@micertificadoenergetico.com" className="hover:text-[#1C1208] transition-colors">Contacto</a>
          </div>
        </div>
      </footer>

    </main>
  )
}
