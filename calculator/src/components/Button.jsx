export const Button=({text, fn})=>{
return <button className="p-5 m-2" onClick={()=>{fn(text)}}>{text}</button>
}

