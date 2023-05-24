
import nodemailer from 'nodemailer';

import SMTP_CONFIG from "./config/smtp"


const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth:{
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass
    },
    tls:{
        rejectUnauthorized:false,
    },
});
let textEmail = `Olá, tudo bem?

Aqui é a Mylene e o Renato.

Percebemos que você não abriu o e-mail que você se cadastrou para participar da MARATONA DE REABILITAÇÃO EM RESINA COMPOSTA.

Isso pode acontecer por vários motivos…

Mas como queremos ter a certeza que você não ficará sem os seus links, resolvemos escrever esse e-mail.

Caso tenha ocorrido algum problema técnico.

Seguem os links novamente, para poder ter o seu acesso às aulas:

Seguem os links exclusivos para as aulas:`
export async function run(){
    const mailSent = await transporter.sendMail({
        text: textEmail,
        subject: "Teste de email do lucas",
        
        from: "Mdigital <lucaspedrosadesouza10@gmail.com",
        to: ["contato@frbconsultoria.com.br"]
    })
    console.log(mailSent)
}
