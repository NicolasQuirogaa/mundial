import React from 'react';
import Estadio from '../assets/copaaa.jpg';
import '../styles/Contact.css';

function Contact() {
    return (
        <div className='contact'>
            <div
             className='leftSide'
             style={{ backgroundImage:`url(${Estadio})`}}
            ></div>
            <div className='rightSide'> 
                <h1> Contact Us </h1>

                <form id='contact-form' method='POST'>
                    <label htmlFor='name'> First Name </label>
                    <input name='name' placeholder='' type='text'/>
                    <label htmlFor='email'> Email </label>
                    <input name='email' placeholder='' type='text'/>
                    <label htmlFor='telephone number'> Phone </label>
                    <input name='telephone' placeholder='' type='text'/>
                    <label htmlFor='message'>Message </label>
                    <textarea 
                        rows='6' 
                        placeholder=''
                        name= 'message'
                        required  
                    ></textarea>
                    <button type='submit'>  Send Message </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;