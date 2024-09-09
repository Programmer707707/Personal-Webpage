import React from 'react'
import LogoS from '../../../assets/images/logo-s.png'
import './Logo.scss'

const Logo = () => {
  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        src={LogoS}
        alt="JavaScript, Developer"
      />
    </div>
  )
}

export default Logo
