import React from 'react'
import styles from './ProductsList.module.scss'
import ProductCard from '../ProductCard/ProductCard'

export default function ProductsList({productsList}) {
  return (

    <div className={styles.container}>

        { productsList && productsList.map((product)=>(
            <ProductCard product ={product}  key={product.id}/>
        ))}
      
    </div>
  )
}
