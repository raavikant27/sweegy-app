import React from 'react'
import RestaurantCard from './RestaurantCard'


function Body() {
  
  return (
    <div className='body'>
      <div className='search'>Search</div>

     <div className="res-container">
      <RestaurantCard resName="Maghana foods" cuisine="Biryani,North Indian, Asian"/>
       <RestaurantCard resName="KFC" cuisine="burgur , fast food"/>
      
     </div>
        
      </div>


    
  )
}

export default Body