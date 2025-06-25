import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const { name, email, message } = await request.json();
        console.log('📧 Datos recibidos:', { name, email, message });

        
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Todos los campos son obligatorios' },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'El formato del email no es válido' },
                { status: 400 }
            );
        }

        if (name.length < 2 || message.length < 10) {
            return NextResponse.json(
                { error: 'Nombre mínimo 2 caracteres, mensaje mínimo 10 caracteres' },
                { status: 400 }
            );
        }

        console.log('📬 Enviando email con Resend...');

        const { data, error } = await resend.emails.send({
            from: 'Portafolio <onboarding@resend.dev>', 
            to: ['oscara22a.r@gmail.com'],
            subject: `🚀 Nuevo mensaje de contacto de ${name}`,
            replyTo: email,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
                    <div style="background: linear-gradient(135deg, #AD991B 0%, #8e7d00 100%); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
                        <h1 style="color: #132A14; margin: 0;">🚀 Nuevo Mensaje de Contacto</h1>
                    </div>
                    
                    <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        <h3 style="color: #AD991B;">📧 Información del Contacto</h3>
                        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #AD991B; margin-bottom: 20px;">
                            <p style="margin: 0; color: #333;"><strong>Nombre:</strong> ${name}</p>
                            <p style="margin: 10px 0 0 0; color: #333;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        </div>
                        
                        <h3 style="color: #AD991B;">💬 Mensaje</h3>
                        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #AD991B;">
                            <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                        </div>
                        
                        <div style="text-align: center; padding-top: 20px; border-top: 1px solid #eee; margin-top: 20px;">
                            <p style="color: #666; font-size: 14px; margin: 0;">Enviado desde tu portafolio web</p>
                            <p style="color: #666; font-size: 12px; margin: 5px 0 0 0;">
                                ${new Date().toLocaleString('es-ES', { timeZone: 'America/Bogota' })}
                            </p>
                        </div>
                    </div>
                </div>
            `
        });

        if (error) {
            console.error('❌ Error de Resend:', error);
            return NextResponse.json({ error: 'Error al enviar el email' }, { status: 500 });
        }

        console.log('✅ Email enviado con Resend:', data?.id);
        return NextResponse.json({
            message: 'Mensaje enviado correctamente',
            emailId: data?.id 
        });

    } catch (error) {
        console.error('❌ Error detallado:', error);
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
    }
}