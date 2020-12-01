import React from 'react';
import styles from './medicines.module.css';
import { AidOption } from 'grommet-icons';

const Medicines = ({ medicines, searchTerm }) => {
  const filteredArray = medicines.filter((medicine) => {
    if (
      medicine.name.toLowerCase().includes(searchTerm) ||
      medicine.company.toLowerCase().includes(searchTerm)
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
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '2px 4px grey',
  };

  if (!medicines) {
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
      {arrayToRender.map((m, i) => (
        <div style={myMedStyle} key={i}>
          {' '}
          <div>
            <AidOption />
          </div>
          <div>name: {m.name}</div>
          <div> company: {m.company}</div>
        </div>
      ))}
    </div>
  );
};

export default Medicines;
