import React from 'react'
import banner from "../../public/banner.jpg"

function Banner() {
  return (
    <> 
    <div className="max-w-screen-2xl container ma-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
    <div className=" md:order-1 order-2 w-full md:w-1/2 mt-12 md:mt-32">
        <div className="space-y-12">
        <h1 className="md:text-4xl text-xl font-bold ">Welcome to <span className="text-red-700 text-opacity-90">BOOKSTORE</span> your one-stop destination for books across all genres</h1>
        <p className="text-xl"> 
        At <span className="text-red-700 text-opacity-90">BOOKSTORE</span> we believe that every book tells a story, and every story has the power to inspire. Our mission is to connect readers with the books they love, offering a curated selection that spans all tastes and interests. we have grown into a community hub for book lovers, offering more than just books we offer an experience.
        </p>
        
        <div className="join space-x-1">
  <input type="email" className="input input-error join-item" placeholder="Email" />
  <a href="mailto:satyanarayanareddykolagatla"><button className="btn join-item rounded-r-full text-black hover:bg-red-700 hover:text-white">Subscribe</button></a>
  
</div>

    </div>
    </div>
    <div className=" order-1 w-full md:w-1/2 ">
        <img src={banner} className="w-200px h-200px" alt=""/>
    </div>
    </div>
    </>
  )
}

export default Banner
