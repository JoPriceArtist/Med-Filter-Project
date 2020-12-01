import React from 'react';
import styles from './medicines.module.css';
import Medicine from '../../components/medicine/medicine';

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
        <Medicine key={i} name={m.name} company={m.company} />
      ))}
    </div>
  );
};

export default Medicines;
