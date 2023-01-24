import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function OneTask() {

    const { idTask } = useParams()
    const navigate = useNavigate();
    const [dataOneProject, setDataOneProject] = useState([])
    const [actionDeleteButton, setActionDeleteButton] = useState(0)

    const API_URL_Plano = 'http://localhost:3000/plano/tasks/' + idTask


    useEffect(() => {
        axios
            .get(API_URL_Plano)
            .then((res) => {
                const occurence = res.data
                setDataOneProject(occurence)
                console.log(occurence);
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
            navigate(-1)
            // window.location.reload() // best soluce will be coded
        }
    }, [actionDeleteButton])


    return (
        <div>
            <button onClick={() => navigate(-1)}>Retour</button>
            <p>{dataOneProject.name}</p>
            {actionDeleteButton == 0 ? <button onClick={() => setActionDeleteButton(actionDeleteButton + 1)}>Supprimer la tâche</button> : null}
            {actionDeleteButton == 1 ? <p>"Êtes-vous vraiment sur de vouloir supprimer cette tâche ?"</p> : null}
            {actionDeleteButton == 1 ? <p>"Cette action entrainera la suppression de toutes les données de cette tâche"</p> : null}
            {actionDeleteButton == 1 ? <p>"Si vous êtes sur cliquez une nouvelle fois sur le boutton"</p> : null}
            {actionDeleteButton == 1 ? <button onClick={() => setActionDeleteButton(actionDeleteButton + 1)}>Supprimer la tâche</button> : null}

        </div>
    )
}
