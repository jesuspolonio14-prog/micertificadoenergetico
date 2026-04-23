'use client'

import { useActionState } from 'react'
import { enviarSolicitud, type SolicitudState } from './actions'

const initialState: SolicitudState = { status: 'idle' }

export default function FormSolicitud() {
  const [state, action, pending] = useActionState(enviarSolicitud, initialState)

  if (state.status === 'success') {
    return (
      <div className="bg-white rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-black text-[#1C1208] mb-3">¡Solicitud recibida!</h3>
        <p className="text-[#6B5B4E] leading-relaxed">
          Me pondré en contacto contigo en menos de 24 horas para coordinar la visita y elaborar tu certificado energético con CE3x.
        </p>
      </div>
    )
  }

  return (
    <form action={action} className="bg-white rounded-2xl p-8 text-left text-[#1C1208] space-y-4">
      {state.status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-[#6B5B4E] uppercase tracking-wide block mb-2">
            Nombre completo <span className="text-[#C4531A]">*</span>
          </label>
          <input
            type="text"
            name="nombre"
            placeholder="María García"
            required
            className="w-full border border-[#E8DFD8] rounded-xl px-4 py-3 focus:outline-none focus:border-[#C4531A] transition-colors"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-[#6B5B4E] uppercase tracking-wide block mb-2">
            Teléfono <span className="text-[#C4531A]">*</span>
          </label>
          <input
            type="tel"
            name="telefono"
            placeholder="612 345 678"
            required
            className="w-full border border-[#E8DFD8] rounded-xl px-4 py-3 focus:outline-none focus:border-[#C4531A] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold text-[#6B5B4E] uppercase tracking-wide block mb-2">
          Email <span className="text-[#C4531A]">*</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="maria@ejemplo.com"
          required
          className="w-full border border-[#E8DFD8] rounded-xl px-4 py-3 focus:outline-none focus:border-[#C4531A] transition-colors"
        />
      </div>

      <div>
        <label className="text-xs font-semibold text-[#6B5B4E] uppercase tracking-wide block mb-2">
          Dirección del inmueble <span className="text-[#C4531A]">*</span>
        </label>
        <input
          type="text"
          name="direccion"
          placeholder="Calle Mayor 10, 2º A — Segovia"
          required
          className="w-full border border-[#E8DFD8] rounded-xl px-4 py-3 focus:outline-none focus:border-[#C4531A] transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-[#6B5B4E] uppercase tracking-wide block mb-2">
            Tipo de inmueble <span className="text-[#C4531A]">*</span>
          </label>
          <select
            name="tipo"
            required
            className="w-full border border-[#E8DFD8] rounded-xl px-4 py-3 focus:outline-none focus:border-[#C4531A] bg-white transition-colors"
          >
            <option value="">Seleccionar…</option>
            <option value="piso">Piso / Apartamento</option>
            <option value="unifamiliar">Casa unifamiliar / Chalet</option>
            <option value="edificio">Edificio completo</option>
            <option value="local">Local comercial / Oficina</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-[#6B5B4E] uppercase tracking-wide block mb-2">
            Metros cuadrados aprox.
          </label>
          <input
            type="number"
            name="metros"
            placeholder="80"
            min="1"
            className="w-full border border-[#E8DFD8] rounded-xl px-4 py-3 focus:outline-none focus:border-[#C4531A] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold text-[#6B5B4E] uppercase tracking-wide block mb-2">
          Comentarios (opcional)
        </label>
        <textarea
          name="mensaje"
          rows={3}
          placeholder="Fecha preferida para la visita, acceso al inmueble, etc."
          className="w-full border border-[#E8DFD8] rounded-xl px-4 py-3 focus:outline-none focus:border-[#C4531A] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-[#C4531A] text-white py-4 rounded-xl text-lg font-bold hover:bg-[#A84414] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? 'Enviando solicitud…' : 'Solicitar certificado →'}
      </button>
      <p className="text-center text-xs text-[#6B5B4E]">
        Sin compromiso · Respuesta en menos de 24 h · Precio cerrado
      </p>
    </form>
  )
}
