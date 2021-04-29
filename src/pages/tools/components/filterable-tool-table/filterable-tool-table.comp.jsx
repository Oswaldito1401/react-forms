import React from 'react';
import SearchBar from '../search-bar/search-bar.comp';
import ToolTable from '../tool-table/tool-table.comp';

import './filterable-tool-table.style.css';


const FilterableToolTable = (props) => {
    return (
        <div className="filterable-tool-table-container">
            <SearchBar/>
            <ToolTable toolsList={props.toolsList}/>
        </div>
     );
}

export default  FilterableToolTable;