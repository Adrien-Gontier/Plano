import React from 'react'
import DeconnectBtn from './DeconnectBtn'
import Title from './Title'

export default function Header(props) {
    const { isLogged, setIsLogged } = props
    return (
        <div className="header">
            <Title />
            <DeconnectBtn isLogged={isLogged} setIsLogged={setIsLogged} />
        </div>
    )
}
