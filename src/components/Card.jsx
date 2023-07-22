import React from 'react'
import { Link } from "react-router-dom";

function Card({number,name,img}) {
  return (
    <div>
        <p>{number} </p>
        <p>name: {name}</p>
        <img src={img} alt="" />
        <button><Link to={`/infoPoke/${number}`}>Ver</Link> </button>
    </div>
  )
}

export default Card