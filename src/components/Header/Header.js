import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../utilities/logo1.png'

const Header = () => {
    const activeStyle = {
        color: 'red',
        fontWeight: '700'
    }
    return (
        <div>
            <Navbar collapseOnSelect bg="light" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="nav-brand me-5">
                        <img className="img-fluid" src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="mx-2 text-decoration-none" activeStyle={activeStyle} to="/home">Home</NavLink>
                            <NavLink className="mx-2 text-decoration-none" activeStyle={activeStyle} to="/about">About</NavLink>
                            <NavLink className="mx-2 text-decoration-none" activeStyle={activeStyle} to="/add/package">Add Package</NavLink>
                            <NavLink className="mx-2 text-decoration-none" activeStyle={activeStyle} to="/manage">Manage Packages</NavLink>
                            <NavLink className="mx-2 text-decoration-none" activeStyle={activeStyle} to="/myPackages">My Packages</NavLink>
                        </Nav>
                        <Nav>
                            {/* <NavLink className="mx-2 text-decoration-none" activeStyle={activeStyle} to="/registerLogin">Register</NavLink> */}
                            <NavLink className="mx-2 text-decoration-none" activeStyle={activeStyle} to="/registerLogin">Login</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;