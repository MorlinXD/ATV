import nodemailer from 'nodemailer';


export async function POST(request) {
  try {
    const body = await request.json();
    const { name, age, activity, title, text } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
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
