import { useFormik } from "formik";
import { FC } from "react";
import { useDispatch } from "react-redux";
import images from "../../assets";
import { User } from "../../models/user/types";
import { loginRequested, signinRequested } from "../../redux/user/actions";
import "./styles.css";
import { initialValues, onSubmit, validationSchema } from "./form";

const Login: FC = () => {
  const { GuitarPick } = images;

  const dispatch = useDispatch();

  const passUser = (user: Partial<User>) => {
    dispatch(loginRequested(user));
  };

  const signUser = (user: Partial<User>) => {
    dispatch(signinRequested(user));
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => onSubmit(values, passUser, signUser),
    validationSchema,
  });

  return (
    <div className="login-container">
      <div className="form-container">
        <div className="guitar-string-logo-container">
          <GuitarPick className="guitar-pick" />
          <div className="guitar-string-text">GuitarString</div>
        </div>
        <div className="form-input-container">
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
        </div>
        <div className="form-input-container">
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        <div className="form-input-container">
          <label htmlFor="">Password</label>
          <input
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </div>
        {/* <p>
            New user?{" "}
            <span
              className="register-here"
              onClick={() => {
                setIsNewUser(true);
              }}
            >
              Register here
            </span>
          </p> */}
        <button className="login-button" onClick={() => formik.handleSubmit()}>
          Log in
        </button>
      </div>
      {/* <div className="form-container">
        <div className="guitar-string-logo-container">
          <GuitarPick className="guitar-pick" />
          <div className="guitar-string-text">GuitarString</div>
        </div>
        <div className="form-input-container">
          <label htmlFor="">First name</label>
          <input type="text" />
        </div>
        <div className="form-input-container">
          <label htmlFor="">Last name</label>
          <input type="text" />
        </div>
        <div className="form-input-container">
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div className="form-input-container">
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>
        <p>
          Already have an accout?{" "}
          <span
            className="register-here"
            onClick={() => {
              setIsNewUser(false);
            }}
          >
            Log in here
          </span>
        </p>
        <button className="login-button">Register</button>
      </div> */}
    </div>
  );
};

export default Login;
