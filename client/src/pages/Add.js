import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../redux/slice/authSlice'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Add() {

const [hotel,setHotel]=useState()
const navigate=useNavigate()
const addhotel=async(e)=>{
        e.preventDefault()
        const token=JSON.parse(localStorage.getItem("user")).token
        try{
                await axios.post('http://localhost:8000/api/hotels/add',hotel,{
                headers: {
                'Authorization': `Bearer ${token}` 
                
                }})
                
                

                navigate('/hotels')
        
        }catch (error){
        console.log(error)
        }
        
        }
        

        
return (
    <div>
    
    <form>
<label>name</label>
        <input type ="name" placeholder="enter hotel name"onChange={(e)=>{
        setHotel({...hotel,name:e.target.value})}} ></input>
<label >price</label>
<input type="number"  placeholder="enter the price " min="0" max="600"onChange={(e)=>{
        setHotel({...hotel,price:e.target.value})}}/>
        <label>level</label>
<input type="number"  placeholder="enter the level " min="0" max="5"onChange={(e)=>{
        setHotel({...hotel,level:e.target.value})}}/>
        <label>description</label>
        <input type ="string" placeholder="enter the description" onChange={(e)=>{
        setHotel({...hotel,description:e.target.value})}}></input>
        <label>photo</label>
        <input type ="string" placeholder="enter the photo link" onChange={(e)=>{
        setHotel({...hotel,email:e.target.value})}}></input>
        <button onClick={addhotel}>Add</button>
        </form>
    </div>
  )
}

export default Add
