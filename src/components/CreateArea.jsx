import React, {useState} from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content:"",
  });

  function handleChange(e){
    const {name, value} = e.target;
      setNote({...note,
        [name]: value
      })
  }

  function handleAdd(e){
    props.addFunction(note)
    setNote({
      title: "",
      content:"",
    })
    e.preventDefault()
  }

  return (
    <div>
      <form>
        <input name="title" value={note.title} onChange={handleChange} placeholder="Title" />
        <textarea name="content" value={note.content} onChange={handleChange} placeholder="Take a note..." rows="3" />
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
