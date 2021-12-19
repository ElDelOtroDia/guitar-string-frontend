import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Layout from "./layout/component";
import { userTokenSelector } from "./redux/user/selectors";
import Home from "./views/home/component";
import Login from "./views/login/component";
import ManageCourses from "./views/manage-courses/component";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const tokenUser = useSelector(userTokenSelector);

  useEffect(() => {
    if (
      tokenUser &&
      tokenUser !== "" &&
      (location.pathname === "/login" || location.pathname === "/login/")
    ) {
      navigate("/", { replace: true });
    }
  }, [tokenUser, location, navigate]);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/manage-courses" element={<ManageCourses />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
