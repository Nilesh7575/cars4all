import React from 'react'
import './header.css'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import CallIcon from '@material-ui/icons/Call';
import { Badge } from '@material-ui/core';



const Header = () => {
    return (
        <>
            <Navbar className="navbaar" expand="sm">
                <Container>
                    <div className="nav-logo">
                        <img src="https://www.cars4all.in/static/media/CAR4ALL%20logo3.61870fc2.png" height="37" width="80" alt="" />
                        <Navbar.Brand className="navbar-brand" href="#home">CARS4ALL</Navbar.Brand>
                    </div>
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Badge badgeContent={"new"} color="primary">
                                <Nav.Link className="header-quickbuy" href="#home">Quick Buy</Nav.Link>
                                    
                                </Badge>
                                <Nav.Link className="nav-text" href="#link">Careers</Nav.Link>
                                <NavDropdown title="Chennai" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="English" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link className="header-quickbuy" href="#link"><CallIcon className="call-icon"/>Call Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default Header