import React from 'react'

function Cards({item}) {
    console.log(item);
  return (
    <>
    <div className="mt-3 my-4 p-3">
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
  <figure>
    <img className="w-72 h-80"
      src={item.image}
      alt={item.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Book!<div className="badge bg-red-100 text-gray-700">NEW</div></h2>
    <p>{item.name}</p>
    <div className="card-actions flex justify-between">
        <div className="badge badge-outline">{item.price}</div>
        <button className="btn bg-zinc-900 text-white  hover:bg-red-700 hover:text-white duration-300 cursor-pointer rounded-full">Buy Now</button>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
