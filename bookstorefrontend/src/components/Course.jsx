import React, { useEffect, useState } from 'react'
import Cards from "../components/Cards"
import {Link} from 'react-router-dom'
import axios from "axios";

function Course() {
  const[book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res=await axios.get("https://bookstorebackend-ys71.onrender.com/book");
        console.log(res.data)
        setBook(res.data)
      }
      catch(e){
        console.log(e);
      }

    };
    getBook();
  },[])

  return (
    <>
    <div className="max-w-screen-2xl container ma-auto md:px-20 px-4"> 
    <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">we`re delighted to have you here! :)</h1>
        <p className="mt-12">
        Discover our extensive collection of books. Filter by genre, author, or title to find exactly what you are looking for. From timeless classics to contemporary hits, our catalog is regularly updated to ensure you have access to the latest and greatest in the literary world
        </p>
        <Link to="/" className="duration-1000">
        <button className=" mt-6 btn rounded-full bg-red-100 text-black hover:bg-red-700 hover:text-white"> Back</button>
        </Link>
    </div>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
        {
            book.map((item)=>(
                <Cards key={item.id} item={item}/>
            ))
        }
    </div>
    </div>
    </>
  )
}

export default Course
