import "../Styles/LogIn.css";
import React from 'react';
import {Link} from 'react-router-dom';

const LogIn = () => {
    return(
    <div>
        <b id = "login-text"> Login </b>
        <div>
            <Link to = "/"> <button>Back to Home</button></Link>
        </div>
    </div>
    )
}

export default LogIn;