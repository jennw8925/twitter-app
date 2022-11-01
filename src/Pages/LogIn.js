import React from 'react';
import {Link} from 'react-router-dom';

const LogIn = () => {
    return(
    <div>
        <b> Login </b>
        
        <div>
            <Link to = "/"> <button>Back to Home</button></Link>
        </div>
    </div>
    )
}

export default LogIn;