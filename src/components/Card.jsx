import React from 'react'
import { Link } from "react-router-dom";

function Card({number,name,img}) {

  return (
    <div className='flex flex-col radial-gradient items-center'>
        <p>{number} </p>
        <p>{name}</p>
        <img src={img} alt="" />
        <button className='rounded-full ... border-2 p-1 w-20'><Link to={`/infoPoke/${number}`}>Ver</Link> </button>
    </div>
  )
}

export default Card