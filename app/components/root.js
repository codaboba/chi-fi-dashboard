import React from 'react';
import Table from './Table';
import styles from '../styles/index.css';

const jsStyles = {
  title: {
    margin: '20px',
    textAlign: 'center',
  },
};

const Root = props => {
  return (
    <div className="root">
      <h1 style={jsStyles.title}>Chicago Food Inspections in 2018</h1>
      <div className={styles.table}>
        <Table />
      </div>
    </div>
  );
};

export default Root;
