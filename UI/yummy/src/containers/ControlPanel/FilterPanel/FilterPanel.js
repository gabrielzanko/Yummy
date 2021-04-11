import React, {Component, Fragment} from 'react';
import classes from "./FilterPanel.css"
import {FormCheck} from "react-bootstrap";

class FilterPanel extends Component
{
    render()
    {
        return (
            <div className={classes.FilterPanel}>
                <h3><strong>Filter By:</strong></h3>
                <button>Limitations combobox</button>
                <button>Ingredients checkbox bar</button>
                <button>Cooking Time combobox</button>
                <button>Food Type combobox</button>
                <label>Followers checkbox</label>
            </div>
        );
    }
}

export default FilterPanel;
