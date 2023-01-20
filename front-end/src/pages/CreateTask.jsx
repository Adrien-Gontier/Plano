import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function CreateTask() {
  const [nameOfTask, setNameOfTask] = useState('')
  const [StartDateEstimated, setStartDateEstimated] = useState('')
  const [EndDateEstimated, setEndDateEstimated] = useState('')
  const [actionCreateTask, setActionCreateTask] = useState(false)

  const apiUrlPlano = ''

  useEffect(() => {
    if (actionCreateTask) {
      axios
        .post(apiUrlPlano, {
          name: nameOfTask,
          estimatedStartDate: StartDateEstimated,
          estimatedEndDate: setEndDateEstimated

        })
      setActionCreateTask(false)
    }
  }, [actionCreateTask])

  return (
    <div className='createTask'>
      <h2>Créer une tâche</h2>
      <div>
        <p>Nom de la tâche :</p>
        <label>
          <input
            type="text"
            value={nameOfTask}
            placeholder="La nom de la tâche"
            onChange={(event) => setNameOfTask(event.target.value)}
          />
        </label>
      </div>
      <div>
        <p>Date estimée de début :</p>
        <label>
          <input
            type="text"
            value={StartDateEstimated}
            placeholder="La date estimé de début"
            onChange={(event) => setStartDateEstimated(event.target.value)}
          />
        </label>
      </div>
      <div>
        <p>Date estimée de fin :</p>
        <label>
          <input
            type="text"
            value={EndDateEstimated}
            placeholder="La date estimé de fin"
            onChange={(event) => setEndDateEstimated(event.target.value)}
          />
        </label>
      </div>
      <button onClick={() => setActionCreateTask(true)}>Créer</button>
    </div>
  )
}
