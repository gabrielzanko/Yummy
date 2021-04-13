import React, { Fragment } from "react";
import classes from "./ShiningButton.css"

const shiningButton = props => {
   return <Fragment>
        <button
            className={classes.shiningButton} onClick={props.clicked}>
            {props.children}</button>
    </Fragment>
};

export default shiningButton;
