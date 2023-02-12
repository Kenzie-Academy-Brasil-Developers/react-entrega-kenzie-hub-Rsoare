import * as yup from "yup"

export const loginSchema = yup.object({
   email: yup.string().required("E-mail obrigatório"),
   password: yup.string().required("Senha obrigatória"),
})