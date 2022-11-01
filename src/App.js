import './App.css';
import React from 'react';
import Header from './Components/Header.js';
import Body from './Components/Body.js';
import {Link} from 'react-router-dom';

function App() {
  return ( //return HTML
    <div style={{ textAlign: 'center' }}>
      <Header/>
      <div id = "login-button">
        <Link to = "/login"> <button>Login Page</button></Link>
      </div>
      <Body/>

    </div>
  );
}

export default App;