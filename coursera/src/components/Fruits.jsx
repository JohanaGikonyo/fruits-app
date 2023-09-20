import { useState } from "react"

function Fruits(props){
        
  return (
    <>
    <div>
    {props.fruits.map(f=><em>{" "+f.fruitName+" "} id:{" "+f.id}<br/></em>)}
    
    </div>
    </>
)
}
export default Fruits