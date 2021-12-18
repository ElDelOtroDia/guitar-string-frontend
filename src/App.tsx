import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/component";
import Home from "./views/home/component";
import Login from "./views/login/component";
import ManageCourses from "./views/manage-courses/component";

function App() {
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
