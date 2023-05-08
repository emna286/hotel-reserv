import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
function Hotels() {
  const [price,setPrice]=useState(600)
  const[hotels,setHotels]=useState([])
  const handleChange =(e)=>{
  setPrice (e.target.value)
  }
  const filterHotels=hotels.filter(hotel=>hotel.price<=price)
  useEffect(()=>{
    axios.get('http://localhost:8000/api/hotels/get').then((res)=>{
      setHotels(res.data)
    })
  },[])
return (
  <div style={{ width: "90%", margin:"auto"}}>
<input type="range" id="slider" min="200" max="600" value={price} step="10" onChange={handleChange}/> <br />
  price between 100 and {price} dt

  
    <div className='cardsord'>
      {filterHotels.map(hotel=>{
        return <Card key={hotel.name} name={hotel.name}rate={hotel.rate}description={hotel.description}price={hotel.price}photo={hotel.image}></Card>

      })}



    </div>
    </div>
  )
}

export default Hotels
