import React, {useState, useEffect} from 'react';
import Tweets from './Tweets.js';
import SearchBar from './SearchBar.js';
import "../Styles/Body.css";
import axios from 'axios';


const Body = () => {

//VARIABLES
  //define dates and times 
   const defaultDate = new Date();
   const defDate = defaultDate.toLocaleDateString();
   const defTime = defaultDate.toLocaleTimeString();

  //define variables that will hold user input
   const [handle, setHandle] = useState(""); 
   const [author, setAuthor] = useState(""); 
   const [content, setContent] = useState(""); 

  //define arrays that will store created and searched tweets
   const [allTweets, setAllTweets] = useState([]); 
   const [filteredTweets, setFilteredTweets] = useState([]); 

  //define variables for useEffect and API
   const[trigger, setTrigger] = useState(false);
   const[img, setImg] = useState("");

//FUNCTIONS
  //useEffect created to call from API only when needed
   useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random').then( //only set image if the data is retrieved
      info => {setImg(info.data.message);}
    )}, [trigger]) 

  //function for adding tweets, implemented by Create button
   const addTweet = () => {
     if (handle !== "" && author !== "" && content !== "") { //if statement to ensure there is something typed in all the boxes before creating tweet
      setTrigger(!trigger); //set random dog image with every new tweet
      setAllTweets([{handle: handle, author: author, date: defDate, time: defTime, content:content, likes:0, prof:img}, ...allTweets]); 
      setHandle(""); 
      setAuthor(""); 
      setContent(""); 
     }
   }

  //function for searching tweets given a user input
    const filterTweets = (match) => {
        const result = allTweets.filter((tweet) => { //add all the matches to a temporary array
          if (match !== ""){ //if nothing typed into search bar, return none of the tweets
            return tweet.content.toLowerCase().includes(match.toLowerCase());
          }
        })
        setFilteredTweets(result);
    }
    
  //function for clearing searched tweets
    const clearSearch = () => {
      setFilteredTweets([]); //set filtered tweets array to an empty array
    }


    return (
      
      <div>
        <div id = "search-bar">
          <SearchBar onClick={(match) => filterTweets(match)}/>
          <button onClick= {clearSearch}> Clear Search </button>
          <br/>
          <b>Search results:</b> 
          {filteredTweets.map((tweet, i) => (
          <Tweets handle={tweet.handle} author={tweet.author} content={tweet.content} likes={tweet.likes} 
          prof={tweet.prof} date= {tweet.date} time = {tweet.time} key={i}/>
          ))}
        </div>


        <div id = "tweet-creator">
          <h4>Create a Tweet</h4>
          <input placeholder="Handle" value={handle} onChange={e => setHandle(e.target.value)}></input>
          <input placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)}></input>
          <input placeholder="Content" value={content} onChange={e => setContent(e.target.value)}></input>
          <button onClick={addTweet}>Create</button>
        </div>
        

        <div id="feed">
          <h2 id="feedTitle">Your Twitter Feed</h2>
          {allTweets.map((tweet, i) => (
            <Tweets handle={tweet.handle} author={tweet.author} content={tweet.content} likes={tweet.likes} 
            prof={tweet.prof} date={tweet.date} time={tweet.time} key={i}/>
          ))}
        </div>

    </div>
    )
}

export default Body;