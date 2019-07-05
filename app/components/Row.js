import React from 'react';
// import styles from '../styles/Table.css';

const styles = {
  row: {
    padding: '12px 20px',
  },
};

const Row = props => {
  const {
    inspection_id,
    aka_name,
    address,
    zip,
    city,
    inspection_date,
  } = props;
  return (
    <tr>
      <td style={styles.row}>{inspection_id}</td>
      <td style={styles.row}>{aka_name}</td>
      <td style={styles.row}>{address}</td>
      <td style={styles.row}>{city}</td>
      <td style={styles.row}>{zip}</td>
      <td style={styles.row}>{inspection_date}</td>
    </tr>
  );
};

export default Row;
