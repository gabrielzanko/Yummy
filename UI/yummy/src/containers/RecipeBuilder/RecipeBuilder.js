import React, { Component } from "react";
import classes from "./RecipeBuilder.css"
import ShiningButton from "../../components/UI/ShiningButton/ShiningButton";

class RecipeBuilder extends Component{

    state = {
        totalSections: 1,
        currentSection: 0,
        sections: [],
        method: null,
        timer: null,
        note: "",
        amount: null,
        ingredients: [],
        utensil: null
    }

    componentDidMount() {
        this.loadSectionData(this.state.currentSection);
    }

    //TODO: close the modal and finish generating whats needed
    generateRecipeBookHandler = () => {
        this.props.recipeBuilderClose();
    }

    nextSectionHandler = () => {

        let updatedSectionNumber = 0;
        let updatedTotalSections = this.state.totalSections;

        if(this.state.currentSection < this.state.totalSections)
        {
            updatedSectionNumber = this.state.currentSection + 1;

            if (updatedSectionNumber === this.state.totalSections)
            {
                updatedTotalSections++;
            }

            this.setState({
                currentSection: updatedSectionNumber,
                totalSections: updatedTotalSections
            });

            this.loadSectionData(updatedSectionNumber);
        }
    }

    prevSectionHandler = () => {
        let updatedSectionNumber;

        if(0 < this.state.currentSection)
        {
            updatedSectionNumber = this.state.currentSection - 1;
            this.setState({currentSection: updatedSectionNumber});
            this.loadSectionData(updatedSectionNumber);
        }
    }

    //TODO: loading the data for the current section
    loadSectionData = (sectionNumber) => {
        console.log(sectionNumber);
    }

    render() {
        return <div className={classes.RecipeBuilderPage}>
            <div className={classes.RecipeBuilder}>
                <div className={classes.LeftControlPanel}>
                    <h5>LeftControlPanel</h5>
                </div>
                <div className={classes.CookingTable}>
                    <h5>View Cooking</h5>
                </div>
                <div className={classes.RightControlPanel}>
                    <h5>RightControlPanel</h5>
                </div>
            </div>
            <div className={classes.SectionsController}>
                <div className={classes.SectionsNav}>
                    <ShiningButton clicked={this.prevSectionHandler}>Prev</ShiningButton>
                    <ShiningButton clicked={this.nextSectionHandler}>Next</ShiningButton>
                </div>
                <ShiningButton clicked={this.generateRecipeBookHandler}>Generate Book</ShiningButton>
            </div>
        </div>
    }
}

export default RecipeBuilder;
