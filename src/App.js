// import birdData from "./data/birds";
import { useState } from "react";
import BirdCards from "./BirdCards";
import "./App.css"

// import bonusItems from "./data/bonusItems";



function App () {
  const [ birdCard, setBirdCard ] = useState();
  setBirdCard({BirdCards})
 
  return (
    <div className="app-container">
      App Container
      <div className="aside">
        <div className="cart-container">
          {/* {Cart} */}
        </div>
        <div className="checkout-container">
          {/* {Checkout} */}
        </div>
      </div>
      <div className="bird-card-container">
        {BirdCards}
      </div>
    </div>
  );
 };

export default App;
