import birdCards from "./data/birds";

const BirdCards = (birdCard) => {
  for (let i=0; i<birdCard.length; i++){
    return(  
      <>
        <h1>{birdCard.name}</h1>
        <h1>{birdCard.amount}</h1>
        <img src={birdCard.img} alt="some animal" />
        <button onClick={Checkout}>Adopt</button>
      </>
    )
  }
}
export default BirdCards;