import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DeconnectBtn(props) {
  const navigate = useNavigate()
  const { isLogged, setIsLogged } = props
  return (
    <button
      onClick={() => {
        localStorage.removeItem("TOKEN"),
          setIsLogged(false),
          navigate("/")
      }}
      className="deconnect-btn">
      Se déconecter
    </button>
  )
}
