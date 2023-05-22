import * as yup from "yup";
const passwordType = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
export const formSchemaLogin = yup.object().shape({
  email: yup.string().required("Email Obrigatório").email("Email invalido"),

  password: yup
    .string()
    .matches(passwordType, {
      message:
        "Deve conter no minimo 6 caractéres ter letra e número",
    })
    .required("Senha Obrigatória"),

});