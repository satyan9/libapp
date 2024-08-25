import React from 'react'
import Home from './home/Home'
import Course from './components/Course'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './course/Courses'
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
        <Route path="/Course" element={authUser?<Courses/>:<Navigate to="/Signup"/>}/>
        <Route path="/Signup" element={<Signup/>}/>
    </Routes>
    
    <Toaster/>
    </>
  )
}

export default App
