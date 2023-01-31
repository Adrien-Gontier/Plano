import React, { useState } from 'react'
import Title from '../components/Title'

export default function Registration() {
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
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
                                value={identifier}
                                placeholder="Veuillez renseigner votre identifiant"
                                onChange={(event) => setIdentifier(event.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <p>Mot de passe :</p>
                        <label>
                            <input
                                type="text"
                                value={password}
                                placeholder="Veuillez renseigner votre mot de passe"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </label>
                    </div>
                    <button className='registration__main__backButton'>Retour</button>
                </div>
                <div>
                    <div>
                        <p>Nom :</p>
                        <label>
                            <input
                                type="text"
                                value={lastName}
                                placeholder="Veuillez renseigner votre nom de famille"
                                onChange={(event) => setLastName(event.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <p>Prénom :</p>
                        <label>
                            <input
                                type="text"
                                value={firstName}
                                placeholder="Veuillez renseigner votre prénom"
                                onChange={(event) => setFirstName(event.target.value)}
                            />
                        </label>
                    </div>
                    <button className='registration__main__validateButton'>Valider</button>
                </div>
            </div >
        </div >
    )
}