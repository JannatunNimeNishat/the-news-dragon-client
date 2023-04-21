import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
//date and time
import moment from 'moment/moment';
//marquee
import Marquee from "react-fast-marquee";

import { Button, Container } from 'react-bootstrap';



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
           

        </Container>
    );
};

export default Header;