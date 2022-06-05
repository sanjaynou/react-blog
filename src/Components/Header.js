import React from 'react'
import { Nav, NavDropdown, NavItem, NavLink, Navbar, FormControl, Container, Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
export default function Header(props) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">{props.title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/about">About</Link></Nav.Link>
                            <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                        </Nav>
                        {props.searchBar ? <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> : ""}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

Header.defaultProps = {
    title: "Your Title Here",
    searchBar: true
}

Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}