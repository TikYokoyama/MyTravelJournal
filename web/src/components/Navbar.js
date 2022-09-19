import React from "react"

export default function Navbar(){
    return(
        <nav>
            {/* <img className="nav--icon" src="./globe.png" alt="globe"/> */}
            <i className="nav--icon" class="fa-solid fa-earth-americas"></i>
            <h3 className="nav--title">my travel journal.</h3>
        </nav>
    )
}