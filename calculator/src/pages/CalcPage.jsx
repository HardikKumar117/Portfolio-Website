import { Button } from "../components/button";
import { Input } from "../components/input";
import { useState } from "react";

export const CalcPage=()=>{
    const [exp,setExp]=useState("");
    function takeInput(input){
        setExp(exp+input);
    }
    function evaluate(){
        const experssion=exp.replace(/\b0+(\d)/g,"$1");
      setExp(Number(String(eval(experssion))));
    }
    function ac(){
        setExp("");
        }
    return (<>
    <h1 className="bg-blue-600"></h1>
    <Input exp={exp} />
    <div ><Button text="("/><Button text=")" fn={takeInput} className="w-20 m-5"/>
    <Button text="%" fn={takeInput}/>
    <Button text="AC" fn={ac}/>
    </div>

    <div className="btns">
        <Button text="7" fn={takeInput}/>
        <Button text="8" fn={takeInput}/>
        <Button text="9" fn={takeInput}/>
        <Button text="/" fn={takeInput}/>
        </div>
    <div className="btns">
        <Button text="4" fn={takeInput}/>
        <Button text="5" fn={takeInput}/>
        <Button text="6" fn={takeInput}/>
        <Button text="*" fn={takeInput}/></div>
    <div className="btns">
        <Button text="1" fn={takeInput}/>
        <Button text="2" fn={takeInput}/>
        <Button text="3" fn={takeInput}/>
        <Button text="-" fn={takeInput}/>
        </div>
    <div className="btns">
        <Button text="0" fn={takeInput}/>
        <Button text="." fn={takeInput}/>
        <Button text="=" fn={evaluate}/>
        <Button text="+" fn={takeInput}/>
        </div>
    </>)
}