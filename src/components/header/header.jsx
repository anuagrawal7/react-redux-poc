import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import logoImg from './../../assets/logo.png';

const Header = React.memo(() => {
  return <header className="flex-container">
    <div className="header-logo"><img src={logoImg} alt="logo" /><span> Project</span></div>
    <div className="navbar">
      <NavLink to="/" exact="true">Home</NavLink>
      <NavLink to="/users" exact="true">Users</NavLink>
    </div>
  </header>
})

export default Header;