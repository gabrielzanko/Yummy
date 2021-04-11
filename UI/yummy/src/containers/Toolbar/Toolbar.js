import React, {Fragment} from "react";
import classes from "./Toolbar.css"
import { NavLink } from 'react-router-dom';
import Logo from "../../components/Logo/Logo";

const toolbar = props => {
    return <Fragment>
        <div className={classes.Toolbar}>
            <Logo/>
            <nav>
                <section className={classes.Links}>
                    <NavLink to={"/home"}>Home</NavLink>
                    <NavLink to={"/profile"}>Profile</NavLink>
                    <NavLink to={"/favorite"}>My Favorite Recipes</NavLink>
                    <NavLink to={"/contact"}>Contact Us</NavLink>
                    <NavLink to={"/notification"}>Notifications</NavLink>
                    <NavLink to={"/login"}>Logout</NavLink>
                </section>
            </nav>
        </div>
    </Fragment>
};

export default toolbar;
