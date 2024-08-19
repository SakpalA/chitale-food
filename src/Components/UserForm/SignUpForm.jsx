import React, { useContext } from 'react';
import "./form.css";
import Modal from 'react-bootstrap/Modal';
import { ProductContext } from '../../Services/Context/ProductProvider';
import { notification } from 'antd';

const SignUpForm = (props) => {
    const { setLoginShow } = useContext(ProductContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const userData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            password: formData.get('password')
        };

        localStorage.setItem('userData', JSON.stringify(userData));
        notification.success({
            message: 'Registration Successful',
            description: 'You have successfully registered.',
            duration: 2
        });
        props.onHide();
        setLoginShow(true);
    };

    const handleClick = () => {
        props.onHide();
        notification.info({
            message: 'Redirect to Log In',
            duration: 2
        });
        setLoginShow(true);
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
                    CREATE ACCOUNT
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit} className='flex justify-center items-center flex-col'>
                    <input
                        type="text"
                        name='firstName'
                        placeholder='First Name'
                        className='mb-3 w-full log-inp'
                        required
                    />
                    <input
                        type="text"
                        name='lastName'
                        placeholder='Last Name'
                        className='mb-3 w-full log-inp'
                        required
                    />
                    <input
                        type="email"
                        name='email'
                        placeholder='Email'
                        className='mb-3 w-full log-inp'
                        required
                    />
                    <input
                        type="password"
                        name='password'
                        placeholder='Password'
                        className='w-full log-inp'
                        required
                    />
                    <button type='submit' className='login-btn'>Create</button>
                </form>
                <p className='text-right mt-2 cursor-pointer' onClick={handleClick}>
                    Already Have an Account? Login!
                </p>
            </Modal.Body>
        </Modal>
    );
};

export default SignUpForm;
