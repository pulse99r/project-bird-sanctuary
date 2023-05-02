import BirdCards from "./BirdCards";
import App from "./App";

const Cart = (BirdCards) => {
  for (let i=0; i<BirdCards.length; i++){
    setBirdCard(BirdCards[i])
    return(  
      <>
        <h1>Cart</h1>
        <h2>Discount</h2>
        <h2>Total</h2>
        <ol>
          <li></li>
          <li></li>
        </ol>

      </>
    )
  }
}
export default BirdCards;