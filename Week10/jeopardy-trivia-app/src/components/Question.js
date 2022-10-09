import React from 'react';

export default function Question (props) {


  return(        
    <div>
      <h4>{props.data.question}</h4>
      <div className='category'>
        <h3>Category: </h3><h4>{props.data.category ? props.data.category.title: ''}</h4>
      </div>
      <div className='points'>
        <h3>Points: </h3><h4>{props.data.value}</h4>
      </div>
    </div>
  )
}
