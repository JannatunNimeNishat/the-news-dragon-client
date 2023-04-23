import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user } = useContext(AuthContext);
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            {/* <Nav.Link href="#features"> */}
                                <Link to='/category/0'>Home</Link>
                            {/* </Nav.Link> */}
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#carrier">Career</Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                user &&
                                 <FaUserCircle style={{ fontSize: '2rem' }} /> 
                            }
                            
                                {
                                    user ?
                                        <Link to='/logout'>
                                            <Button variant="secondary">Logout</Button>
                                        </Link>
                                        :
                                        <Link to='/login'>
                                            <Button variant="secondary">Login</Button>
                                        </Link>
                                }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;