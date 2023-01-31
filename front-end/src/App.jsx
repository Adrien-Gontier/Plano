import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/sass/App.css";
import Header from "./components/Header";
import CreateProject from "./pages/CreateProject";
import CreateTask from "./pages/CreateTask";
import OneProject from "./pages/OneProject";
import AllProjects from "./pages/AllProjects";
import OneTask from "./pages/OneTask";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

export default function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<AllProjects />} />
        <Route path="/createproject" element={<CreateProject />} />
        <Route path="/createtask/:idProject" element={<CreateTask />} />
        <Route path="/oneproject/:idProject" element={<OneProject />} />
        <Route path="/onetask/:idTask" element={<OneTask />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}
