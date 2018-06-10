import React from 'react';
import './FilterComponent.css';

const FilterComponent = (props) => {
    return (
        <div className="filterCSS"> 
            <input type="text" id="txtSearch" />
            <button className="btnSearch" 
                onClick={() => props.clicked(document.getElementById("txtSearch").value)}
            > Search </button>
        </div>
    );
}

export default FilterComponent;
