import React from "react";
import RecipeSummary from './RecipeSummary/RecipeSummary';
import classes from './TopRecipes.css';

const topRecipes = props => {
    return <section className={classes.TopRecipes}>
            <p className={classes.TopLabel}>{props.title}</p>
            <RecipeSummary chefName="Eitan" recipeName="Fish & Chips" grade="5.6" cookingTime="10 Minutes"/>
            <RecipeSummary chefName="Sagi" recipeName="Hamburger" grade="8.2" cookingTime="13 Minutes"/>
            <RecipeSummary chefName="Nadav" recipeName="Pizza" grade="6.2" cookingTime="15 Minutes"/>
            <RecipeSummary chefName="Tomer" recipeName="Pasta" grade="9.7" cookingTime="45 Minutes"/>
            <RecipeSummary chefName="Ronen" recipeName="Fries" image grade="7.1" cookingTime="10 Minutes"/>
        </section>
};

export default topRecipes;
