// import { sha512 } from "js-sha512";
import * as yup from "yup";
import { User } from "../../models/user/types";

export interface formValues {
  username: string;
  email: string;
  password: string;
  register?: boolean;
}

export const initialValues: formValues = {
  username: "",
  email: "",
  password: "",
  register: false,
};

export const validationSchema: yup.SchemaOf<formValues> = yup.object().shape({
  email: yup
    .string()
    .email("Debe ser un email válido")
    .required("El email es un campo requerido"),
  username: yup.string().required("El username es un campo requerido"),
  password: yup
    .string()
    .min(5, "Write 5 characters")
    .max(18, "Max characters value is 18")
    .required("La contraseña es un campo requerido"),
  register: yup.boolean(),
});

export const onSubmit = (
  values: formValues,
  login: (user: Partial<User>) => void,
  signin: (user: Partial<User>) => void
) => {
  const possibleUser: Partial<User> = {
    username: values.username,
    email: values.email,
    password: values.password,
    // password: sha512(values.password),
  };

  if (!values.register) {
    login(possibleUser);
  } else {
    signin(possibleUser);
  }
};
