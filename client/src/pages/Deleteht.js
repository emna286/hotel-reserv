import axios from "axios"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

function Deleteht() {
  const navigate=useNavigate()
  const deletehotel=(e)=>{
    e.preventDefault()
    const token=JSON.parse(localStorage.getItem("user")).token
    axios.post('http://localhost:8000/api/hotels/deleteht',{name:hotelname.current.value},{
      headers: {
      'Authorization': `Bearer ${token}` 
      }}
      )
      navigate('/hotels')
    }
    const hotelname=useRef()
  return (
    <div>
      
    <form>
<label>Name of hotel to delete</label>
        <input type ="text" placeholder="enter the hotel name to delete" ref={hotelname} ></input>
        <button onClick={deletehotel}>Delete</button>
        </form>
    </div>
  )
}

export default Deleteht
