import React from 'react';
import Row from './Row';
import TableFoot from './TableFoot';
import { addRow } from './services.js';
import styles from '../styles/Table.css';

class Table extends React.Component {
  constructor() {
    super();
    this.state = { rows: [], offset: 0, active: 1 };
  }

  handleAddRow = async () => {
    const [row] = await addRow(this.state.offset);
    this.setState({
      rows: [...this.state.rows, row],
      offset: this.state.offset + 1,
    });
  };

  handlePageChange = event => {
    this.setState({ active: +event.target.value });
  };

  render() {
    return (
      <table className="ui celled table">
        <tbody>
          <tr>
            <th className={styles.heading}>Inspection ID</th>
            <th className={styles.heading}>Name</th>
            <th className={styles.heading}>Address</th>
            <th className={styles.heading}>City</th>
            <th className={styles.heading}>Zip</th>
            <th className={styles.heading}>Inspection Date</th>
          </tr>
          {this.state.rows.map(row => <Row key={row.inspection_id} {...row} />)}
        </tbody>
        <TableFoot
          rows={this.state.rows.length}
          active={this.state.active}
          handleAddRow={this.handleAddRow}
          handlePageChange={this.handlePageChange}
        />
      </table>
    );
  }
}

export default Table;

// handleAddRow = async () => {
// const [row] = await addRow();
// const [row] = await addRow(this.state.offset);
// this.setState({ rows: [...this.state.rows, row], offset: this.state.offset + 1});
// };
