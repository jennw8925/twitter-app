import React, {useState} from 'react';
import "../Styles/Counter.css"
import emptyHeart from '../Images/empty_heart.png';
import fullHeart from '../Images/red_heart.png';

const Counter = () => {

    const [count, setCount] = useState(0);
    const [img, setImg] = useState(false);

    return(
        <div> 
            <div>
            <img src = {!img? emptyHeart: fullHeart} width = "20" height = "20"
            onClick={() => {
                    setImg(!img);
                    img === false ? setCount(count+1): setCount(count-1)}}/>
            </div>
            {count} 
        </div>
    )
 }

export default Counter;