import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/sass/App.css'
import Header from './components/Header'
import CreateProject from './pages/CreateProject'
import CreateTask from './pages/CreateTask'
import OneProject from './pages/OneProject'
import Projects from './pages/Projects'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/createproject" element={<CreateProject />} />
        <Route path="/createtask" element={<CreateTask />} />
        <Route path="/oneproject/:id" element={<OneProject />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
