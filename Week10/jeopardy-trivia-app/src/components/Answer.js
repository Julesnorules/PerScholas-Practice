import React from 'react';
import { useState } from "react";

export default function Answer () {

  const [ question ] = useState('');

  return( 
    <>
    <div>
      <button onClick={() => getAnswer()}>Show Answer</button>
      <h3>Answer: { getAnswer }</h3>
    </div>
    </>       
  )
}

