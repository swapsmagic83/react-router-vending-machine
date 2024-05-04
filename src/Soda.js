import React from "react";
import { useNavigate } from "react-router-dom";
const Soda = () =>{
    const navigate = useNavigate()
    return (
        <>
        <button onClick={()=> navigate('/')}>Go Back</button>
        <h3>Too much Sugarrrr</h3>
        <img src="https://media.istockphoto.com/id/459458845/photo/set-of-drink-cans.jpg?s=1024x1024&w=is&k=20&c=BWhTJLFaRB65m0NWSP9RDc05-JHwtAnRyZ3CtRE3FrA=" width={'500px'} height={'500px'}></img>
        </>
    )
}
export default Soda