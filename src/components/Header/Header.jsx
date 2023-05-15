import React, { createElement } from "react";

import styles from "./Header.module.scss";

import NavBar from "src/components/NavBar/NavBar";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header} >
        <div>
          <a href="/"><h1>MaketPlace</h1></a>
        </div>
        <NavBar />
      </div>
    </div>
  );
}
