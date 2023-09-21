import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

function Headers() {
  return (
    <>
    <Navbar expand="lg" className=" container-fluid bg-body-tertiary">
      <Container>
        <Row>
          <Col>
            <Navbar.Brand href="#home">  <img className="w-25 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYVhOa18gp3X0htN0BYWTZTG6_cYFmkZBgw&usqp=CAU"/>
            </Navbar.Brand>  
          </Col>
          <Col >
              
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="headitem">
            <Nav.Link href="#home"><NavLink className="nav" to="/">Home</NavLink></Nav.Link>
            <Nav.Link href="#link"> <NavLink className="nav"  to="/about">About</NavLink></Nav.Link>
            <Nav.Link href="#link"> <NavLink className="nav"  to="/event">Event</NavLink></Nav.Link>
            <Nav.Link href="#link">  <NavLink className="nav"  to="/gallary">Gallary</NavLink></Nav.Link>
            <Nav.Link href="#link">  <NavLink className="nav" to="/contact">Contact</NavLink></Nav.Link>
            <Nav.Link href="#link"> <NavLink className="nav"  to="/signup">Signup</NavLink></Nav.Link>
            <Nav.Link href="#link"> <NavLink className="nav"  to="/login">Login</NavLink></Nav.Link>
  
          </Nav>
          
        </Navbar.Collapse>
          </Col>
          
        </Row>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      </Container>
    </Navbar>
    </>
  );
}

export default Headers;
