import React from 'react';
import AddRow from './AddRow';

const TableFoot = props => {
  const { active, rows, handleAddRow, handlePageChange } = props;
  const pages = [];

  for (let i = 0; i < rows.length; i++) {
    pages.push(i + 1);
  }

  return (
    <tfoot>
      <tr>
        <th colSpan="6">
          <AddRow handleAddRow={handleAddRow} />
          {/* <div
            aria-label="Pagination Navigation"
            role="navigation"
            className="ui pagination right floated menu"
          >
            <a className="item">
              <i
                aria-hidden="true"
                aria-label="Previous item"
                type="prevItem"
                className="chevron left icon"
              />
            </a>
            {pages.map(page => (
              <a
                key={page}
                type="pageItem"
                className={active == page ? 'active item' : 'item'}
                value={page}
                onClick={handlePageChange}
              >
                {`${page}`}
              </a>
            ))}
            <a className="item">
              <i
                aria-hidden="true"
                aria-label="Next item"
                type="nextItem"
                className="chevron right icon"
              />
            </a>
          </div> */}
        </th>
      </tr>
    </tfoot>
  );
};

export default TableFoot;
