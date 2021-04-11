import React from "react";
import classes from "./Logo.css"
import yummyLogo from '../../resources/images/logo2.png'


const logo = props => {
    return <div className={classes.Logo}>
        <img src={yummyLogo} alt="Yummy"/>
    </div>
};

export default logo;
