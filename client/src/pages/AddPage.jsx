import React, { useState } from 'react'

const AddPage = () => {
    const [title,setTitle]=useState("")
    const [notes,setNotes]=useState("")
  
    const submit=()=>{
        let noteData={
            "title":title,
            "note":notes
        } 

fetch('http://localhost:3000/addNotes', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(noteData),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    alert("data added sucsessfully")
    
  })
  .catch((error) => {
    console.error('Error:', error.message);
     
  });

    }

  return (
    <div>
        <input type="text" name="" id="" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter Title"/>
        <input type="text" name="" id="" value={notes} onChange={(e)=>setNotes(e.target.value)} placeholder="Enter Notes"/>
        
        <button onClick={submit}>sumit</button>
    </div>
  )
}

export default AddPage