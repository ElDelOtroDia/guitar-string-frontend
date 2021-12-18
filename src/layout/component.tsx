import { FC, useState } from "react";
import { Link } from "react-router-dom";
import images from "../assets";
import "./styles.css";

const Layout: FC = ({ children }) => {
  const { GuitarPick } = images;

  const [userType, setUserType] = useState(1);

  return (
    <div className="layout-container">
      <header className="guitar-string-header">
        <div className="guitar-string-body">
          <Link className="link-no-style" to="/">
            <div className="header-logo-container">
              <GuitarPick className="header-logo-guitar-pick" />
              <div>GuitarString</div>
            </div>
          </Link>

          <ul className="guitar-string-header-buttons">
            {/* Admin user */}

            {userType === 1 ? (
              <>
                <Link className="link-no-style" to="/">
                  <li>Home</li>
                </Link>
                <Link className="link-no-style" to="/manage-courses">
                  <li>Manage courses</li>
                </Link>
                <Link
                  className="link-no-style"
                  to="/login"
                  onClick={() => setUserType(0)}
                >
                  <li>Logout</li>
                </Link>
              </>
            ) : null}
          </ul>
        </div>
      </header>
      <div className="page-content">{children}</div>
    </div>
  );
};

export default Layout;
