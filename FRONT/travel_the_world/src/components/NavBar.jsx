import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navBar">
            <nav>
                <ul>
                    <li>
                        <NavLink exact activeClassName="current" to="/">

                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="current" to="/galery">

                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="current" to="/comment">

                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="current" to="/allComments">

                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar; 