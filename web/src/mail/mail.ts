import nodemailer from 'nodemailer';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

interface MailProps {
  name: string | string[];
  email: string | string[];
  date: string | string[];
  hour: string | string[];
}

export default function Mail({ name, email, date, hour }: MailProps) {

  const parsedDate = parseISO(String(date));

  const newDate = format(parsedDate, "'Dia' dd 'de' MMMM 'de' yyyy", { locale: pt });
  
  const transporter = nodemailer.createTransport({
    host: `${process.env.NEXT_PUBLIC_EMAIL_SERVER}`,
    port: 465,
    auth: {
      user: `${process.env.NEXT_PUBLIC_EMAIL_USER}`,
      pass: `${process.env.NEXT_PUBLIC_EMAIL_PASS}`,
    }
  });

  transporter.sendMail({
    from: `SETUR <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
    to: `"${name}" <${email}>`,
    subject: 'Agendamento realizado com sucesso!',
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    </head>
    <body>
      <div style="max-width: 1000px; width: 100%;">
        <div style="max-width: 600px; width: 100%; margin: 0 auto;">
          <h1 style="font-family: 'Poppins', sans-serif; background: #00457C;
            padding: 10px; color: #F0F0F5; letter-spacing: -2px; border-top-left-radius: 7px; border-top-right-radius: 7px;">
            <img src="https://drive.google.com/uc?export=view&id=1AOWJ9DkRFxgakGjhCwnbdm5FrVGP4PVY" width="150" height="50" style="margin:0 auto; display: block;" /><br />
            Olá, ${name}
          </h1>

          <div style="padding: 0 10px;">
            <p style="font-size: 15px; font-family: 'Poppins', sans-serif; color: #383838;">
              Seu agendamento para <b>Retirada de Carteira</b> foi realizado com sucesso!
            </p>

            <p style="font-size: 15px; font-family: 'Poppins', sans-serif; color: #383838;">
              Este e-mail é o comprovante do seu agendamento para o atendimento escolhido,
              em nosso portal de serviços.
            </p>

            <p style="font-size: 15px; font-family: 'Poppins', sans-serif; color: #383838;">
              Abaixo, está a confirmação detalhada do seu agendamento.
            </p>

            <div style="margin: 0 auto;">
              <h2 style="color:#00457C; font-weight: 900;">${newDate} às ${hour}<h2>
            </div>

            <p style="font-size: 12px; text-align: center; font-family: 'Poppins', sans-serif; color: #383838;">
              *Em caso de dúvidas, pedimos que entre em contato através do número <b>(21) 3131-3232</b>
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `,

  }).then(info => {
    console.log(info);
  }).catch(err => {
    console.log(err);
  });

}
