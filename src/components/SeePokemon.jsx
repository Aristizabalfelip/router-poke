import React from 'react'
import Lists from './Lists';
import { Link } from 'react-router-dom';

function SeePokemon({id,name,img,abilities}) {
  return (
    <div className='flex flex-col radial-gradient items-center h-2/4 p-5'>
        <p>{id}</p>
        <p>{name}</p>
        <img src={img} alt="" />
        {
          abilities?.map((abilities, i) => {
            return < Lists
            key={i}
            abilities = {abilities.ability.name}
            /> 
          })
        }
        <button className='rounded-full ... border-2 p-1 w-20' > <Link to={`/infoPoke/${id}/Movs`}>movs</Link></button>
    </div>

 
 
  )
}

export default SeePokemon

// {
//   background : radial-gradient(red 10px, yellow 30%, #1e90ff 50%);
//   padding-top: 20px;
//   padding-bottom: 10px; 
//   height: 147px;
//   width: 160px;
//   border-radius: 10px; 
// }