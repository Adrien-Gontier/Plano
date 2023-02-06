import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function OneTask(props) {

    const { idTask } = useParams()
    const navigate = useNavigate();
    const [actionDeleteButton, setActionDeleteButton] = useState(0)

    const { apiUrl, setApiUrl, dataProjects } = props
    useEffect(() => {
        setApiUrl('http://localhost:3000/plano/tasks/' + idTask)
    }, [])
    const dataOneTask = props?.props

    useEffect(() => {
        if (actionDeleteButton == 2) {
            axios
                .delete(apiUrl)
                .then((res) => {
                    const occurence = res.data
                })
            navigate(-1)
        }
    }, [actionDeleteButton])

    return (
        <div>
            <button onClick={() => navigate(-1)}>Retour</button>
            <p>{dataOneTask.name}</p>
            {actionDeleteButton == 0 ? <button onClick={() => setActionDeleteButton(actionDeleteButton + 1)}>Supprimer la tâche</button> : null}
            {actionDeleteButton == 1 ? <p>"Êtes-vous vraiment sur de vouloir supprimer cette tâche ?"</p> : null}
            {actionDeleteButton == 1 ? <p>"Cette action entrainera la suppression de toutes les données de cette tâche"</p> : null}
            {actionDeleteButton == 1 ? <p>"Si vous êtes sur cliquez une nouvelle fois sur le boutton"</p> : null}
            {actionDeleteButton == 1 ? <button onClick={() => setActionDeleteButton(actionDeleteButton + 1)}>Supprimer la tâche</button> : null}

        </div>
    )
}
