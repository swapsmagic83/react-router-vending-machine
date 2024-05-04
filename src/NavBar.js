import React from "react";
import { Link } from "react-router-dom";

const NavBar =() => {
    return (
        <div >
        <h1>
        <nav>
           <Link to="/chips">Chips</Link>
           <br></br>
            <Link to="/soda">Sodas</Link>
            <br></br>
            <Link to="/sardines">Sardines</Link>
        </nav>
        </h1>
        </div>
    )
}
export default NavBar