import React from 'react';
import '../nav/nav.css'



function Nav() {
    return (
        <div className="navparentdiv">
            <ul className="nav-names">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/photography">Photography</a></li>
                <li><a href="/graphic-design">Graphic Design</a></li>
            </ul>
        </div>
    );
}

export default Nav;