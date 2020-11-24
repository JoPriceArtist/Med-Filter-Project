import React, { useState, useEffect } from 'react';
import styles from './medicines.module.css';
import Medicine from './medicine/medicine.js';

const Medicines = ({ medicines, searchTerm }) => {
  //   const [filteredArray, setFilteredArray] = useState([]);

  //   const filterIt = () => {
  //     setFilteredArray(
  //       medicines.filter((medicine) => {
  //         if (
  //           medicine.name.toLowerCase().includes(searchTerm) ||
  //           medicine.company.toLowerCase().includes(searchTerm)
  //         )
  //           return true;
  //       })
  //     );
  //   };

  //   useEffect(() => {
  //     filterIt();
  //   }, [searchTerm]);

  const myMedStyle = {
    textAlign: 'center',
    margin: '15px',
    border: '1px solid',
    padding: '15px',
    backgroundColor: 'lightgrey',
  };

  //   if (!filteredArray) {
  //     return <div>no medicines</div>;
  //   }

  return (
    <div className={styles.root}>
      {/* looks like you have {filteredArray.length} medicines! */}

      {/* {filteredArray.length === 1 && (
        <div>Looks like you have {filteredArray.length} medicine!</div>
      )}
      {filteredArray.length > 1 && (
        <div>Looks like you have {filteredArray.length} medicines!</div>
      )}
      {filteredArray.length < 1 && <div>Looks like you have are healthy</div>} */}

      {medicines.map((m) => (
        <Medicine name={m.name} company={m.company} />
      ))}
    </div>

    //     <div style={myMedStyle} key={i}>
    //       {' '}
    //       name: {m.name}, <br /> company: {m.company}{' '}
    //     </div>
    //   ))}
    // </div>
  );
};

export default Medicines;
