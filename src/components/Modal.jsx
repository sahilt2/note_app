import React from 'react';
import './Modal.css';

const Modal = () => {
    return (
        <div className='Overlay'>
            <div className='modal'>
            <h2>This is your note:</h2>
            <p>First name:</p>
            <p>Last name:</p>
            <p>Phone:</p>
            <p>Role:</p>
            <p>Message:</p>
            <button className='btn1'>YES, I AM SURE</button>
            <button className='btn2'>NO, I DON'T WANT TO POST IT</button>
            </div>
        </div>
    );
};

export default Modal;