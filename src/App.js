
import './App.css';

import Header from './Component/Header';
import Body from './Component/Body';



/**
 * 
 * Header 
 *   - logo
 *   - Nav Items
 * body
 *   -search
 *   - RestaurantContainer
 *      -RestaurantCard

 *   
 * footer
 *    copyright
 *    link
 *    Adress
 *    contact
 * 
 * 
 * 
 * 
 */

function App() {
  return (
    <div className="App">
      
      
      <Header/>

      <Body/>
      
    </div>
  );
}

export default App;
// react element ?
//react element not a html element, basically react element at the eend it is abject when reader to this into dom right it become a htmlelement 
//const heading=React.createElement('h1',{id:heading},"Namaste react");