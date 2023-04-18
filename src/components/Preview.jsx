import React from 'react';
import './Preview.css';

const Preview = (props) => {
    return (
        <div className='Preview_area'>
            <div className='paper'>
                <div className='lines'>
                    <div className='text'>
                        First name:<span>{props.firstname}</span>
                        <br/>
                        Last name:<span>{props.lastname}</span>
                        <br/>
                        Phone: <span>{props.phone}</span>
                        <br/>
                        Role: <span>{props.role}</span>
                        <br/>
                        Message: <span>{props.message}</span>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Preview;