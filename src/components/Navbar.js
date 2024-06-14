import React, { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <header>
                <div className="container" id="Home">
                    <img src="assets/Frame.png" alt="logo" className="frame" />
                    <nav className={` navbar ${open ? "active" : ""}  `}>
                        <ul className="nav-items ">
                            <li className="nav-item selected ">
                                <a href="home.html">Home</a>
                            </li>
                            <li onClick={() => setOpen(false)} className="nav-item">
                                <a href="#about">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a href="#pricing">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a href="#features">Features</a>
                            </li>
                           
                        </ul>
                    </nav>
                    <button className=" nav-btn">Download</button>
                    <div onClick={() => setOpen(!open)} >

                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;