import * as yup from "yup";
// const passwordType = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

// export const schemaLogin = yup.object().shape({
//   email: yup.string().required("Email Obrigatório").email("Email invalido"),

//   password: yup
//     .string()
//     .matches(passwordType, {
//       message:
//         "Deve conter no minimo 6 caractéres ter letra e número",
//     })
//     .required("Senha Obrigatória"),

// });

export const schemaLogin = yup.object().shape({
  username: yup.string().required("E-mail obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export const createUserSchema = yup.object().shape({
  name: yup.string().required("Nome do usuário obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("Email invalido"),
  user_level: yup.string().required("Nivel de usuário obrigatório"),
  power_bi_link: yup.string().required("Link do power bi obrigatório"),
  description: yup.string().required("Descrição obrigatória"),
});

export const createClientSchema = yup.object().shape({
  client_name: yup.string().required("Nome do cliente obrigatório"),
  cnpj: yup.string().required("cnpj do cliente obrigatório"),
  corporate_name: yup.string().required("Razão social do cliente obrigatório"),
});
