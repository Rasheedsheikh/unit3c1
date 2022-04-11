import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem";
import CartButton from "./CartButton";


const GroceryDetails = ()=>{
    // var data=[
    //     {
    //         soImg: "https://i.imgur.com/dQraLlC.png"
    //     },
    // ]
console.log(data);
// const {id,title,imgURL,mrp,sellingPrice,discount}=props

    return(
        <>
        <h1>Groceries</h1>
        <div className="container"  key={ data.id}>
          
           
            {/* {Groceries.map  {/* map through the data and display the cards */}
            {
        data.map( (datas,index) => {
            return <div className="child" key={ index }>
                
    
   <img  key={index} src={datas.imgURL}/> 
<br/>

                {datas.title},
                <br/>
               
                {datas.price}
                <br/> {datas.sellingPrice} ,{datas.discount}
                {/* <GroceryItem source={datas.soImg}/> */}
                <CartButton/>
                </div> 
                

         })}
     
    </div>
    </>
    )
}
export default GroceryDetails