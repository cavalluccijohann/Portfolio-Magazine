import { Resend } from "resend";
import { H3Event } from "h3";

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = await readBody(event);
    console.log(body);
    const { email, phone, message, name } = body;
    return await resend.emails.send({
      from: "📩 - CONTACT PORTFOLIO <contact@johanncvl.com>",
      to: ["24johann.cavallucci@gmail.com"],
      subject: "New message from your porfolio",
      html: `
      <p>Une nouvelle demande de contact a été envoyée depuis votre site.</p>
      <p>Voici les informations de l'expéditeur :</p>
      <ul>
        <li>Nom & Prenom : ${name}</li>
        <li>Email : ${email}</li>
        <li>Phone : ${phone}</li>
        <li>Message : ${message}</li>
      </ul>
      `,
    });
  } catch (error) {
    return { error };
  }
});
