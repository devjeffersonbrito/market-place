import React from 'react'

import styles from './NavBar.module.scss'
import { Link } from 'react-router-dom'

import MenuLink from '../MenuLink/MenuLink'
export default function NavBar() {
  return (
    <nav className={styles.container}>
      <MenuLink to='/sell'>Sell</MenuLink>
      <MenuLink to='/login'>Login</MenuLink>
      <MenuLink to='/cart'>Cart</MenuLink>
    </nav>
  )
}
