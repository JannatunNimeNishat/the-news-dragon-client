import React from 'react';
import logo from '../../../assets/logo.png'
//date and time
import moment from 'moment/moment';
//marquee
import Marquee from "react-fast-marquee";

import { Button, Container, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    return (
        <Container className='mt-4'>
            <div className='text-center'>
                <img className=' ' src={logo} alt="" />
                <p><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex px-2 py-3'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' pauseOnHover='true' speed={70}>
                    I can be a React component, multiple React components, or just some text...
                    I can be a React component, multiple React components, or just some text...
                </Marquee>
            </div>
            {/* navBar */}
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#carrier">Career</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="secondary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Header;