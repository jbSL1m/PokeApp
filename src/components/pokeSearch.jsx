import { useState } from 'react'

const PokeSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search for a Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button>Search</button>
    </div>
  )
}

export default PokeSearch