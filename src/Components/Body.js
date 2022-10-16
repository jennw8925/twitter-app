import React from 'react';
import Tweets from './Tweets.js';
import "../Styles/Body.css";
import serena from '../Images/serena_photo.jpg';

const Body = () => {
    let appAuthor = "Jennifer"; //javascript outside return statement, if in 
    //return statement, need curly braces 
    // write a function to add a like

    return (

        <div>
            <div id = "feed">
            <h2 id = "feedTitle"> Twitter Feed </h2>
            <Tweets prof = {serena} handle = {"@Jennifer"} author = {"Jennifer"} date = {"October 9, 2022"} time = {"5PM"} />
            <Tweets handle = {"@Marianne"} author = {"Marianne"} date = {"October 9, 2022"} time = {"5PM"} />
            </div>
        </div>
    )
}

export default Body;