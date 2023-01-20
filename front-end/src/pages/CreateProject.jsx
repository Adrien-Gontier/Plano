import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'

export default function CreateProject() {

  const navigate = useNavigate()
  const [nameOfProject, setNameOfProject] = useState('')
  const [deadLineDate, setDeadLineDate] = useState('')
  const [descriptionOfProject, setDescriptionOfProject] = useState('')
  const [actionCreateProject, setActionCreateProject] = useState(false)

  const API_URL_Plano = 'http://localhost:3000/plano/projects'

  useEffect(() => {
    if (actionCreateProject) {
      axios
        .post(API_URL_Plano, {
          name: nameOfProject,
          dateDeadLine: deadLineDate,
          description: descriptionOfProject
        })
      setActionCreateProject(false)
      navigate("/")
      window.location.reload()
    }
  }, [actionCreateProject])

  return (
    <div className="createProject">
      <BackButton />
      <h2>Créer un projet</h2>
      <div>
        <p>Nom du project :</p>
        <label>
          <input
            type="text"
            value={nameOfProject}
            placeholder="Le nom de votre projet"
            onChange={(event) => setNameOfProject(event.target.value)}
          />
        </label>
      </div>
      <div>
        <p>Date du rendu :</p>
        <label>
          <input
            type="text"
            value={deadLineDate}
            placeholder="La date de rendu de votre projet"
            onChange={(event) => setDeadLineDate(event.target.value)}
          />
        </label>
      </div>
      <div>
        <p>Description :</p>
        <label>
          <input
            type="text"
            value={descriptionOfProject}
            placeholder="la description de votre projet"
            onChange={(event) => setDescriptionOfProject(event.target.value)}
          />
        </label>
      </div>
      <button onClick={() => setActionCreateProject(true)}>Créer</button>
    </div>
  )
}
