import React, { createElement } from "react";

import styles from "./Header.module.scss";

import NavBar from "src/components/NavBar/NavBar";
import SearchField from "../SearchField/SearchField";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header} >
        <div>
          <a href="/"><h1>MaketPlace</h1></a>
        </div>
        <SearchField />
        <NavBar />
      </div>
    </div>
  );
}
