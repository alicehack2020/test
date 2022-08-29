import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => 
{
  
 const [data,setData]=useState([])
 const navigate=useNavigate()
  

 useEffect(()=>{
  loadData()
},[])

const loadData=()=>{
  fetch('http://localhost:3000/getNotes')
  .then(response => response.json())
  .then(data => setData(data)); 
}
  
const addNote=()=>{
   navigate("/addpage")
}



const deleteNote=(i)=>{
  console.log("id"+i);  
  const id={
    "_id":i}
fetch('http://localhost:3000/noteDelete', {
  method: 'DELETE', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(id),
})
.then((response) => response.json())
.then((data) => {
  console.log('Success:', data);
  alert("deleted sucessfully")
  loadData()
})
.catch((error) => {
  console.error('Error:', error.message);
  
});


}
  return (
    <>
    <button onClick={addNote}>Add</button>
 <div>
      {
        data.map((e)=>{
          return(<>
            <h1>{e.title}</h1>
            <p>{e.note}</p>
            <button onClick={()=>deleteNote(e._id)}>delete</button>
            <button>update</button>
          </>)
        })
      }
    </div>
    </>
   
  )
}

export default Home