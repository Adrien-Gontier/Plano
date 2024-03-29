import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Title from '../components/Title'

export default function Login(props) {
    const navigate = useNavigate()
    const [identifierValue, setIdentifierValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [actionLogin, setActionLogin] = useState(false)
    const { isLogged, setIsLogged } = props

    const apiUrlPlano = 'http://localhost:3000/plano/login'

    useEffect(() => {
        if (localStorage.getItem('TOKEN')) {
            navigate('/allprojects')
        }
        if (actionLogin) {
            axios
                .post(apiUrlPlano, {
                    identifier: identifierValue,
                    password: passwordValue,
                })
                .then(function (response) {
                    localStorage.setItem('TOKEN', response.data)
                    setIsLogged(true)
                    navigate('/allprojects')
                })
                .catch(function (error) {
                    console.log(error)
                })
            setActionLogin(false)
        }
    }, [actionLogin])

    return (
        <div className="login">
            <div className="login__header">
                <Title />
                <p>Un outil de planification de projet personnel</p>
            </div>
            <div className="login__main">
                <div className="login__main__signUp">
                    <Link to="/registration">S'enregistrer</Link>
                </div>
                <hr></hr>
                <div className="login__main__signIn">
                    <p>Se connecter</p>
                    <div>
                        <p>Identifiant :</p>
                        <label>
                            <input
                                type="text"
                                value={identifierValue}
                                placeholder="Veuillez renseigner votre identifiant"
                                onChange={(event) =>
                                    setIdentifierValue(event.target.value)
                                }
                            />
                        </label>
                    </div>
                    <div>
                        <p>Mot de passe :</p>
                        <label>
                            <input
                                type="text"
                                value={passwordValue}
                                placeholder="Veuillez renseigner votre identifiant"
                                onChange={(event) =>
                                    setPasswordValue(event.target.value)
                                }
                            />
                        </label>
                    </div>
                    <button onClick={() => setActionLogin(true)}>
                        Valider
                    </button>
                </div>
            </div>
        </div>
    )
}
