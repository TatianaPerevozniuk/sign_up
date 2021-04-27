import logo from "../assets/images/header/Logo.svg";
import React from "react";
import {Link} from "react-router-dom";

const links = [
    {
        to: '/sign_up/',
        label: 'Home'
    },
    {
        to: '/sign_up/sign_in',
        label: 'Sign In'
    },
    {
        to: '/sign_up/sign_up',
        label: 'Sign Up'
    },
];

export const Navigation = () => (
    <nav className='container nav_header'>
        <div className="logo">
            <img src={logo} aria-hidden="true" alt=""/>
        </div>
        <nav className="navigation">
            {links.map(link =>
                <a className='nav_link' key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                </a>
            )}
        </nav>

    </nav>
)