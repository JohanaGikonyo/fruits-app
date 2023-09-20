
function Module(){
    const darkModeOn=true;
    const darkMode=<h1>Dark Mode is on</h1>
    const lightMode=<h1>Light Mode is on</h1>
    const Guese=()=>{
    
        let userinput=prompt('Type a guese number between 1 and 10');
    let randomnumber=Math.floor(Math.random()*3)+1;
    console.log(randomnumber)
        alert(`Your guese is: ${userinput} that is wrong and Computer number is: ${randomnumber} which is write!`)
}
    
return(
    <div>
        {darkModeOn? darkMode:lightMode}
        
        <button onClick={Guese}>Click to try a game</button>
    </div>
);
}
export default Module