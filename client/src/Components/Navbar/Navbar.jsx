import React, { useState } from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate, BsGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import logo from '../../assets/Images/logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {

    const [active, setActive] = useState(false);
    const showNavbar = () => {
        if (active) {
            setActive(false)
        } else {
            setActive(true)
        }
    }
    return (
        <div className="navBar flex">
            <div className="navBarOne flex">
                <div>
                    <SiConsul className="icon" />
                </div>
                <div className="none flex">
                    <li className="flex">
                        <BsPhoneVibrate className="icon" /> Support
                    </li>
                    <li className="flex">
                        <AiOutlineGlobal className="icon" /> Languages
                    </li>
                </div>
                <div className="atb flex">
                    <span className="flex"><Link to="/login">Sign in</Link></span>
                    <span className="flex">Sign Out</span>
                </div>
            </div>
            <div className="navBarTwo">
                <div className="logoDiv">
                    <img src={logo} className="logo" />
                </div>
                <div className={`navBarMenu ${active ? 'showNavbar' : ''}`}>
                    <ul className="menu flex">
                        <li className="listItem">Home</li>
                        <li className="listItem">About</li>
                        <li className="listItem">Offers</li>
                        <li className="listItem">Seats</li>
                        <li className="listItem">Destinations</li>
                    </ul>
                    <button className="btn flex btnOne">Contact</button>
                </div>
                <div onClick={showNavbar} className="toggleIcon">
                    <BsGrid3X3GapFill className="icon" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
