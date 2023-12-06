import React from "react";
import './index.css';
import ThemeSwitcher from "components/ThemeSwitcher";
import Logo from 'assets/img/logo_il.png';

const Header = () => {
  return (
    <header className="header">
        <div className="logo-wrapper">
          <img src={Logo} alt={Logo} className="logo"/>
        </div>
        <ThemeSwitcher />
    </header>
  )
}

export default Header