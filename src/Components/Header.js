import React from 'react';
import "../Styles/Header.css"
import logo from '../Images/bird.jpg';

//all one big arrow function, () because no parameters for now
const Header = (props) => {
    console.log(props);

    return (
        <div>
            <div id = "header"> 
                
                <img id = "logo" src = {logo}/>
                <button class = "tabs"> Latest </button>
                <button class = "tabs"> Explore </button>
                <button class = "tabs"> Settings </button>
                
            </div>
        </div>
    )
}

export default Header;