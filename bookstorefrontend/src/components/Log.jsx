import React from 'react'
import Signup from './Signup'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
function Log() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit =async (data) => {
    const userInfo={
      email:data.email,
      password:data.password,
    }
    await axios.post("https://bookstoresignuptset.vercel.app//userdata/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Login Successfull");
        document.getElementById("my_modal_5").close();
        setTimeout(()=>{

          window.location.reload();
          localStorage.setItem("users",JSON.stringify(res.data.user));
        },1000)

      }

    }).catch((e)=>{
      if(e.response){
        console.log(e);
        toast.error("Error "+e.response.data.message);
        setTimeout(() => {
          
        }, 2000);
      }
    })
  };

  return (
    <>
    <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box bg-red-100">
    <h3 className="font-bold grid justify-center text-2xl">Login!</h3>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="mt-4 space-y-2">
      <span className="mx-4 grid md:text-xl">Email</span>
      <input type="email" placeholder="Enter your E-mail" className="md:w-96 w-72 py-2 px-3 border rounded-full outline-none mx-10" {...register("email", { required: true })} />
      {errors.email && <span className="text-red-500">E-mailis required</span>}
    </div>

    <div className="mt-4 space-y-2">
      <span className="mx-4 grid md:text-xl">Password</span>
      <input type="password" placeholder="Enter your Password" className="md:w-96 w-72 py-2 px-3 border rounded-full outline-none mx-10" {...register("password", { required: true })} />
      {errors.password && <span className="text-red-500">password is required</span>}
    </div>
    <div className="flex justify-around mt-8">
      <button className="bg-slate-700 rounded-md px-4 py-2 hover:bg-red-700 hover: text-white duration-300">Login</button>
      <p>New User? <Link to="/Signup" className="underline text-blue-800 cursor-pointer">Signup</Link></p>
     
    </div>
    </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
    </>
  )
}

export default Log
