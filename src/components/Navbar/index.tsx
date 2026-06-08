import React from "react";
import "./Navbar.css"

function Navbar ({theme, toggle}) {
    return (
        <div className={`navbar ${theme}`}>
        <h1
            className="navbar-h1"
        >
            Navbar
        </h1>
        <button
            onClick={toggle}
            className="navbar-button"
        >
            {theme}
        </button>
        </div>
    )
}

export default Navbar;