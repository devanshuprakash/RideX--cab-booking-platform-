import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainSingup from './pages/CaptainSingup';
import Captainlogin from './pages/Captainlogin';
import Price from './pages/Price';

const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/captain-login' element={<Captainlogin/>}/>
        <Route path='/captain-signup' element={<CaptainSingup/>}/>
        <Route path='/price' element={<Price/>}/>
      </Routes>
       </div>
  )
}

export default App;
 