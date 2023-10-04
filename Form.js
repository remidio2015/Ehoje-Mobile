import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    Email: yup.string().email("por favor insira email valido"),
    PassWord: yup.string().min(8,({min})=> `A senha deve ter no minimo ${min} digitos`)
})
