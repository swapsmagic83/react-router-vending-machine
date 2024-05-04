import React from "react";
import { useNavigate } from "react-router-dom";

const Chips = () =>{
    const navigate = useNavigate()
    return (
        <>
        <button onClick={()=> navigate('/')}>Go Back</button>
        <h3>Nom Nom Nom</h3>
        <img src="https://media.istockphoto.com/id/174634598/photo/chips-spilling-out-of-an-open-bag.jpg?s=1024x1024&w=is&k=20&c=5BRoShF5dMTv_jeZN0-gIQh8aX9kXdfbWWSnauTD0RQ=" width={'400px'} height={'400px'}></img>
        </>
    )
}
export default Chips