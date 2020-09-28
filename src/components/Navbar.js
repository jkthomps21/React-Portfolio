import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './components.css';
import Sparkles from './Sparkles';
import { motion } from 'framer-motion';

const divStyle = {
    color: "white"
};

function Navigation() {

    const [expanded, setExpanded] = useState(false);




    return (
        <header className="page-header">
            <Navbar id="nav" className="navbar-dark" expand="lg" expanded={expanded} role="navigation">
                <Navbar.Brand className="mb-0 h1" style={divStyle}><Sparkles>Jacob Thompson</Sparkles></Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} type="button" aria-controls="basic-nav" aria-expanded="false" aria-label="Toggle navigation" />
                <Navbar.Collapse id="basic-nav">
                    <Nav className="mr-auto">
                        <motion.div whileHover={{ scale: 1.01 }}>
                            <Nav.Link onClick={() => setExpanded(!expanded)} className="button-home" href="/" style={divStyle}><i className="fa fa-home" aria-hidden="true"></i> Home</Nav.Link> 
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.01 }}>
                            <Nav.Link onClick={() => setExpanded(!expanded)} className="button-portfolio" href="/#/project" style={divStyle}>Portfolio</Nav.Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.01 }}>
                            <Nav.Link onClick={() => setExpanded(!expanded)} className="button-contact" href="/#/contact" style={divStyle}>Contact</Nav.Link>
                        </motion.div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div id="header-line" className="py-1 mb-3"></div>
        </header>
    );
}

export default Navigation;