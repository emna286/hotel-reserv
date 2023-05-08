
import React, { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Update() {
  
  const navigate=useNavigate()
    const updatehotel=(e)=>{
      e.preventDefault()
      
    const token=JSON.parse(localStorage.getItem("user")).token
      axios.post('http://localhost:8000/api/hotels/update',{name:nhotel.current.value,newname:nnhotel.current.value},{
        headers: {
        'Authorization': `Bearer ${token}` 
        }})
        navigate('/hotels')
    }
      const nhotel= useRef()
      const nnhotel=useRef()
    
  return (
    <div>
      <form>
<label>Name</label>
        <input type ="name" placeholder="enter hotel name"ref={nhotel} ></input>
        
<label>New Name</label>
        <input type ="name" placeholder="enter hotel new name" ref={nnhotel}></input>
        
        <button onClick={updatehotel}>Update</button>
        </form>
    </div>
  )
}

export default Update
