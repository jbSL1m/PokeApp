// Fragment lets us group elements without adding an extra <div> to the page
import { Fragment } from 'react'

// This component receives a "pokemon" object as a prop from PokeSearch
const PokeCard = ({ pokemon }) => {

  // Destructuring pulls each field out of the pokemon object so we can use
  // them directly (e.g. "name" instead of "pokemon.name")
  const { id, name, types, image, description, weaknesses, stats } = pokemon

  return (
    <div className="poke-card">

      {/* Show the pokemon's official artwork */}
      <img src={image} alt={name} />

      {/* padStart(3, '0') formats the id so 1 becomes "001", 25 becomes "025", etc. */}
      <h2>#{String(id).padStart(3, '0')} {name}</h2>

      {/* Loop through the types array and render a badge for each one */}
      <div className="types">
        {types.map((type, i) => (
          // Fragment groups the space + span together without adding a real element.
          // "key" is required by React when rendering lists so it can track each item.
          <Fragment key={type}>
            {/* Add a space before every badge except the first (i === 0) */}
            {i > 0 && ' '}
            {/* type.toLowerCase() makes the class like "type-fire", "type-water", etc.
                so you can target each type with CSS */}
            <span className={`type type-${type.toLowerCase()}`}>{type}</span>
          </Fragment>
        ))}
      </div>

      {/* Plain text description from the pokemon data */}
      <p className="description">{description}</p>

      {/* Same pattern as types above — loop through weaknesses and badge each one */}
      <div className="weaknesses">
        <h4>Weaknesses</h4>
        {weaknesses.map((w, i) => (
          <Fragment key={w}>
            {i > 0 && ' '}
            <span className={`type type-${w.toLowerCase()}`}>{w}</span>
          </Fragment>
        ))}
      </div>

      {/* stats is an object, so we just access each property directly */}
      <div className="stats">
        <h4>Base Stats</h4>
        <ul>
          <li>HP: {stats.hp}</li>
          <li>Attack: {stats.attack}</li>
          <li>Defense: {stats.defense}</li>
          <li>Sp. Attack: {stats.specialAttack}</li>
          <li>Sp. Defense: {stats.specialDefense}</li>
          <li>Speed: {stats.speed}</li>
        </ul>
      </div>

    </div>
  )
}

// Makes this component available to import in other files (like PokeSearch)
export default PokeCard
