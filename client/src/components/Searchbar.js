import React, { useRef } from 'react'
import sound from '../audio/whosthatpokemon.mp3'
const audio = new Audio(sound);

const Searchbar = ({ getSearch }) => {

  const searchText = useRef();
  const handleGetSearch = () => {
    if (!searchText.current.value) return;
    getSearch(searchText.current.value)
    searchText.current.value = null;
  }

  const playAudio = (url) => {
    if (!searchText.current.value) return;
      if(!audio.paused) {
        return;
      }
      audio.play()
  }

  return (
    <form className='search'>
      <input ref={searchText} className='search--input' type="text" placeholder="Who's that pokemon?" required />
      <button className='search--btn' onClick={(e) => {
        e.preventDefault();
        playAudio(sound);
        handleGetSearch();
      }} >Search</button>
    </form>
  )
}

export default Searchbar