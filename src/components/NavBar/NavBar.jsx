import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import styles from './NavBar.module.scss'
import {BsCart2} from "react-icons/bs"

import MenuLink from '../MenuLink/MenuLink'
export default function NavBar() {
  return (
    <nav className={styles.container}>
      <MenuLink  to='/sell'>Sell</MenuLink>
      <MenuLink  to='/login'>Login</MenuLink>
      <Link  to='/cart'><div className={styles.cart}><BsCart2 /><div>2</div></div></Link>
    </nav>
  )
}
