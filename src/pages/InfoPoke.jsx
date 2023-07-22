import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import SeePokemon from '../components/SeePokemon'

const getData = async (url) => {
    const res = await fetch(url)
    return res.json()
}


function InfoPoke() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({})

    const awaitFunction = async (link) => {
        const pokemon = await getData(link)
        return pokemon
    }

    useEffect(async() => {
        awaitFunction(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => setPokemon(res))
        // getDataFirebase().then(res => setList(res))
    }, [])

console.log(pokemon.sprites?.front_default);

    return (
        <div>
            <SeePokemon 
            id = {pokemon.id}
            name = {pokemon.name}
            img = {pokemon.sprites?.front_default}
            habilities = {pokemon.habilities}
            movimientos = {pokemon.movimientos} />
        </div>
    )
}

export default InfoPoke