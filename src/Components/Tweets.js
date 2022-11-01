import React from 'react';
import "../Styles/Tweets.css"
//^ going into parent folder
import Counter from './Counter.js';

const Tweets = (props) => {
    console.log(props);

    return (
        <div id = 'tweet-container'>
            <div id = "top">
            <img id = "pic" src = {props.prof}/>
            <div id = "names">
                <p> {props.author} </p>
                <p> {props.handle}</p>
            </div>
             </div>
            
            <p id = 'tweet-text'> {props.content}</p>

            <div id = "footer">
                <p> {props.time}</p>
                <p> {props.date} </p>
                <p> <Counter/> </p>
            </div>

        </div>
    )
}
export default Tweets;