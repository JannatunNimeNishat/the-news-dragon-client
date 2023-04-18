import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
//React icons
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
const RightNav = () => {
    return (
        <div>
            <div>
                <h4 className='mb-3 mt-4'>Login With</h4>
                <Button className='mb-2 w-100' variant="outline-primary"><FaGoogle /> Login with Google </Button>
                <Button variant="outline-secondary w-100"> <FaGithub /> Login with GitHub</Button>
            </div>
            <div>
                <h4 className='mt-4'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook className='text-primary'/> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            
                <QZone></QZone>
           
           <div className='text-light py-5 px-3 text-center' style={{backgroundImage:`url('${bg}')` }}>
                {/* <img src={bg} alt="" /> */}
               <h4 className='mb-4'>Create an Amazing Newspaper</h4>
               <p className='mb-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
               <button className='px-2 py-2 bg-danger text-light mt-3 mb-3'>Learn More</button>
           </div>
        </div>
    );
};

export default RightNav;