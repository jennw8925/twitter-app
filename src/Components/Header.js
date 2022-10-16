import React from 'react';
import "../Styles/Header.css"
import logo from '../Images/bird.jpg';

//all one big arrow function, () because no parameters for now
const Header = (props) => {
    console.log(props);
    let numUsers = 42;


    return (
        <div>
            <img id = "logo" src = {logo}/>
            <b> Total Number of users: {numUsers} </b>
        </div>
    )
}

export default Header;