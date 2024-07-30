import React, {useState} from 'react';
import Header from './Header';
import Note from "./Note"
import Footer from "./Footer"
import CreateArea from './CreateArea';

function App(){

  const [addNote, setAddNote] = useState([]);

  function onAdd(note){
    setAddNote([...addNote, note])
  }

  function onDelete(id){
    const deleteNote = [...addNote];

    setAddNote(
      deleteNote.filter((item, index) => index !== id )
    )}

  return (<div>
    <Header/>
    <CreateArea addFunction={onAdd}/>
    {addNote.map((item, index)=> <Note 
      key={index}
      id={index}
      name={item.title}
      content={item.content}
      deleteFunction={onDelete}
    />)}
    <Footer/>
  </div>)
};

export default App;