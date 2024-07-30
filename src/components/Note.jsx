import React from 'react';

function Note(props){

  function handleDelete(){
    props.deleteFunction(props.id);
  }

  return <div className='note'>
    <h1>{props.name}</h1>
    <p>{props.content}</p>
    <button onClick={handleDelete}>DELETE</button>
  </div>
}

export default Note;