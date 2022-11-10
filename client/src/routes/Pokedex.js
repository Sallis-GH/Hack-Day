import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Pokedex = () => {

  const [displayedPokemon, setDisplayedPokemon] = useState(null);

  const getSearch = (text) => {
    fetch(`/api/pokemon/${text}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      setDisplayedPokemon({pokemonName: data?.pokemon_species?.name, pokemonImage: data.sprites.front_default, pokemonAbilities: data.abilities});
    })
  }

  return (
    <>
      <Header title={'PokéDex'} />
      <Footer />
    </>
  )
}

export default Pokedex