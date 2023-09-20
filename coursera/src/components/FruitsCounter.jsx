function FruitsCounter(props){
return(
    <>
<h2>The number of Fruits is: {props.fruits.length}</h2>
<h3>This is an <em>{props.fruits[1].fruitName}</em>, and its id is: <em>{props.fruits[1].id}</em></h3>
</>
)
}
export default FruitsCounter