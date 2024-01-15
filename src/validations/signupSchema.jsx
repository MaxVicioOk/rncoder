import { object, string, ref } from 'yup'

export const signupSchema = object({
  email: string()
    .email("ingrese un mail válido")
    .required("ingrese un mail"),
  password: string()
    .min(6, "mínimo 6 caracteres")
    .required("ingrese un password"),
  confirmPassword: string()
    .oneOf([ref("password")])
    .required("repita el password")
})