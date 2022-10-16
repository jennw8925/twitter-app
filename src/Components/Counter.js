import React, {useState} from 'react';
import "../Styles/Counter.css"
import emptyHeart from '../Images/empty_heart.png';
import fullHeart from '../Images/red_heart.png';

const Counter = () => {

    const [count, setCount] = useState(0);

    console.log(count);

    return(
        <div> 
            <p> {count} </p>
            <button onClick = {() => (setCount(count+1))}> 
                <img id = "fullHeart" src = {fullHeart}/>
                </button>
            <button onClick = {() => (setCount(count-1))}> 
            <img id = "emptyHeart" src = {emptyHeart}/>  </button>

        </div>

    )

}

export default Counter;