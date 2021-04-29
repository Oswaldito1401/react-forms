import React from 'react';

import './tool-divition-row.style.css';

const ToolDivitionRow = (props) => {
    return (
        <div className="tool-divition-row-container">
          {props.divitionName}
        </div>
     );
}

export default  ToolDivitionRow;