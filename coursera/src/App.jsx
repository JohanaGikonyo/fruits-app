import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css"
import Module from "./components/Module";
import Fruits from './components/Fruits';
import FruitsCounter from './components/FruitsCounter.jsx';

function App() {
const hour=new Date().getHours()
function Greetings(){
  let greeting=""
if(hour<18){
   greeting=<h2>Good morning</h2>
}
else if(hour==18){
  greeting=<h2>Good afternoon</h2>
}
else{
  greeting=<h2>Good evenning</h2>
}
return greeting;
}

function counting(){
  let num=0;
  return <h1>{num+1}</h1>
}
  const [showMenu, setShowMenu]=useState('Johana');//this is a useState function, and array destrucuring
function changeHandler(x)//reads the latest value from the browser and calls the setShowmenu
//to update the lacal state of showMenu
{
setShowMenu(x.target.value);//the value you have now inputted. it must be in another function to update it, and also use a button
}

const [fruits] = useState([
  {fruitName: 'apple', id: 1},
  {fruitName: 'apple', id: 2},
  {fruitName: 'plum', id: 3},
])
  return (
    <div>
    {Greetings()}
    <input value={showMenu} onChange={changeHandler}/>
    <p>You typed: {showMenu}</p>
    <button onClick={()=>setShowMenu('hello')}>Reset</button>
      <Module />


<div className="Apps">
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
    
<button onClick={counting}>click to gerenate numbers</button>
    </div>
  )
}

export default App
