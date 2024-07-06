import React from 'react';
import Student from '/src/assets/images/student4.png';
import Html5 from '/src/assets/logos/html5.png';
import Cybersec2 from '/src/assets/logos/cybersec2.jpg';
import Data from '/src/assets/logos/data.png';
import Html3 from '/src/assets/logos/html3.png';
import Js from '/src/assets/logos/js.png';

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
                <img className='student' src= {Student} alt='student' />
                    <div className='ikons'>
                        <img className='ikon1' src= {Html5} />
                        <img className='ikon2' src= {Cybersec2} />
                        <img className='ikon3' src= {Data} />
                        <img className='ikon4' src= {Html3} />
                        <img className='ikon5' src= {Js} />
                    </div>
            </div>
            
        </div>
    );
};

export default Hero;