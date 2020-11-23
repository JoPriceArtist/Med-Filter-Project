import React from 'react';
import styles from './search.module.css';

const Search = ({ searchTerm, handleChange }) => {
  return (
    <div className={styles.root}>
      <input
        aria-label="search"
        className={styles.search}
        placeholder="filter meds"
        type="search"
        onChange={handleChange}
        value={searchTerm}
      />
    </div>
  );
};

export default Search;
