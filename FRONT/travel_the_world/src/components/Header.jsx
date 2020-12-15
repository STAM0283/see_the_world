import React from "react";
import travel from "../images/travel.png";
import comment from "../images/comment.png";
import admin from "../images/admin.png"; 
import users from "../images/users.png"


const Header = () => {
    return(
        <div className="header">
            <img src={travel} alt="Logo-App" style={{width: "60px"}} id="Logo-App" />
            <h1>Voyage Virtuel</h1>
            <div className="space-admin">
                <img src={comment} alt="icone-comment" />
                <img src={admin} alt="icone-admin" />
                <img src={users} alt="icone-users" />
            </div>
        </div>
    )
}

export default Header; 