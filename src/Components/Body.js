import React from 'react';
import Tweets from './Tweets.js';
import "../Styles/Body.css";
import serena from '../Images/serena_photo.jpg';
import venus from '../Images/venus_photo.jpg';

const Body = () => {
    let appAuthor = "Jennifer"; //javascript outside return statement, if in 
    //return statement, need curly braces 
    // write a function to add a like

    return (

        <div>
            <div id = "feed">
            <h2 id = "feedTitle"> Twitter Feed </h2>
            <Tweets prof = {serena} handle = {"@serenawilliams"} author = {"Serena Williams"} date = {"October 9, 2022"} time = {"5:37PM"} />
            <Tweets prof = {venus} handle = {"@Venuseswilliams"} author = {"Venus Williams"} date = {"October 9, 2022"} time = {"4:39PM"} />
            </div>
        </div>
    )
}

export default Body;