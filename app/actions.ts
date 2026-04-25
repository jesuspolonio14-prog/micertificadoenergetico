'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

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

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'reformarealsoporte@gmail.com',
      subject: `Nueva solicitud de certificado energético — ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #C4531A; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Nueva solicitud de certificado energético</h1>
          </div>
          <div style="background: #f9f6f2; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e8dfd8;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8dfd8; color: #6b5b4e; width: 140px; font-size: 13px;">Nombre</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8dfd8; font-weight: bold; color: #1c1208;">${nombre}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8dfd8; color: #6b5b4e; font-size: 13px;">Teléfono</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8dfd8; font-weight: bold; color: #1c1208;">${telefono}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8dfd8; color: #6b5b4e; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8dfd8; color: #1c1208;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8dfd8; color: #6b5b4e; font-size: 13px;">Dirección</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8dfd8; color: #1c1208;">${direccion}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8dfd8; color: #6b5b4e; font-size: 13px;">Tipo</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8dfd8; color: #1c1208;">${tipo}</td>
              </tr>
              ${metros ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8dfd8; color: #6b5b4e; font-size: 13px;">Metros²</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8dfd8; color: #1c1208;">${metros} m²</td>
              </tr>` : ''}
              ${mensaje ? `
              <tr>
                <td style="padding: 10px 0; color: #6b5b4e; font-size: 13px; vertical-align: top;">Comentarios</td>
                <td style="padding: 10px 0; color: #1c1208;">${mensaje}</td>
              </tr>` : ''}
            </table>
          </div>
          <p style="color: #6b5b4e; font-size: 12px; margin-top: 16px;">
            Solicitud recibida desde micertificadoenergetico.com
          </p>
        </div>
      `,
    })
  } catch {
    return { status: 'error', message: 'Error al enviar la solicitud. Inténtalo de nuevo.' }
  }

  return { status: 'success' }
}
