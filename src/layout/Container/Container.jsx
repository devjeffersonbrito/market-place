import React from 'react'
import styles from './Container.module.scss'
export default function Container(props) {
  return (
    <main className={`${styles[props.containerWidth]} ${styles[props.containerHeight]}`}>
      {props.children}
    </main>
  )
}
