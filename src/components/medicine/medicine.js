import React from 'react';
import { AidOption } from 'grommet-icons';

const medicine = ({ name, company }) => {
  const myMedStyle = {
    textAlign: 'center',
    margin: '15px',
    border: '1px solid',
    padding: '15px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '2px 4px grey',
  };

  return (
    <div style={myMedStyle}>
      <div>
        <AidOption />
      </div>
      <div>name: {name}</div>
      <div> company: {company}</div>
    </div>
  );
};

export default medicine;
