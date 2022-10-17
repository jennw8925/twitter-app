import React, {useState} from 'react';
import "../Styles/Counter.css"
import emptyHeart from '../Images/empty_heart.png';
import fullHeart from '../Images/red_heart.png';

const Counter = () => {

    const [count, setCount] = useState(0);
    const showHeart = [emptyHeart, fullHeart]
    const i = count;

    const changeLike = () =>{
        if (count === 0){
            setCount (count+1);
        }   
        if (count === 1){
            setCount(count-1);
        }
    }
    console.log(count);
    console.log(showHeart);

    return(
        <div> 
            <button id = "likeButton" onClick = {changeLike}> 
                <img id = "heart" src = {showHeart[i]}/> {count}
                </button>

        </div>
    )
 }

export default Counter;