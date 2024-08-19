import React, { useContext } from 'react';
import "./form.css";
import Modal from 'react-bootstrap/Modal';
import { ProductContext } from '../../Services/Context/ProductProvider';
import { notification } from 'antd';

const LoginForm = (props) => {
    const { setSignupShow } = useContext(ProductContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const userData = {
            email: formData.get('email'),
            password: formData.get('password'),
        };

        const loggedUser = JSON.parse(localStorage.getItem('userData'));
        if (loggedUser && userData.email === loggedUser.email && userData.password === loggedUser.password) {
            localStorage.setItem("login", true);
            props.onHide();
            notification.success({
                message: "Login Successful",
                description: "You have successfully logged in.",
                duration: 2
            });
        }
        else {
            notification.error({
                message: "Login Failed",
                description: "Wrong Email or Password. Please try again.",
                duration: 2
            });
        }
    };

    const handleClick = () => {
        const loggedUser = JSON.parse(localStorage.getItem('userData'));
        if (!loggedUser) {
            props.onHide();
            setSignupShow(true);
            notification.info({
                message: 'Redirect to Sign Up',
                description: 'No user data found. Redirecting to sign up form.',
                duration: 2
            });
        } else {
            setSignupShow(false)
            notification.success({
                message: 'You already have registered',
                description: 'User data found. Proceed to login.',
                duration: 2
            });
        }
    };

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    LOGIN
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className='flex justify-center items-center flex-col' onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name='email'
                        placeholder='Email'
                        className='mb-3 w-full log-inp'
                    />

                    <input
                        type="password"
                        name='password'
                        placeholder='Password'
                        className='w-full log-inp'
                    />

                    <button type='submit' className='login-btn'>Login</button>
                </form>
                <p className='text-right mt-2 cursor-pointer' onClick={handleClick}>
                    Create Account
                </p>
            </Modal.Body>
        </Modal>
    );
};

export default LoginForm;
