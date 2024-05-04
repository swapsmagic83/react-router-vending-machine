import React from "react";
import { useNavigate } from "react-router-dom";
const Sardines = () =>{
    const navigate = useNavigate()
    return (
        <>
        <button onClick={()=> navigate('/')}>Go Back</button>
        <h3>Sardines!!! You dont eat sardines. They Eat you!!</h3>
        <img src="https://media.istockphoto.com/id/183843660/photo/close-up-of-fresh-sardines-grouped-together.jpg?s=1024x1024&w=is&k=20&c=Z_le5hqwAJF1S_j-02p6Hl3KRGHcIRUypBsypmVLQHA=" width={'400px'} height={'400px'}></img>
        </>
    )
}
export default Sardines