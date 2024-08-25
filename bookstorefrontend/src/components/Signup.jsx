import React from 'react'
import { Link, useLocation,useNavigate } from 'react-router-dom'
import Log from './Log'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

function Signup() {
  const location=useLocation();
  const navigate=useNavigate()
  const from =location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit =async (data) => {
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password,
    }
    await axios.post("http://localhost:5000/userdata/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Signup Successfull");
        navigate(from, {replace:true});
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        
      }
      localStorage.setItem("users",JSON.stringify(res.data.user));
    }).catch((e)=>{
      if(e.response){
        console.log(e);
        toast.error("Error "+e.response.data.message);
      }
    })
  };
  return (
<>
<div>
      <div  className="flex  h-screen items-center justify-center  modal-bottom sm:modal-middle dialog-box bg-emerald-900">
  <div className="modal-box bg-red-100 border-[2px] shadow-md p-2 w-96 rounded-md">
    <h3 className="font-bold grid justify-center text-2xl ">Signup</h3>
    <form method="dialog" onSubmit={handleSubmit(onSubmit)} >
    <div className="mt-4 space-y-2">
      <span className="mx-4 grid md:text-xl">Name</span>
      <input type="text" placeholder="Enter your E-mail" className="md:w-96 w-72 py-2 px-3 border rounded-full outline-none mx-10" {...register("fullname", { required: true })} />{errors.fullname && <span className="px-4 text-red-500">full Name is required</span>}
    </div>

    <div className="mt-4 space-y-2">
      <span className="mx-4 grid md:text-xl">Email</span>
      <input type="email" placeholder="Enter your E-mail" className="md:w-96 w-72 py-2 px-3 border rounded-full outline-none mx-10" {...register("email", { required: true })} />{errors.email && <span className="px-4 text-red-500">E-mail is required</span>}
    </div>

    <div className="mt-4 space-y-2">
      <span className="mx-4 grid md:text-xl">Password</span>
      <input type="password" placeholder="Enter your Password" className="md:w-96 w-72 py-2 px-3 border rounded-full outline-none mx-10" {...register("password", { required: true })}/>{errors.password && <span className="px-4 text-red-500">password is required</span>}
     
    </div>
    <div className="flex justify-around mt-8">
      <button className="bg-slate-700 rounded-md px-4 py-2 hover:bg-red-700 hover: text-white duration-300">SignUP</button>
      <p className="text-xl">Already exist ?<button  className="underline px-1 text-blue-800 cursor-pointer" onClick={()=>
        document.getElementById('my_modal_5').showModal()
      }>Login
      </button>{" "}
      <Log/>
      </p>
     
    </div>
    </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
      </form>
    </div>
  </div>
</div>
    </div>
</>
  )
}

export default Signup
