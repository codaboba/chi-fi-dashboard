import React from 'react';
import styles from '../styles/AddRow.css';

const jsStyles = {
  color: 'white',
  backgroundColor: 'gray',
};

const AddRow = props => {
  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className="ui button"
        style={jsStyles}
        role="button"
        onClick={props.handleAddRow}
      >
        Add Row
      </button>
    </div>
  );
};

export default AddRow;
