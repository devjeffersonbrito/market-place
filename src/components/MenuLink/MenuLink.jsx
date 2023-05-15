import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './MenuLink.module.scss'

export default function MenuLink({to, children}) {
  return (
    <NavLink to={to} className={styles.menu__link}>
      {children}
    </NavLink>
  )
}
