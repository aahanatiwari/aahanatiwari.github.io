import React from 'react'
import Offer from './Offer.js'
import "../styles/Offers.css"

const Offers = ({offer}) => {
  return (
    <div className="offerSection">
        {offer.map((item,index)=>(
        <Offer key={item.image} index={index} src={item.image} link={item.url} />
        // key is a default attribute, uske bina error aata hai
        // so key is not passed as parameter in Offer.js wali file
        ))}
    </div>
  )
}

export default Offers