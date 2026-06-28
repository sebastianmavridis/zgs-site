import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validación básica de campos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos (nombre, correo y mensaje) son requeridos." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactReceiver = process.env.CONTACT_RECEIVER_EMAIL || "contacto@zgs.com.mx";

    // Si no están configuradas las variables, registramos en consola (útil para dev) y retornamos error explicativo
    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      console.warn("⚠️ Configuración SMTP incompleta en las variables de entorno.");
      console.log("Datos recibidos del formulario:", { name, email, message });
      return NextResponse.json(
        {
          error: "El servicio de correo no está configurado en el servidor.",
          details: "Faltan variables de entorno SMTP (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS).",
          mockSuccess: true // Permite dar feedback en frontend para pruebas locales
        },
        { status: 501 }
      );
    }

    // Configuración del transportador de nodemailer
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort, 10),
      secure: parseInt(smtpPort, 10) === 465, // true para puerto 465, false para otros
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Opciones del correo
    const mailOptions = {
      from: `"${name}" <${smtpUser}>`, // Enviado desde el usuario SMTP para evitar problemas de SPF/DKIM
      replyTo: email,                  // El correo de respuesta será el del cliente
      to: contactReceiver,
      subject: `Nuevo mensaje de contacto: ${name}`,
      text: `Nombre: ${name}\nCorreo: ${email}\nMensaje:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #f8fafc;">
          <h2 style="color: #1e3a8a; margin-top: 0; font-size: 22px; border-bottom: 2px solid #3b82f6; padding-bottom: 12px; font-weight: 600;">
            Nuevo Mensaje de Contacto (ZGS)
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #1e293b; width: 120px; font-size: 14px;">Nombre:</td>
              <td style="padding: 10px 0; color: #475569; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #1e293b; font-size: 14px;">Correo:</td>
              <td style="padding: 10px 0; color: #475569; font-size: 14px;">
                <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 500;">${email}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top: 25px; padding: 20px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; border-left: 4px solid #3b82f6; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);">
            <p style="margin: 0; font-weight: 600; color: #1e293b; margin-bottom: 10px; font-size: 14px;">Mensaje:</p>
            <p style="margin: 0; color: #334155; white-space: pre-wrap; line-height: 1.6; font-size: 14px;">${message}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 20px;">
            Este mensaje fue enviado de manera automática desde el sitio web de ZGS.
          </p>
        </div>
      `,
    };

    // Envío del correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Mensaje enviado exitosamente." });
  } catch (error: any) {
    console.error("Error al enviar correo mediante nodemailer:", error);
    return NextResponse.json(
      { error: "Ocurrió un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde." },
      { status: 500 }
    );
  }
}
