import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'

export default function Registration() {
    const navigate = useNavigate()
    const [identifierValue, setIdentifierValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [firstNameValue, setFirstNameValue] = useState('')
    const [lastNameValue, setLastNameValue] = useState('')
    const [actionCreateUser, setActionCreateUser] = useState(false)


    const apiUrlPlano = 'http://localhost:3000/plano/users'

    useEffect(() => {
        if (actionCreateUser) {
            axios
                .post(apiUrlPlano, {
                    identifier: identifierValue,
                    password: passwordValue,
                    firstName: firstNameValue,
                    lastName: lastNameValue
                })
            setActionCreateUser(false)
        }
    }, [actionCreateUser])

    return (
        <div className='registration'>
            <Title />
            <p>S'enregistrer</p>
            <div className='registration__main'>
                <div>
                    <div>
                        <p>Identifiant :</p>
                        <label>
                            <input
                                type="text"
                                value={identifierValue}
                                placeholder="Veuillez renseigner votre identifiant"
                                onChange={(event) => setIdentifierValue(event.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <p>Mot de passe :</p>
                        <label>
                            <input
                                type="text"
                                value={passwordValue}
                                placeholder="Veuillez renseigner votre mot de passe"
                                onChange={(event) => setPasswordValue(event.target.value)}
                            />
                        </label>
                    </div>
                    <button onClick={() => navigate(-1)} className='registration__main__backButton'>Retour</button>
                </div>
                <div>
                    <div>
                        <p>Nom :</p>
                        <label>
                            <input
                                type="text"
                                value={lastNameValue}
                                placeholder="Veuillez renseigner votre nom de famille"
                                onChange={(event) => setLastNameValue(event.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <p>Prénom :</p>
                        <label>
                            <input
                                type="text"
                                value={firstNameValue}
                                placeholder="Veuillez renseigner votre prénom"
                                onChange={(event) => setFirstNameValue(event.target.value)}
                            />
                        </label>
                    </div>
                    <button onClick={() => setActionCreateUser(true)} className='registration__main__validateButton'>Valider</button>
                </div>
            </div >
        </div >
    )
}