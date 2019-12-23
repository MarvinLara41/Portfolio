import React from 'react';
import './style.css';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
function NavBar() {
    return(
        <nav className="links">
                     <Link to='/'>
                        <il>Home</il>
                    </Link>
                    |
                    <Nav.Link href='https://github.com/MarvinLara41?tab=repositories'>
                        <il>GitHub</il>
                    </Nav.Link>
                    |
                    <Link to='/resume'>
                        <il>Resume</il>
                    </Link>
                    |
                    <Link to='/aboutme'>
                        <il>AboutMe</il>
                    </Link>
                    |
                    <Nav.Link href='https://docs.google.com/document/d/1JmiAdZbprHIwAqzuJB1N3w7Fe3rhv2wuVF2jerhAoOI/edit?usp=sharing'>
                        <il>Resume Link</il>
                    </Nav.Link>
            
        </nav>
    )
}

export default NavBar;