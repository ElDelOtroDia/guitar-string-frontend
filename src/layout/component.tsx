import { FC, useState } from "react";
import { Link } from "react-router-dom";
import images from "../assets";
import "./styles.css";

const Layout: FC = ({ children }) => {
  const { GuitarPick } = images;

  const [userType, setUserType] = useState(2);

  return (
    <div className="layout-container">
      <header className="guitar-string-header">
        <Link className="link-no-style" to="/">
          <div className="header-logo-container">
            <GuitarPick className="header-logo-guitar-pick" />
            <div>GuitarString</div>
          </div>
        </Link>

        <ul className="guitar-string-header-buttons">
          <Link className="link-no-style" to="/">
            <li>Home</li>
          </Link>

          {/* Teacher user */}
          {userType === 2 ? (
            <>
              <li>Manage courses</li>
            </>
          ) : null}

          {userType === 1 ? (
            <Link className="link-no-style" to="/login">
              <li>Login/Register</li>
            </Link>
          ) : (
            <Link
              className="link-no-style"
              to="/login"
              onClick={() => setUserType(1)}
            >
              <li>Logout</li>
            </Link>
          )}
        </ul>
      </header>
      <div className="page-content">{children}</div>
    </div>
  );
};

export default Layout;
