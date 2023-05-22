import * as yup from "yup";
const passwordType = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
export const formSchemaLogin = yup.object().shape({
  email: yup.string().required("Email Obrigatório").email("Email invalido"),

  password: yup
    .string()
    .matches(passwordType, {
      message:
        "Deve conter minimo de 8 caractéres, ter letra, número e ao menos um símbolo",
    })
    .required("Senha Obrigatória"),

});