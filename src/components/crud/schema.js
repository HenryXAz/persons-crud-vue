import { object, string } from "yup";

export const schema = object({
  name: string()
    .required('el nombre es obligatorio*')
    .min(2, 'el nombre debe contener un mínimo de 2 caracteres*'),
  profession: string()
    .required('la profesión es obligatoria*')
})