import react from 'react'
import pokemon from '../assets/pokemon'

const PokeCard = ({ name, image }) => {
  return (
    <div className="PokeCard">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  )
}

export default PokeCard