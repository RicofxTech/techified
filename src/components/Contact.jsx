import React from 'react';

const Contact = () => {
    return (
        <div className='courses'>
            <div className='contact-sec'>
                <h1 className="text-[30px] font-[700]">Contact Us</h1>
            </div>
            <div>
                <form action="">
                    <div className='input-div'>
                        <label className='label-text'>NAME</label>
                        <input className='textbox' type='text' placeholder='Enter your name here' />
                    </div>

                    <div className='input-div'>
                        <label className='label-text'>EMAIL</label>
                        <input className='textbox' type='email' placeholder='Enter your email here' />
                    </div>

                    <div className='input-div'>
                        <label className='label-text'>MESSAGE</label>
                        <textarea className='textbox2' type='text' placeholder='Write your message here' />
                    </div>

                    <button className='reg2'>REGISTER</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;