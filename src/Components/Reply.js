import React from 'react';
import '../Styles/Reply.css';


const Reply = () => {


    return(
        <div>
            <p>Reply</p> 
            <p id = 'reply-text'> {props.content}</p>

            <div id = "footer">
                <p> {props.time}</p>
                <p> {props.date} </p>
                <p> <Counter/> </p>
            </div>
            {props.key}
        </div>
        
    )

}

export default Reply;