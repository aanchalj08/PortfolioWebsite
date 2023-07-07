import React from "react";
import Navbar from "../components/Navbar/Navbar"
import { Outlet } from "react-router-dom"

function RootLayout(){
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        </>
    )
}

export default RootLayout;