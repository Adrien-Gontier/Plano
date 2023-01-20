import React from 'react'
import DeconnectBtn from './DeconnectBtn'
import Title from './Title'

export default function Header() {
  return (
    <div className="header">
      <Title />
      <DeconnectBtn />
    </div>
  )
}
