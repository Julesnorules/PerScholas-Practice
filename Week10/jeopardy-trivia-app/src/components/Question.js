import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Question () {

 
    const [question, setQuestion] = useState({});
  const getQuestion = async () => {
      try {
        const response = await fetch('http://jservice.io/api/random');
        const data = await response.json();
        this.state = data[0].question;
        console.log(data[0].question)
         setQuestion(data[0].question);
      } catch (error) {
        console.error(error);
      };
  }

  useEffect(() => {
    getQuestion();
  }, [])

    return(        
        <div>
            <button onClick={() => {
             getQuestion()
            }}><h3>Get Question</h3></button>
             {/* <p>{this.state}</p>  */}
        </div>
        
    )

}
