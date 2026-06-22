// useState lets us save and update data inside the component
import { useState } from 'react'

// this is the list of all pokemon from our data file
import pokemon from '../Data/Pokemon'

// this is the card component that shows the pokemon info
import PokeCard from './pokeCard'

const PokeSearch = () => {

  // searchTerm keeps track of whatever the user types in the input box
  const [searchTerm, setSearchTerm] = useState('')

  // result holds the pokemon we found, or null if we haven't searched yet
  const [result, setResult] = useState(null)

  // notFound tells us if the search came back with nothing
  const [notFound, setNotFound] = useState(false)

  const handleSearch = () => {
    // look through the pokemon array to find one whose name matches what the user typed
    // .trim() removes any accidental spaces, .toLowerCase() makes it case-insensitive
    const match = pokemon.find(
      (p) => p.name.toLowerCase() === searchTerm.trim().toLowerCase()
    )

    if (match) {
      // we found one! save it to result and make sure notFound is false
      setResult(match)
      setNotFound(false)
    } else {
      // nothing matched, clear any old result and show the not found message
      setResult(null)
      setNotFound(true)
    }
  }

  const handleKeyDown = (e) => {
    // if the user presses Enter, run the search instead of clicking the button
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search for a Pokémon..."
        value={searchTerm}
        // every time the user types a character, update searchTerm with the new value
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {/* clicking this button runs the search */}
      <button onClick={handleSearch}>Search</button>

      {/* only show this message if notFound is true */}
      {notFound && <p>No Pokémon found named "{searchTerm}".</p>}

      {/* only show the card if we have a result */}
      {result && <PokeCard pokemon={result} />}
    </div>
  )
}

// lets other files use this component
export default PokeSearch
