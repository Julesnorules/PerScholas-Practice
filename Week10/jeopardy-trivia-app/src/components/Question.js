import React from 'react';
import { useState } from "react";

export default function Question () {

  const [question, setQuestion] = useState({})
  const getQuestion = async () => {
        const response = await fetch('http://jservice.io/api/random');
        const data = await response.json();
        setQuestion(data[0]);
  }

  return(        
    <div>
      <button onClick={() => {
          getQuestion()
        }}><h3>Get Question</h3>
      </button>
      <h4>{question?.question}</h4>
      <div>
      <h3>Category: </h3><h4>{question?.category.title}</h4>
      
      </div>
        
    </div>
  )
}
