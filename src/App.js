import './App.css';
import React, {useEffect, useState} from 'react';
import Header from './Components/Header.js';
import Body from './Components/Body.js';
import {Link} from 'react-router-dom';
import {db} from "./Firebase";
import {addDoc, collection, getDocs} from "firebase/firestore";


function App() {

  const [tweets, setTweets]= useState([]);

  //use effect control when we run through this code
  useEffect(() => {
    let temp = [];
    getDocs(collection(db, "twitter")).then((snapshot) => {
      snapshot.forEach((doc) => {
        temp.push(doc.data());
        console.log(temp);
      })
    })
    setTweets(temp);
  }, [])

  const add = () => {
    addDoc(collection(db, "twitter"), {
      author: "Lily",
      contents: "hi",
      likes: 8
    })
  }

  return ( 
    <div style={{ textAlign: 'center' }}>
      <Header/>
      <div id = "login-button">
        <Link to = "/login"> <button>Login Page</button></Link>
      </div>
      <button onClick = {add}> Database Test </button>
      <Body/>

      {tweets.map((post, i) => (
        <p> {post.author} </p>
      ))}

    </div>
  );
}

export default App;