import React from 'react';

import './tool-row.style.css';

const ToolRow = (props) => {
    return (
        <div className="tool-row-container">
          {props.tool.name} {props.tool.process} {props.tool.turn}
        </div>
     );
}

export default  ToolRow;