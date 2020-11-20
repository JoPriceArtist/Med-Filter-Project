import React from 'react';
import styles from './medicines.module.css';
const Medicines = ({ medicines }) => {
    console.log(medicines);

    const myMedStyle = {
        margin: '15px',
        border: '1px solid',
        padding: '15px',
        backgroundColor: 'lightgrey'
    }

    if (!medicines) {
        return<div>foo</div>
    }

    return (<div className={styles.root}>looks like you have {medicines.length} medicines!
        {medicines.map((m, i) => (
        <div style={myMedStyle} key={i}> {m.name}, {m.company} </div>
      ))}
    </div>);

}

export default Medicines;