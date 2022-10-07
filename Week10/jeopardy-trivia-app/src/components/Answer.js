import React from 'react';
import {useState} from 'react'

export default function Answer (props) {

  const [showAnswer, setAnswer] = useState(false);

  return( 
    <>
    <div>
      <button onClick={() => setAnswer(!showAnswer)}>Show Answer</button>
      {showAnswer ? <h3>Answer: { props.data.answer }</h3> : ''}
    </div>
    </>       
  )
}

