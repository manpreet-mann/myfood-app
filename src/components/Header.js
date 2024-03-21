import React from "react";
import { Link } from "react-router-dom";
function Header() {
    return (
        <div className="header">
            <ul>
                <li>
                    <Link to='/'>Gourmet au Catering</Link>
                </li>
            </ul>
            <ul className="header-right">
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/menu'>Menu</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    );
}
export default Header;