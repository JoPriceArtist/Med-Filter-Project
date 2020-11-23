import React from 'react';
import styles from './medicines.module.css';

const Medicines = ({ medicines, searchTerm }) => {
  console.log(medicines);

  const filteredArray = medicines.filter((medicine) => {
    // medicine.toLowerCase().includes(searchTerm);
    if (
      medicine.name.startsWith(searchTerm) ||
      medicine.company.startsWith(searchTerm)
    ) {
      return medicine;
    }
  });

  //   const (ternary) = <condition> ? <ifTrue> : <ifFalse>
  const arrayToRender = searchTerm
    ? filteredArray(medicines, searchTerm)
    : medicines;

  //   function

  arrayToRender.map((m, i) => {
    return (
      <div>
        <medicine key={i} name={m.name} company={m.company} />
        {''}
      </div>
    );
  });

  // const arrayToRender = ({ options,})

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
      {medicines.map((m, i) => (
        <div style={myMedStyle} key={i}>
          {' '}
          name: {m.name}, <br /> company: {m.company}{' '}
        </div>
      ))}
    </div>
  );
};

export default Medicines;
