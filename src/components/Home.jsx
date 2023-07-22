import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from './Card'

const getData = async (url) => {
    const res = await fetch(url)
    return res.json()
}

function Home() {

    const [arrPokemons, setArrPokemons] = useState([])

    const awaitFunction = async (link) => {
        const pokemons = await getData(link)

        const promise = await Promise.all(
            pokemons.results.map(async (pokemons) => {
                const dataPokemons = await getData(pokemons.url)
                return dataPokemons
            }
            )
        )
        setArrPokemons(promise);
    }

    useEffect(() => {
        awaitFunction(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`)
    }, [])

    return (
        <div className='flex gap-5 mt-3 ml-3 '>
         {
               arrPokemons.map((pokemon, i) => {
                return < Card
                key = {i}
                name = {pokemon.name}    
                number = {pokemon.id}
                img = {pokemon.sprites.front_default}
                 />
               })
         }
        </div>
    )
}

export default Home