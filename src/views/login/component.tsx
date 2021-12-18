import { FC } from "react";
import { useNavigate } from "react-router-dom";
import images from "../../assets";
import "./styles.css";

const Login: FC = () => {
  const navigate = useNavigate();
  const { GuitarPick } = images;

  return (
    <div className="login-container">
      <div className="form-container">
        <div className="guitar-string-logo-container">
          <GuitarPick className="guitar-pick" />
          <div className="guitar-string-text">GuitarString</div>
        </div>
        <div className="form-input-container">
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div className="form-input-container">
          <label htmlFor="">Password</label>
          <input type="password" />
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
        <button
          className="login-button"
          onClick={() => navigate("/", { replace: true })}
        >
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
