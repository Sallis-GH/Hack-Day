import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Pokedex = () => {

  const [pokedexEntries, setPokedexEntries] = useState(null);

  useEffect(() => {
    fetch('/api/pokemon')
      .then(data => data.json())
      .then(data => setPokedexEntries(data))
  }, [])

  return (
    <>
      <Header title={'PokéDex'} />
          <article className='pokedex-container'>
            {pokedexEntries?.map((pokemon, index) => <div key={index} className="pokemon-entry-container"><h3>{`${index+1}#\n ${pokemon.pokemon_species.name}`}</h3></div>)}
          </article>
      <Footer />
    </>
  )
}

export default Pokedex