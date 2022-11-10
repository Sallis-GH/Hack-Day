import React from 'react'
import { Link } from 'react-router-dom'
import pokeball_logo from '../images/pokeball_logo.png'

const Header = ({title}) => {
  return (
    <>
      <header className='main-header'>
        <img className='main-header__logo' src={pokeball_logo} alt="Pokeball logo" />
        <h1 className='main-header__title'> {title} </h1>
        <img className='main-header__logo' src={pokeball_logo} alt="Pokeball logo" />
        <Link className='main-header__pokedex--link link' to="/pokedex"> PokéDex </Link>
        <Link className='main-header__shiny-calculator--link link' to="/shinycalc"> Shiny Calculator </Link>
        <Link className='main-header__team-creator--link link' to="/teamcreator"> Your team </Link>
      </header>
    </>
  )
}

export default Header