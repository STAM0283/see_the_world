import React from "react";
// import NavBar from "./NavBar"; 
import travel from "../images/travel.png"; 


const Header = () => {
    return(
        <div className="header">
            <img src={travel} alt="Logo-App" style={{width: "60px"}} />
            <h1>VOYAGE VIRTUEL</h1>
        </div>
    )
}

export default Header; 