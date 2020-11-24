import React from 'react';
import styles from './medicines.module.css';

const Medicines = ({ medicines, searchTerm }) => {
  const filteredArray = medicines.filter((medicine) => {
    if (
      medicine.name.includes(searchTerm) ||
      medicine.company.includes(searchTerm)
    ) {
      return true;
    }
  });

  //   const (ternary) = <condition> ? <ifTrue> : <ifFalse>
  const arrayToRender = searchTerm ? filteredArray : medicines;

  const myMedStyle = {
    textAlign: 'center',
    margin: '15px',
    border: '1px solid',
    padding: '15px',
    backgroundColor: 'lightgrey',
  };

  if (!medicines) {
    return <div>no medicines</div>;
  }

  return (
    <div className={styles.root}>
      {medicines.length > 1 && (
        <div>Looks like you have {medicines.length} medicines!</div>
      )}
      {medicines.length == 20 && (
        <div>
          You could look at reducing your need for pharmaceutical medication by
          implementing functional medicine methods.
          <p>FOOD IS THE REAL MEDICINE</p>{' '}
        </div>
      )}
      {medicines.length == 1 && (
        <div>looks like you have {medicines.length} medicine.</div>
      )}
      looks like you have {medicines.length} drugs!
      {arrayToRender.map((m, i) => (
        <div style={myMedStyle} key={i}>
          {' '}
          <div>name: {m.name}</div>
          <div> company: {m.company}</div>
        </div>
      ))}
    </div>
  );
};

export default Medicines;
