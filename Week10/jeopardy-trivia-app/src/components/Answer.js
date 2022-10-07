import React from 'react';
import { useState } from "react";
import Question from './Question';
import { useParams } from "react-router-dom"


export default function Answer () {

  const [answer, setAnswer] = useState({});
  const getAnswer = async () => {
      try {
        const response = await fetch('./Question');
        const data = await response.json();
        setAnswer(data[0]);
      } catch (error) {
        console.error(error);
      };
  }

  return(        
    <div>
      <button onClick={() => {
        getAnswer()
      }}><h3>Show Answer</h3></button>
        <h4>Answer: (<Question {question?.answer} />)</h4> 
    </div>
  )
}
