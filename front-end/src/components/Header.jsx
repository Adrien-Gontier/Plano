import React from 'react'
import DeconnectBtn from './DeconnectBtn'
import Title from './Title'

export default function Header() {
    
    // set context for display compoennt in psedo navbar
    
    return (
        <div className="header"><Title /><DeconnectBtn /></div>
    )
}