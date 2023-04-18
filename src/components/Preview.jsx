import React from 'react';
import './Preview.css';

const Preview = () => {
    return (
        <div className='Preview_area'>
            <div className='paper'>
                <div className='lines'>
                    <div className='text'>
                        First name:
                        <br/>
                        Last name:
                        <br/>
                        Phone:
                        <br/>
                        Role:
                        <br/>
                        Message:
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Preview;