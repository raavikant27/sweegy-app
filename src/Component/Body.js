import React from 'react'
import RestaurantCard from './RestaurantCard'


function Body() {
  
  return (
    <div className='body'>
      <div className='search'>Search</div>

     <div className="res-container">
      <RestaurantCard resName="Maghana foods" cuisine="Biryani,North Indian, Asian" stars="2-star" minites="25 minites"/>
       <RestaurantCard resName="KFC" cuisine="burgur , fast food" stars="3 star" minites="50 minites"/>
        <RestaurantCard resName="Maghana foods" cuisine="Biryani,North Indian, Asian" stars="2-star" minites="25 minites"/>
       <RestaurantCard resName="KFC" cuisine="burgur , fast food" stars="3 star" minites="50 minites"/>
     </div>
        
      </div>


    
  )
}

export default Body