import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {
    const [authUser,setAuthUser]=useAuth();
    const handleLogout=()=>{
        try{
            setAuthUser({
                ...authUser,
                users:null
            })
            localStorage.removeItem("users")
            toast.success("Logout Successfully");
        setTimeout(()=>{

          window.location.reload();
 
        },2000)
        } catch(e){
            toast.error("Error "+e.message)
            setTimeout(() => {
                
            }, 2000);

        }
    }
  return (
    <div>
        <button className="bg-zinc-900 px-3 py-2 rounded-md text-white hover:bg-red-700 hover:text-white duration-300 cursor-pointer"onClick={handleLogout} >Logout</button>
    </div>
  )
}

export default Logout
