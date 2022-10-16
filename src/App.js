import './App.css';
import React from 'react';
import Header from './Components/Header.js';
import Body from './Components/Body.js';
import Counter from './Components/Counter.js';

function App() {
  return ( //return HTML
    <div style={{ textAlign: 'center' }}>
      <Header/>
      {/*<Counter/>*/}
      <Body/>
    </div>
  );
}

export default App;