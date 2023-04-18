
import './Form.css';

import React from 'react';

const Form = (props) => {
    return (
        <div className='Form_area'>
            <form className='form' onSubmit={props.click} onChange = {props.handleChange}>
                
                <label htmlFor="firstname">Firstname</label>
                <input type="text" id='firstname' />
                
                
                <label htmlFor="lastname">Lastname</label>
                <input type="text" id='lastname'/>
                
                
                <label htmlFor="phone">Phone</label>
                <input type="number" id='phone' />
                
                
                <label htmlFor="role">Role</label>
                <select id="role">
                    <option value="">Options</option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                </select>
                
                
                <label htmlFor="message">Message</label>
                <textarea id="message" cols="30" rows="10">Message</textarea>
                <button type = "submit" >Send</button>
            </form>
        </div>
    );
};

export default Form;