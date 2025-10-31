import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, age, activity, title, text } = body;

    const transporter = nodemailer.createTransport({
      host: 'email-smtp.us-east-1.amazonaws.com',
      port: 587,
      secure: false,
      auth: {
        user: 'AKIA4JIH5MS3JYM3KBOX',
        pass: 'BJI2E7VxbJ9Sr/VUJbXHsEwpvvEggItylpl7g8cA5tDg',
      },
    });

    const mailOptions = {
      from: 'Comunicacion@datalat.org',
      to: 'Comunicacion@datalat.org',
      subject: `Nuevo miniblog de ${name}`,
      text: `
📘 Nuevo Miniblog Recibido

👤 Nombre/Alias: ${name}
🎂 Edad: ${age}
🏃 Actividad: ${activity}

📝 Título: ${title}
💬 Texto:
${text}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
