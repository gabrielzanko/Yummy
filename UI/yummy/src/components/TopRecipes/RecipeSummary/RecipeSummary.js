import React from "react";
import classes from './RecipeSummary.css'
import Rate from "../../Rate/Rate";
import fries from "../../../resources/images/testingImages/fries.jpg";

const recipeSummary = props => {
    let image = null; // default
    if (props.image)
    {
       image = <img src={fries} alt="Fries"/> // fetch the requested image
    }

    return <div className={classes.RecipeSummary}>
        <p><strong>{props.recipeName}</strong></p>
        <div className={classes.RecipeImage}>
            {image}
        </div>
        <h5>{"  Cooking Time:  " + props.cookingTime}</h5>
        <h5> By :{props.chefName}</h5>
        <div className={classes.Grade}>
            <Rate grade={props.grade}/>
        </div>
    </div>
};

export default recipeSummary;
