import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import logo from '../../assets/img/logo.png'
const Header = () => {
    return ( <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
                <Navbar.Brand>
                    <img src={logo} alt='logo' width="50px"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/Dashboard">Tickets</Nav.Link>
                    <Nav.Link href="/Dashboard">Logout</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
         </Navbar>
    )
}

export default Header