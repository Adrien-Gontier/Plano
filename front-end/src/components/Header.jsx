import React from 'react'
import CreateProjectLink from './CreateProjectLink'
import DeconnectBtn from './DeconnectBtn'
import Title from './Title'

export default function Header() {
    return (
        <div className="header"><Title /><CreateProjectLink /><DeconnectBtn /></div>
    )
}