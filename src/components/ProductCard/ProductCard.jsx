import React from 'react'

import styles from './ProductCard.module.scss'

export default function ProductCard({product}) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={product.urlImage} alt="" />
      </div>
      <div className={styles.text}>
        <div> <h3>R$ {product.price}</h3></div>
        <div><p>{product.name}</p></div>
        <div><p>Cor:  {product.color}</p></div>
      </div>
    </div>
  )
}
