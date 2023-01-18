import React, { useState } from 'react'


export default function CreateProject() {

    const [nameOfProject, setNameOfProject] = useState("")
    const [deadLineDate, setDeadLineDate] = useState("")
    const [description, setDescription] = useState("")

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
                    <input type="text" value={description} placeholder="la description de votre projet" onChange={(event) => setDescription(event.target.value)} />
                </label>
            </div>
        </div>
    )
}