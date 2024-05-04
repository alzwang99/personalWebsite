'use strict'

import "../index.css"
import { NavLink } from "react-router-dom"
// import logo from "../assets/logo.png"
import logoBW from "../assets/logobwbig.png"
import Moon from "../assets/Moon.svg"

export default function Navbar() {
    return (
        <header className="bg-[#97abbe] w-screen">
            <nav className="flex items-center pl-8 pt-4 pb-4 h-28">
                <div className="">
                    <NavLink to="/" className="">
                        <img src={logoBW} alt="Logo" className=" w-[5rem]" />
                    </NavLink>
                </div>
                <div>
                    <ul className="flex gap-[15vw]">
                        <li>
                            <NavLink className="nav-link pl-[20vw]" to="/works">W<span>orks</span></NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/resume">R<span>esume</span></NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/about">A<span>bout</span></NavLink>
                        </li>
                        <li className="pr-10">
                            <button className="bg-[#97abbe] border-black">
                                <img src={Moon} alt="Yo" />
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}