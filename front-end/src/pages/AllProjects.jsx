import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import MiniProject from '../components/MiniProject'


export default function AllProjects(props) {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      setApiUrl('http://localhost:3000/plano/projects')
    } else {
      navigate("/")
    }
  }, [])
  const { apiUrl, setApiUrl, dataProjects } = props
  const allDataProjects = props?.props
    return (
      allDataProjects[0] == null
        ? <Loader />
        : <div className="allProjects">
          <h1 className="allProjects__title">All projects</h1>
          <Link to="/createproject" className="createProject-link">Créé un projet</Link>
          <div className="allProjects__eachMiniProject">
            {allDataProjects?.map((eachProject) => (
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
