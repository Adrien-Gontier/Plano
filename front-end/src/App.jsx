import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import CreateProject from './pages/CreateProject'
import Projects from './pages/Projects'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/createproject" element={<CreateProject />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
