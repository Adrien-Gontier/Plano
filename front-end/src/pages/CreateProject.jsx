import axios from 'axios';
import React, { useEffect, useState } from 'react'


export default function CreateProject() {

    const [nameOfProject, setNameOfProject] = useState("")
    const [deadLineDate, setDeadLineDate] = useState("")
    const [descriptionOfProject, setDescriptionOfProject] = useState("")
    const [actionCreateProject, setActionCreateProject] = useState(false);

    const API_URL_Plano = "http://localhost:3000/plano/projects";

    useEffect(() => {

        if (actionCreateProject) {
            axios.post(API_URL_Plano, {
                name: nameOfProject,
                dateDeadLine: deadLineDate,
                description: descriptionOfProject
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            setActionCreateProject(false);
        }

    }, [actionCreateProject]);



    return (
        <div className="createProject">
            <div>
                <p>Nom du project :</p>
                <label>
                    <input type="text" value={nameOfProject} placeholder="Le nom de votre projet" onChange={(event) => setNameOfProject(event.target.value)} />
                </label>
            </div>
            <div>
                <p>Date du rendu :</p>
                <label>
                    <input type="text" value={deadLineDate} placeholder="La date de rendu de votre projet" onChange={(event) => setDeadLineDate(event.target.value)} />
                </label>
            </div>
            <div>
                <p>Description :</p>
                <label>
                    <input type="text" value={descriptionOfProject} placeholder="la description de votre projet" onChange={(event) => setDescriptionOfProject(event.target.value)} />
                </label>
            </div>
            <button onClick={() => setActionCreateProject(true)}>Créer</button>
        </div>
    )
}