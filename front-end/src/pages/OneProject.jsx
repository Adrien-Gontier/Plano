import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function OneProject() {

  const navigate = useNavigate();
  const { idProject } = useParams()
  const [dataOneProject, setDataOneProject] = useState([])
  const [actionDeleteButton, setActionDeleteButton] = useState(0)

  const API_URL_Plano = 'http://localhost:3000/plano/projects/' + idProject

  useEffect(() => {
    axios
      .get(API_URL_Plano)
      .then((res) => {
        const occurence = res.data
        setDataOneProject(occurence)
      })
  }, [])

  useEffect(() => {
    if (actionDeleteButton == 2) {
      axios
        .delete(API_URL_Plano)
        .then((res) => {
          const occurence = res.data
          setDataOneProject(occurence)
        })
      navigate('/')
      window.location.reload() // best soluce will be coded
    }
  }, [actionDeleteButton])

  return (
    <div className='oneProject'>
      <h3>{dataOneProject.name}</h3>
      {actionDeleteButton == 0 ? <button onClick={() => setActionDeleteButton(actionDeleteButton + 1)}>Supprimer le projet</button> : null}
      {actionDeleteButton == 1 ? <p>"Êtes-vous vraiment sur de vouloir supprimer ce projet ?"</p> : null}
      {actionDeleteButton == 1 ? <p>"Cette action entrainera la suppression de toutes les données du projet"</p> : null}
      {actionDeleteButton == 1 ? <p>"Si vous êtes sur cliquez une nouvelle fois sur le boutton"</p> : null}
      {actionDeleteButton == 1 ? <button onClick={() => setActionDeleteButton(actionDeleteButton + 1)}>Supprimer le projet</button> : null}
      <div>
        <p>Description</p>
        <p>{dataOneProject.description}</p>
      </div><div>
        <p>Date limite de fin</p>
        <p>{dataOneProject.dateDeadLine}</p>
      </div><div>
        <p>Pour mieux faire, je dois :</p>
        <p>{dataOneProject.toDoBetter}</p>
      </div><div>
        <p>Pourquoi j'ai échoué</p>
        <p>{dataOneProject.whyIFailed}</p>
      </div><div>
        <p>Pourquoi j'ai réussi</p>
        <p>{dataOneProject.whyIPassed}</p>
      </div>
    </div>
  )
}
