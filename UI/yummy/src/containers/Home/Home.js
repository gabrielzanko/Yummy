import React, {Component, Fragment} from 'react';
import TopRecipes from "../../components/TopRecipes/TopRecipes";
import classes from "./Home.css"
import PostStreamer from "../PostStreamer/PostStreamer";
import ControlPanel from "../ControlPanel/ControlPanel";
import RecipeBuilder from "../RecipeBuilder/RecipeBuilder"
import Modal from "../../components/UI/Modal/Modal";

class Home extends Component
{
    state = {
        isUserBuildRecipe: false
    }

    showRecipeBuilder = () => {
        this.setState({isUserBuildRecipe: true});
    }

    closeRecipeBuilder = () => {
        this.setState({isUserBuildRecipe: false});
    }



    render()
    {
        return (
            <div className={classes.Home}>
                <Modal show={this.state.isUserBuildRecipe} modalClosed={this.closeRecipeBuilder}>
                    <RecipeBuilder/>
                </Modal>
                <div  className={classes.TopRecipes}>
                    <TopRecipes title={"Top 5 of the week !"}/>
                </div>
                <div className={classes.Posts}>
                    <button onClick={this.showRecipeBuilder}>Test Button</button>
                    <PostStreamer/>
                </div>
                <div className={classes.ControlPanel}>
                    <ControlPanel/>
                </div>
            </div>
        );
    }
}

export default Home;
