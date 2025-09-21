import { useState } from "react"
import { Button } from "../buttons/Button";

function changeColor()
{
    const colors=["green","blue","brown","black"];
    const val=Math.floor(Math.random()*4);
    setColor(colors[val]);
}
export const Bg=()=>{
    const [color,setColor]=useState();
    function changeColor()
{
    const colors=["green","blue","brown","black"];
    const val=Math.floor(Math.random()*4);
    setColor(colors[val]);
}
 return(<>
 <h1 style={{backgroundColor: color}}>Hello</h1>
 <Button text={"change color"} fn={changeColor}/>
 </>)
}