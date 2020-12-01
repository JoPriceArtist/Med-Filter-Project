import React, { useState, useEffect } from 'react';
import styles from './medicines.module.css';
import { AidOption } from 'grommet-icons';

const Medicines = ({ medicines, searchTerm }) => {
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

  const myMedStyle = {
    textAlign: 'center',
    margin: '15px',
    border: '1px solid',
    padding: '15px',
    backgroundColor: 'lightgrey',
  };

  if (!filteredArray) {
    return <div>no medicines</div>;
  }

  const alert =
    filteredArray.length === 0
      ? `looks like you don't have any medicines!`
      : `looks like you have ${filteredArray.length} medicine${
          filteredArray.length !== 1 ? 's!' : '!'
        }`;

  return (
    <div className={styles.root}>
      {alert}
      {filteredArray.map((m, i) => (
        <div style={myMedStyle} key={i}>
          {' '}
          <div>
            <AidOption />
          </div>
          <div>name: {m.name} </div>
          <div>company: {m.company}</div>
        </div>
      ))}
    </div>
  );
};

export default Medicines;
