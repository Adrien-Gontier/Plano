import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MiniProject from '../components/MiniProject'

export default function AllProjects() {
  const [dataProjects, setDataProjects] = useState([])

  const API_URL_Plano = 'http://localhost:3000/plano/projects'

  useEffect(() => {
    axios.get(API_URL_Plano).then((res) => {
      const occurence = res.data
      setDataProjects(occurence)
    })
  }, [])

  return (
    <div className="allProjects">
      <h1 className="allProjects__title">All projects</h1>
      <Link to="/createproject" className="createProject-link">Créé un projet</Link>
      <div className="allProjects__eachMiniProject">
        {dataProjects?.map((eachProject) => (
          <Link
            to={`/oneproject/${eachProject.idProject}`}
            className="miniProject-link"
            key={eachProject.idProject}
          >
            <MiniProject props={eachProject} />
          </Link>
        ))}
      </div>
    </div>
  )
}
