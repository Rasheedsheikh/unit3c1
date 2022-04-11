import { useState } from "react";
const handleAdd=()=>{
  
}
// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    const[count,setCount]=useState(0)
    const handleInc=()=>{
      setCount(count+1)
    }
{}
    const handleDec=()=>{
      setCount(count-1)
    }
  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div>
    <button onClick={handleAdd}>add to cart</button>
      <button onClick={handleDec}>-</button>
      <p className="count-item">{count}</p>
      <button onClick={handleInc}>+</button>
  </div>
  </>;
};
export default CartButton
