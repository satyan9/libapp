import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios";

function Freebook() {
    // Filter books that are in the "free" category
    
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      const[book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res=await axios.get("https://bookstoreapi-flwe.vercel.app/book");
        
        
        console.log(res.data)
        setBook(res.data.filter((data) => data.category === "free"));
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

        <div>
        <h1 className="font-semibold text-xl pb-2">Free Offerd Books </h1>
        <p>
        Whether you're looking for the latest bestsellers, classic literature, or niche non-fiction, we have something for every reader
        </p>
        </div>
        
       <div>
      <Slider {...settings}>
        {book.map((item)=>(
           <Cards item={item} key={item.id} /> 
        ))}
      </Slider>
    </div>
    </div>
       </>
    );
}

export default Freebook;
