import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./assets/sass/App.css";
import Header from "./components/Header";
import CreateProject from "./pages/CreateProject";
import CreateTask from "./pages/CreateTask";
import OneProject from "./pages/OneProject";
import AllProjects from "./pages/AllProjects";
import OneTask from "./pages/OneTask";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { useEffect, useState } from "react";
import axios from "axios";


export default function App() {

  const [isLogged, setIsLogged] = useState(false);
  const [apiUrl, setApiUrl] = useState('');

  const token = localStorage.getItem("TOKEN")
  let source = axios.CancelToken.source()
  const [dataProjects, setDataProjects] = useState([])

  useEffect(() => {
    if (localStorage.getItem("TOKEN") != null) {
      axios
        .get(apiUrl, {
          cancelToken: source.token,
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {
          const occurence = response.data
            setDataProjects(occurence)
            setIsLogged(true)
        })
        .catch((error) => {
          if (error?.code == "ERR_CANCELED") {
            // request canceled, do nothing
          } else if (error?.response?.status == 401) {
            navigate("/");
          } else {
            console.error(error);
          }
        })
    }
  }, [apiUrl]);

  const header = isLogged == false ? null : <Header isLogged={isLogged} setIsLogged={setIsLogged} />

  return (
    <BrowserRouter>
      {header}
      <Routes>
        <Route path="/" element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />} />
        <Route path="/allprojects" element={<AllProjects apiUrl={apiUrl} setApiUrl={setApiUrl} props={dataProjects} />} />
        <Route path="/createproject" element={<CreateProject />} />
        <Route path="/createtask/:idProject" element={<CreateTask />} />
        <Route path="/oneproject/:idProject" element={<OneProject apiUrl={apiUrl} setApiUrl={setApiUrl} props={dataProjects} />} />
        <Route path="/onetask/:idTask" element={<OneTask apiUrl={apiUrl} setApiUrl={setApiUrl} props={dataProjects} />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}
