import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import RightNav from '../pages/Shared/RightNav/RightNav';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            {/* <NavigationBar></NavigationBar> */}
            <Container>
                <Row>
                    <Col md={9}>
                       <Outlet></Outlet>
                    </Col>
                    <Col md={3}>
                        <RightNav></RightNav>

                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;