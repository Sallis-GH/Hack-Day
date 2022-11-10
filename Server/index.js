import fetch from "node-fetch";
import express from 'express';
import bodyParser from 'body-parser';


const app = express();

const fetchData = async url => {
  let data = await fetch(url)
  return data.json();
}

app.use(bodyParser.json());

app.get('/api/pokemon', async (req, res) => {
  const data = await fetchData('https://pokeapi.co/api/v2/pokedex/1')
  res.json(data.pokemon_entries);
})


app.get('/api/pokemon/:id', async (req, res) => {
  const data = await fetchData('https://pokeapi.co/api/v2/pokedex/1')
  const searchInput = req.params.id.toLowerCase();
  try {
    if (req.params.id.match(/^[\d]+$/)) {
      const pokemonData = data.pokemon_entries.filter(pokemon => pokemon.entry_number == searchInput)[0]
      const pokemonImage = await fetchData(`https://pokeapi.co/api/v2/pokemon/${pokemonData.pokemon_species.name}`)
      const pokemonResults = { ...pokemonData, ...pokemonImage };
      return res.send(pokemonResults)
    }
    const pokemonData = data.pokemon_entries.filter(pokemon => pokemon.pokemon_species.name.includes(searchInput))[0]
    const pokemonImage = await fetchData(`https://pokeapi.co/api/v2/pokemon/${pokemonData?.pokemon_species.name}`)
    const pokemonResults = { ...pokemonData, ...pokemonImage };
    return res.send(pokemonResults)

  } catch (error) {
    res.json(null);
    console.log(error, 'got an error')
  }
})

app.listen(5000, () => {
  console.log('app is listening to port 5000');
});
