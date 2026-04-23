'use server'

export type SolicitudState = {
  status: 'idle' | 'success' | 'error'
  message?: string
}

export async function enviarSolicitud(
  _prevState: SolicitudState,
  formData: FormData
): Promise<SolicitudState> {
  const nombre = formData.get('nombre') as string
  const telefono = formData.get('telefono') as string
  const email = formData.get('email') as string
  const direccion = formData.get('direccion') as string
  const tipo = formData.get('tipo') as string
  const metros = formData.get('metros') as string
  const mensaje = formData.get('mensaje') as string

  if (!nombre?.trim() || !telefono?.trim() || !email?.trim() || !direccion?.trim() || !tipo) {
    return { status: 'error', message: 'Por favor, rellena todos los campos obligatorios.' }
  }

  // TODO: conectar servicio de email (Resend, Nodemailer, etc.)
  console.log('Nueva solicitud de certificado energético:', {
    nombre, telefono, email, direccion, tipo, metros, mensaje,
    fecha: new Date().toISOString(),
  })

  return { status: 'success' }
}
