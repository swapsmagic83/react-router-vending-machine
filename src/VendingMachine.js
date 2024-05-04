import React,{useState} from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import Chips from "./Chips";
import Soda from "./Soda";
import Sardines from "./Sardines";
import NavBar from "./NavBar";
import Home from "./Home"


const VendingMachine = () =>{
    const NavBarWithRoute = () =>{
        const location = useLocation()
        const showNavBar = location.pathname === '/'
        return showNavBar ? <NavBar></NavBar> : null
       
    }
    return (
        <div >
            <BrowserRouter>
            <NavBarWithRoute></NavBarWithRoute>
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