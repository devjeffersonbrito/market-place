import styles from "./Home.module.scss";
import ProductsList from "src/components/ProductsList/ProductsList";

import React, { useEffect, useState } from "react";

export default function Home() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp)=>resp.json())
      .then( (data)=> {
        setProductsList(data);
        console.log(data);
      })
      .catch((err)=> console.log(err));
  }, []);

  return (
    <>
      {productsList && (
        <ProductsList productsList={productsList}/>
      )}
    
    </>
  );
}
