import React, { useState, useEffect } from 'react';
import styles from './medicine.module.css';

const Medicine = ({ searchTerm }) => {
  const [filteredArray, setFilteredArray] = useState([]);

  const filterIt = () => {
    setFilteredArray(
      medicines.filter((medicine) => {
        if (
          medicine.name.toLowerCase().includes(searchTerm) ||
          medicine.company.toLowerCase().includes(searchTerm)
        )
          return true;
      })
    );
  };

  useEffect(() => {
    filterIt();
  }, [searchTerm]);

  if (!filteredArray) {
    return <div>no medicines</div>;
  }
  return <div className={styles.med}>{filteredArray}</div>;
};

export default Medicine;
