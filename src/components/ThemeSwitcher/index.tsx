import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import './index.css';

import { toggleSwitch } from "store/theme/actions";

import { selectTheme } from "store/theme/selectors";

const ThemeSwitcher = () => {

  const dispatch = useDispatch()
  const { isDarkMode } = useSelector(selectTheme)

  const handleChange = (event) => {
    return event.target.checked ? dispatch(toggleSwitch('dark')) : dispatch(toggleSwitch('light'))
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode)
  }, [isDarkMode])

  return (
    <div className="theme-switcher-wrapper">
        <input type="checkbox" id="switch_theme" onChange={handleChange} checked={isDarkMode === 'dark'} className="input-switch"/>
        <label className="header-switcher" htmlFor="switch_theme"></label>
    </div>
  )
}

export default ThemeSwitcher