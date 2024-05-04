import React from "react";
import { Link } from "react-router-dom";

const NavBar =() => {
    return (
        <div style={{color:'blue'}}>
        <h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/chips">Chips</Link>
            <Link to="/soda">Sodas</Link>
            <Link to="/sardines">Sardines</Link>
        </nav>
        </h1>
        </div>
    )
}
export default NavBar