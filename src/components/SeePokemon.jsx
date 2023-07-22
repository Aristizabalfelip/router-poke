import React from 'react'

function SeePokemon({id,name,img,habilities,movimientos}) {

    
  return (
    <div>
        <p>{id}</p>
        <p>{name}</p>
        <img src={img} alt="" />

    </div>
  )
}

export default SeePokemon