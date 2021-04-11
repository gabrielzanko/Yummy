import React, {Component, Fragment} from 'react';
import classes from "./SearchBar.css"

class SearchBar extends Component
{
    render() {

        let searchPrompt = "Ingredeint";
        // <div className={classes.SearchBar}>
        //     <h3><strong>Searching Bar:</strong></h3>
        //     <button>User</button>
        //     <button>Recipe</button>
        //     <button>Ingredient</button>
        //     <textarea/>
        //     <button>Search</button>
        // </div>
        return <div>
        <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">What are you searching for ?</span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder={searchPrompt}
                name="s"
            />
            <button type="submit">Search</button>
        </form>
        </div>
    };
}

export default SearchBar;
