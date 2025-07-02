import React from 'react'
const styleCard={
 backgroundColor:"#f0f0f0",


};
function RestaurantCard(props) {
    console.log(props);
  return (
    <div className='res-card' style={styleCard}>

<img className="res-logo"alt='res-logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/a7212f44-c5fa-4d6a-a6d3-5dca7dee467e_1099688.jpg'/>
     <h3>{props.resName}</h3>
  <h4>{props.cuisine}</h4>
  <h4>4.4 stars</h4>
  <h4>38 minutes</h4>
    </div>
  )
}

export default RestaurantCard