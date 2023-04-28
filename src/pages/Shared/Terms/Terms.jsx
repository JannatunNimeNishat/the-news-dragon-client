import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fuga itaque labore, architecto aut quam pariatur veniam atque doloremque! Blanditiis omnis et modi minus, libero exercitationem voluptates! Dolore, debitis tempore?</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;