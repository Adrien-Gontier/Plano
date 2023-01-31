import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Title from '../components/Title'

export default function Login() {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className='login'>
      <div className='login__header'>
        <Title />
        <p>Un outil de planification de projet personnel</p>
      </div>
      <div className='login__main'>
        <div className='login__main__signUp'>
          <Link>S'enregistrer</Link>
        </div>
        <hr></hr>
        <div className='login__main__signIn'>
          <p>Se connecter</p>
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
                placeholder="Veuillez renseigner votre identifiant"
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
          </div>
          <button>Valider</button>
        </div>
      </div>
    </div>
  )
}