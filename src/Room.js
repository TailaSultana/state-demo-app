import React from 'react';
import './Room.css';

function Room(){

const [isLit, setLit] = React.useState(false);
const [currentTemp, setTemp] = React.useState(72);

return(
    
   <div className = {`room ${isLit ? "lit" : "dark"}`}>
   
    This room is {isLit? "lit" : "dark"}
    <br/>
    The room temperature is {currentTemp}
       <br/>
       <button onClick = {()=>setLit(!isLit)}> Toggle Light</button>
       <br/>
       <button onClick = {()=>setLit(true)}> ON</button>
       <br/>
       <button onClick = {()=>setLit(false)}> OFF</button>
       <br/>
       <button onClick = {()=>setTemp(currentTemp+1)}> +</button>
       
       <button onClick = {()=>setTemp(currentTemp-1)}> -</button>
   </div>
);
}

export default Room;