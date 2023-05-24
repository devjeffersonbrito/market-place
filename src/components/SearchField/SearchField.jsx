import React, { useState } from 'react'
import styles from './SearchField.module.scss'

import {BsSearch} from 'react-icons/bs'

export default function SearchField() {

        const [searchTerm, setSearchTerm] = useState('');
      
        const handleInputChange = (event) => {
          setSearchTerm(event.target.value);
        };
      
        const handleFormSubmit = (event) => {
          event.preventDefault();
          // Perform search logic or API request using the searchTerm
          console.log('Perform search for:', searchTerm);
        };
      
        return (
          <form onSubmit={handleFormSubmit} className={styles.container}>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <button type="submit"><BsSearch /></button>
          </form>
        );
      
      
}
