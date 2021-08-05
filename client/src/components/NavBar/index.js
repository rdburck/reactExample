import React from 'react';

const NavBar = () => {
    return (
    <nav>
        <div class="nav-wrapper">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/quiz">Quiz</a></li>
        </ul>
        </div>
    </nav>
    )
}

export default NavBar;

