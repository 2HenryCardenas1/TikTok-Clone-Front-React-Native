import * as Yup from 'yup';

export function initialValues() {
  return {
    email: '',
    password: ''
  }
}

export function validationSchema() {
    return Yup.object({
        email : Yup.string().email("No es un email valido").required("El email es requerido"),
        password : Yup.string().required("La contraseña es requerida")
    })
}