import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/sass/App.css";
import Header from "./components/Header";
import CreateProject from "./pages/CreateProject";
import CreateTask from "./pages/CreateTask";
import OneProject from "./pages/OneProject";
import AllProjects from "./pages/AllProjects";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllProjects />} />
        <Route path="/createproject" element={<CreateProject />} />
        <Route path="/createtask" element={<CreateTask />} />
        <Route path="/oneproject/:idProject" element={<OneProject />} />
      </Routes>
    </BrowserRouter>
  );
}
