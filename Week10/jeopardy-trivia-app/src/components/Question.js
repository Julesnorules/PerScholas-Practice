import React from 'react';

export default function Question (props) {

  return(        
    <div>
      <button onClick={() => {getData()}}>
        <h3>Get Question</h3></button>
      <h4>{props.data.question}</h4>
      <div>
      <h3>Category: </h3><h4>{props.data.category.title}</h4>
      <h3>Points: </h3><h4>{props.data.value}</h4>
      </div>
        
    </div>
  )
}
