import React from 'react';
import styles from './medicines.module.css';
const Medicines = ({ medicines }) => {
    return (<div className={styles.root}>
        looks like you have {medicines.length} medicines!
    </div>);
}

export default Medicines;