import React from 'react';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../utilities/logo1.png'
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, handleSignOut } = useAuth();
    const activeStyle = {
        color: 'coral',
        fontWeight: '900'
    }
    return (
        <div>
            <Navbar collapseOnSelect bg="light" variant="light" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand className="nav-brand me-5">
                        <NavLink to="/home">
                            <img className="img-fluid" src={logo} alt="" />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="mx-2 mt-2 text-decoration-none" activeStyle={activeStyle} to="/home">Home</NavLink>
                            <NavLink className="mx-2 mt-2 text-decoration-none" activeStyle={activeStyle} to="/about">About</NavLink>
                            <NavLink className="mx-2 mt-2 text-decoration-none" activeStyle={activeStyle} to="/contact">Contact</NavLink>
                            {
                                user?.email && <NavDropdown className="mx-2 text-decoration-none" title="Manage" activeStyle={activeStyle}>
                                    <NavLink className="mx-2 py-1 d-block text-decoration-none" activeStyle={activeStyle} to="/add/package">Add Package</NavLink>
                                    <NavLink className="mx-2 py-1 d-block text-decoration-none" activeStyle={activeStyle} to="/manage">Manage Packages</NavLink>
                                    <NavLink className="mx-2 py-1 d-block text-decoration-none" activeStyle={activeStyle} to="/myPackages">My Packages</NavLink>
                                </NavDropdown>
                            }
                        </Nav>
                        <Nav>
                            {
                                !user?.email ? <NavLink activeStyle={activeStyle} className="mx-2 text-decoration-none fw-bold" to="/registerLogin">Register/Sign In</NavLink>
                                    :
                                    <div className="mx-3 d-flex align-items-center justify-content-center">
                                        <span>{user?.displayName}</span>
                                        <Button onClick={handleSignOut} className="mx-2 px-3 rounded-pill" variant="danger" size="sm">Sign Out</Button>
                                    </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;