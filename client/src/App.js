
import './App.css';
import {NavLink, Route, Routes, useNavigate} from 'react-router-dom';
import Login from './pages/Login';
import Hotels from './pages/Hotels';
import Register from './pages/Register';
import Add from './pages/Add';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logout } from './redux/slice/authSlice';
import Deleteht from './pages/Deleteht';
import Update from './pages/Update';
import DeleteUser from './pages/DeleteUser';
import { isDraft } from '@reduxjs/toolkit';
import Reserve from './pages/Reserve';
function App() {
  const {user}=useSelector(state=>state.auth)


  const isAdmin=JSON.parse(localStorage.getItem('user'))?.role==='admin'
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const signoff=()=>{
    dispatch(logout())
    
      }
      useEffect(()=>{
        if(!user){
          navigate('/login')
        }
      },[user])

  return (
  <>
  
  <div className='image'>
<div className='navbar'>
<h1>Hotel reservation</h1>
<div className='links'>
{user?
<>
<NavLink to="/hotels">Hotels</NavLink>

{isAdmin&&<>
<NavLink to='/hotels/add'>Add Hotel</NavLink>
<NavLink to='/hotels/deleteht'>Delete Hotel</NavLink>
<NavLink to='/hotels/updateht'>Update Hotel</NavLink>

<NavLink to='/admin/deleteuser'>Delete User</NavLink>
</>
}

<button onClick={signoff}>logout</button>
</>
:
<>

<NavLink to="/register">register</NavLink>
<NavLink to="/login">login</NavLink>

</>
}

  </div></div>
  <div className='content'>
  <Routes>
    <Route path='/register' element={<Register></Register>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/hotels' element={<Hotels/>}></Route>
    <Route path='/hotels/add' element={<Add/>}></Route>
    <Route path='/hotels/deleteht' element={<Deleteht></Deleteht>}></Route>
    <Route path='/hotels/updateht' element={<Update></Update>}></Route>
    
    <Route path='/admin/deleteuser' element={<DeleteUser></DeleteUser>}></Route>
    <Route path='/hotels/reserve'element={<Reserve></Reserve>}></Route>
    
</Routes>
</div></div>
  </>
  );
}

export default App;
