import React, { Fragment } from "react";
import classes from './Rate.css'

const rate = props => {
    return <Fragment>
            <h5 className={classes.coin}>{props.grade}</h5>
    </Fragment>
};

export default rate;
