import React, {useState, useEffect} from 'react';
import Tweets from './Tweets.js';
import SearchBar from './SearchBar.js';
import "../Styles/Body.css";
import axios from 'axios';


const Body = () => {
  
   const init = []; 
   const defaultDate = new Date();
   const defDate = defaultDate.toLocaleDateString()
   const defTime = defaultDate.toLocaleTimeString()
   
 
   const [handle, setHandle] = useState(""); 
   const [author, setAuthor] = useState(""); 
   const [content, setContent] = useState(""); 
 
   const [allTweets, setAllTweets] = useState(init); 
   const [filteredTweets, setFilteredTweets] = useState([]); 

   const[trigger, setTrigger] = useState(false);
   const[img, setImg] = useState("");

   useEffect(() => {
    // the .then() means code wait for API to respond/return data
    axios.get('https://dog.ceo/api/breeds/image/random').then(
      //info is what we get back from url
      info => {setImg(info.data.message);
      }
    )
  }, [trigger]) //dependancy array


   const addTweet = () => {
     if (handle !== "" && author !== "" && content !== "") {
      setTrigger(!trigger); //set random dog image with every new tweet
      setAllTweets([{handle: handle, author: author, date: defDate, time: defTime, content:content, likes:0, prof:img}, ...allTweets]); 
      setHandle(""); 
      setAuthor(""); 
      setContent(""); 
     }
   }

    const filterTweets = (match) => {
        const result = allTweets.filter((tweet) => {
          if (match !== ""){ //if nothing typed into search bar, return none of the tweets
            return tweet.content.toLowerCase().includes(match.toLowerCase());
          }
        })
        setFilteredTweets(result);
    }
    
    const clearSearch = () => {
      setFilteredTweets([]);
    }


    return (

      <div>

        <div id = "search-bar">
          <SearchBar onClick={(match) => filterTweets(match)}/>
          <button onClick= {clearSearch}> Clear Search </button>
          <br/>
          <b>Search results:</b> 
          {filteredTweets.map((tweet, i) => (
          <Tweets handle={tweet.handle} author={tweet.author} content={tweet.content} likes={tweet.likes} prof={tweet.prof} date= {tweet.date} time = {tweet.time} key={i} />
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
            <Tweets handle={tweet.handle} author={tweet.author} content={tweet.content} likes={tweet.likes} prof={tweet.prof} date={tweet.date} time={tweet.time} key={i} />
          ))}
        </div>


    </div>
    )
}

export default Body;