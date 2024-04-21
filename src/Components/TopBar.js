import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

function CustomNavBar() {
    return(
        <Navbar>
            <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
                <img
                        src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg"
                        alt="instacart logo"
                        />
            </Navbar.Brand>
            <Form inline>
                <Row>
                    <Col>
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                            style={{ width: '100%' }}
                            />
                    </Col>
                    <Col>
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"> 
                </Nav>
                <Nav>
                    <Nav.Link href="#LogIn">Log In</Nav.Link>
                    <Button variant="success">Sign Up</Button>{' '}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavBar