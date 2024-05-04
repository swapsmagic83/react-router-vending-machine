import React,{useState} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Chips from "./Chips";
import Soda from "./Soda";
import Sardines from "./Sardines";
import NavBar from "./NavBar";
import Home from "./Home"


const VendingMachine = () =>{

    return (
        <div >
            
            <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
            
                <Route  path="/" element={<Home />}>Home</Route>
                <Route  path="/chips" element={<Chips />} >Chips</Route>
                <Route path="/soda" element={<Soda />}>Chips</Route>
                <Route path="/sardines" element={<Sardines />} >Sardines</Route>
            </Routes>
            </BrowserRouter>

        </div>
    )
}
export default VendingMachine