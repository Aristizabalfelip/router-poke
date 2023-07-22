import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom';
import SeePokemon from '../components/SeePokemon'

const getData = async (url) => {
    const res = await fetch(url)
    return res.json()
}

function InfoPoke( {setMovs}) {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({})

    const awaitFunction = async (link) => {
        const pokemon = await getData(link)
        return pokemon
    }

    useEffect(() => {
        awaitFunction(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => setPokemon(res)) 
    }, [])

    setMovs(pokemon.moves)

    return (
        <div className='flex justify-center gap-20 items-center mt-3'>   
            <SeePokemon 
            id = {pokemon.id}
            name = {pokemon.name}
            img = {pokemon.sprites?.front_default}
            abilities = {pokemon.abilities}
            movimientos = {pokemon.moves} />
            < Outlet/>
        </div>
    )
}

export default InfoPoke