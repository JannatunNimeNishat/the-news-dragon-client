import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Await, Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false)

    const handleTerms = (event) => {
        setAccepted(event.target.checked);
    }
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const check = form.accept.value
        console.log(name, photo, email, password, check);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;

                // update userName and Photo 
                /* updateProfile(createdUser, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {

                    })
                    .catch(error => {
                        console.log(error.message);
                    }) */
                updateUser(name, photo)
                    .then(() => {

                    })
                    .catch(error => {
                        console.log(error.message);
                    })


                console.log(createdUser);

            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <Container className='w-50 mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleTerms}
                        type="checkbox"
                        name='accept'
                        label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
                </Form.Group>

                <Button variant="primary"
                    type="submit"
                    //
                    disabled={!accepted}

                >
                    Register
                </Button>

                <br />
                <Form.Text className="text-secondary">
                    Already have an Account? <Link to='/login'>Login</Link>
                </Form.Text>

                <Form.Text className="text-success">

                </Form.Text>

                <Form.Text className="text-danger">

                </Form.Text>

            </Form>
        </Container>
    );
};

export default Register;