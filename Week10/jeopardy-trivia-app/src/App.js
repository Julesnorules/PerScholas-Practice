import React from 'react';
import './App.css';
import './style.css';
import Question from './components/Question';
import Answer from './components/Answer';
import Score from './components/Score';
import {useState} from 'react'
// import RevealQ from './components/RevealQ'


export default function App() {

  const [data, setData] = useState({})

  const getData = async () => {
    const response = await fetch('http://jservice.io/api/random');
    const data = await response.json();
    setData(data[0]);
  }



  return (    
    <div className="App">
      <header>Welcome to JEOPARDY!</header>

      <div>
        <Score />
      </div>

      <div>
        <h1>Let's Play!</h1>
      </div>

      <div><Question data={data} /></div>  

      <div><Answer data={data} /></div>


    </div>
  )        
}