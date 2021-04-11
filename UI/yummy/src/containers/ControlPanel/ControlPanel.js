import React, {Component, Fragment} from 'react';
import classes from "./ControlPanel.css"
import {FormCheck} from "react-bootstrap";
import FilterPanel from "./FilterPanel/FilterPanel";
import SearchBar from "./SearchBar/SearchBar";

class ControlPanel extends Component
{
    render()
    {
        return (
            <div className={classes.ControlPanel}>
                <SearchBar/>
                <FilterPanel/>
            </div>
        );
    }
}

export default ControlPanel;
