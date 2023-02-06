import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loader from '../components/Loader';
import MiniTask from '../components/MiniTask';

export default function OneProject(props) {

  const navigate = useNavigate()

  const { idProject } = useParams()
  const [actionDeleteButton, setActionDeleteButton] = useState(0)

  const { apiUrl, setApiUrl, dataProjects } = props
  useEffect(() => {
    setApiUrl('http://localhost:3000/plano/projects/' + idProject)
  }, [])
  const dataOneProject = props?.props

  useEffect(() => {
    if (actionDeleteButton == 2) {
      axios
        .delete(apiUrl)
        .then((res) => {
          const occurence = res.data
        })
      navigate('/')
      location.reload() // best soluce will be coded
    }
  }, [actionDeleteButton])

  return (
    dataOneProject.length == 0
      ? <Loader />
      : <div className='oneProject'>
        <button onClick={() => { navigate("/allprojects") }}>Retour en arrière</button>
        <h3>{dataOneProject.name}</h3>
        {actionDeleteButton == 0 ? <button onClick={() => setActionDeleteButton(actionDeleteButton + 1)}>Supprimer le projet</button> : null}
        {actionDeleteButton == 1 ? <p>"Êtes-vous vraiment sur de vouloir supprimer ce projet ?"</p> : null}
        {actionDeleteButton == 1 ? <p>"Cette action entrainera la suppression de toutes les données du projet"</p> : null}
        {actionDeleteButton == 1 ? <p>"Si vous êtes sur cliquez une nouvelle fois sur le boutton"</p> : null}
        {actionDeleteButton == 1 ? <button onClick={() => setActionDeleteButton(actionDeleteButton + 1)}>Supprimer le projet</button> : null}
        <Link to={`/createtask/${idProject}`}>Créer une tâche</Link>
        <div>
          <p>Description</p>
          <p>{dataOneProject.description == undefined ? <Loader /> : dataOneProject.description }</p>
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
        {dataOneProject.task?.map((eachTask) => (
          <Link
            to={`/onetask/${eachTask.taskId}`}
            key={eachTask.taskId}
          >
            <MiniTask props={eachTask} />
          </Link>
        ))}
      </div>
  )
}
