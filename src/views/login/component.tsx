import { FC, useState } from "react";
import images from "../../assets";
import "./styles.css";

const Login: FC = () => {
  const { GuitarPick } = images;

  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <div className="login-container">
      {!isNewUser ? (
        <div className="form-container">
          <div className="guitar-string-logo">
            <GuitarPick className="guitar-pick" />
            <div className="guitar-string">GuitarString</div>
          </div>
          <div className="form-input-container">
            <label htmlFor="">Correo electrónico</label>
            <input type="text" />
          </div>
          <div className="form-input-container">
            <label htmlFor="">Contraseña</label>
            <input type="password" />
          </div>
          <p>
            ¿Nuevo usuario?{" "}
            <span
              className="register-here"
              onClick={() => {
                setIsNewUser(true);
              }}
            >
              Regístrate aquí
            </span>
          </p>
          <button className="login-button">Iniciar sesión</button>
        </div>
      ) : (
        <div className="form-container">
          <div className="guitar-string-logo">
            <GuitarPick className="guitar-pick" />
            <div className="guitar-string">GuitarString</div>
          </div>
          <div className="form-input-container">
            <label htmlFor="">Nombre(s)</label>
            <input type="text" />
          </div>
          <div className="form-input-container">
            <label htmlFor="">Apellidos</label>
            <input type="text" />
          </div>
          <div className="form-input-container">
            <label htmlFor="">Correo electrónico</label>
            <input type="text" />
          </div>
          <div className="form-input-container">
            <label htmlFor="">Contraseña</label>
            <input type="password" />
          </div>
          <p>
            ¿Ya tienes una cuenta?{" "}
            <span
              className="register-here"
              onClick={() => {
                setIsNewUser(false);
              }}
            >
              Inicia sesión
            </span>
          </p>
          <button className="login-button">Registrarse</button>
        </div>
      )}
    </div>
  );
};

export default Login;
