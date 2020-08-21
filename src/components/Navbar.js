import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './components.css';

const divStyle = {
    color: "white"
};

function Navigation() {

    return (
        <header className="page-header">
            <Navbar id="nav" expand="lg" role="navigation">
                <Navbar.Brand className="mb-0 h1" style={divStyle}>Jacob Thompson</Navbar.Brand>
                <Navbar.Toggle  type="button" aria-controls="basic-nav" aria-expanded="false" aria-label="Toggle navigation" />
                <Navbar.Collapse id="basic-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="button-home" href="/" style={divStyle}><i className="fa fa-home" aria-hidden="true"></i> Home</Nav.Link> 
                        <Nav.Link className="button-portfolio" href="/Project" style={divStyle}>Portfolio</Nav.Link>
                        <Nav.Link className="button-contact" href="/Contact" style={divStyle}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div id="header-line" className="py-1 mb-3"></div>
        </header>
    );
}

export default Navigation;