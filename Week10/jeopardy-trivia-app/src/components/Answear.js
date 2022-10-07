import React from 'react';
import { useState } from "react";
import Question from './Question';
import { useParams } from "react-router-dom"


export default function Answear () {

  const [answear, setAnswear] = useState({});
  const getAnswear = async () => {
      try {
        const response = await fetch('./Question');
        const data = await response.json();
        setAnswear(data[0]);
      } catch (error) {
        console.error(error);
      };
  }

  return(        
    <div>
      <button onClick={() => {
        getAnswear()
      }}><h3>Show Answear</h3></button>
        {/* <h4>Answear: {question?.answear}</h4>  */}
    </div>
  )
}

              {/* <div> 
                <button onClick={() => {
                }}><h3>Show Answer</h3></button>
                <span>Answer: {question.answer}</span>
                <div>
                <button onClick={() => {
                }}><p>Click to Reveal Question</p></button>
                </div>
              </div> */}