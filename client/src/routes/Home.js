import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Searchbar from '../components/Searchbar'


const Home = () => {

  const [displayedPokemon, setDisplayedPokemon] = useState(null);

  const getSearch = (text) => {
    fetch(`/api/pokemon/${text}`)
    .then(data => data.json())
    .then(data => {
      if (data === null) {
        throw new Error('Recieved no data');
      }
      setTimeout(() => {
        setDisplayedPokemon({
          pokemonName: data?.pokemon_species?.name,
          pokemonImage: data?.sprites.front_default,
          pokemonAbilities: data?.abilities,
        })
      }, 3000)
    })
    .catch(err => Error('Error:', err))
  }

  return (
    <>
      <Header title={'PokéApp'} />
      <Searchbar getSearch={getSearch} />
      <section className='pokedex-entry-container'>
        <img className={displayedPokemon ?'pokedex-entry-container__image' : null} src={displayedPokemon ? displayedPokemon?.pokemonImage : null} alt={displayedPokemon?.pokemonImage} />
        <h2 className='pokedex-entry-container__text'>{displayedPokemon ? displayedPokemon?.pokemonName : 'Search for a Pokémon'}</h2>
      </section>
      <section className='pokedex-ability-section'>
        <div className={displayedPokemon?.pokemonAbilities ? 'pokedex-ability-container' : null}>
        <h2 className='pokedex-ability__title'>{displayedPokemon?.pokemonAbilities ? `${displayedPokemon.pokemonAbilities.length > 1 ? 'Abilities:' : 'Ability:'}` : null}</h2>
        {displayedPokemon?.pokemonAbilities.map((ability, index) => <p key={index} className="pokedex-ability__text">{ability.ability.name}</p>)}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home