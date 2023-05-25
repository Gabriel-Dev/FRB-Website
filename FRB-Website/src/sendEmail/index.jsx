// import nodemailer from "nodemailer";
// // eslint-disable-next-line no-undef
// let smtp = require("./config/smtp")
// const transporter = nodemailer.createTransport({
//   host: smtp.host,
//   port: smtp.port,
//   secure: false,
//   auth: {
//     user: smtp.user,
//     pass: smtp.pass,
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// });
// let textEmail = `Olá, tudo bem?
// Aquidsahashjsajhksadkjhashjksadhkjsdahjk`
// export async function run() {
//   const mailSent = await transporter.sendMail({
//     text: textEmail,
//     subject: "Email do formulário do site",

//     from: "lucaspedrosadesouza10@gmail.com",
//     to: ["contato@frbconsultoria.com.br"],
//   });
//   console.log(mailSent);
// }
// run()
