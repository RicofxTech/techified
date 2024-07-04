import React from 'react';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-text'>
                <h3 id='head1'>WELCOME TO</h3>
                <h1 id='head2'>ADAPTIVE LEARNING</h1>
                <div className='para-div'>
                    <p id='para1'>We know that 90 days is enough to make a notable change in your life. So change the way you learn, and you can turn around the way you earn.</p>
                </div>
                <button className='reg2'>REGISTER</button>
            </div>

            <div className='hero-pic'>
                <img className='student' src='src/assets/images/student4.png' alt='student' />
                    <div className='ikons'>
                        <img className='ikon1' src='src/assets/logos/html5.png' />
                        <img className='ikon2' src='src/assets/logos/cybersec2.jpg' />
                        <img className='ikon3' src='src/assets/logos/data.png' />
                        <img className='ikon4' src='src/assets/logos/html3.png' />
                        <img className='ikon5' src='src/assets/logos/js.png' />
                    </div>
            </div>
            
        </div>
    );
};

export default Hero;