import React, {Component, Fragment} from 'react';
import ViewPost from "../ViewPost/ViewPost";
import classes from "./PostStreamer.css"

class PostStreamer extends Component
{
    render()
    {
        return (
            <div className={classes.PostStreamer}>
                <ViewPost/>
                <ViewPost/>
            </div>
        );
    }
}

export default PostStreamer;
