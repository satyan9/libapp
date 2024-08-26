import React from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './cou/Courses'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider.jsx"





function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/course" element={authUser?<Courses/>:<Navigate to="/Signup"/>}/>
        <Route path="/Signup" element={<Signup/>}/>
    </Routes>
    
    <Toaster/>
    </>
  )
}

export default App
