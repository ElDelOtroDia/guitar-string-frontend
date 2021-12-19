import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import images from "../assets";
import { loadingSelector } from "../redux/ui/selectors";
import {
  userRefreshTokenSelector,
  userTokenSelector,
} from "../redux/user/selectors";
import "./styles.css";
import metronome from "../assets/lottie/metronome.json";
import Lottie, { Options } from "react-lottie";
import { popLoading, pushLoading } from "../redux/ui/actions";
import { logout } from "../services/user/services";
import { logoutSuccess } from "../redux/user/actions";

const Layout: FC = ({ children }) => {
  const { GuitarPick } = images;

  const tokenUser = useSelector(userTokenSelector);
  const refreshTokenUser = useSelector(userRefreshTokenSelector);
  const loading = useSelector(loadingSelector);

  const lottieOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: metronome,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = async () => {
    try {
      dispatch(pushLoading());
      const logoutResponse = await logout(refreshTokenUser);
      if (logoutResponse === 204) {
        await dispatch(logoutSuccess());
        navigate("/login", { replace: true });
      }
    } catch (e: any) {
      console.log(e);
    } finally {
      dispatch(popLoading());
    }
  };

  return (
    <div className="layout-container">
      {loading ? (
        <div className="loader-container">
          <Lottie
            options={lottieOptions}
            speed={2.2}
            height={400}
            width={400}
          />
          <p>Loading...</p>
        </div>
      ) : null}
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

            {tokenUser ? (
              <>
                <Link className="link-no-style" to="/">
                  <li>Home</li>
                </Link>
                <Link className="link-no-style" to="/manage-courses">
                  <li>Manage courses</li>
                </Link>
                <li onClick={() => onLogout()}>Logout</li>
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
