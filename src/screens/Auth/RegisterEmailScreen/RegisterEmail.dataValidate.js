import * as Yup from 'yup';

export function initialValues() {
    return {
        email: '',
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        password_confirmation: '',
    }
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string().email("El correo electronico no es valido").required("El correo electronico es requerido"),
        first_name: Yup.string().required("El nombre es requerido"),
        last_name: Yup.string().required("El apellido es requerido"),
        username: Yup.string().required("El nombre de usuario es requerido").noSpacing("El nombre de usuario no puede contener espacios"),
        password: Yup.string().required("La contraseña es requerida"),
        password_confirmation: Yup.string()
            .required("La confirmacion de la contraseña es requerida")
            .oneOf([Yup.ref('password')],"Las contraseñas no coinciden")
    })
}