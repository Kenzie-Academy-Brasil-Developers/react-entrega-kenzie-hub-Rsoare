import * as yup from "yup"

export const techSchema = yup.object({
   title: yup.string().required("Tecnologia obrigatória"),
   status: yup.string().required("Nivel obrigatório"),
})