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
                    <Nav.Link to='/linkedin'>
                        <il>LinkedIn</il>
                    </Nav.Link>
                    |
                    <Link to='/resume'>
                        <il>Resume</il>
                    </Link>
                    |
                    <Link to='/aboutme'>
                        <il>AboutMe</il>
                    </Link>
            
        </nav>
    )
}

export default NavBar;