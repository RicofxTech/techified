import React from 'react';
import Logo from '../assets/images/logo3.png'


const Header = () => {
    return (
        <div className='header-div'> 
            <div className='hd1'>
            {/* <<h2>Techi-fied</h2>> */}
            <img className='logo' src={Logo} />
            </div>

            <div className='hd2'>
            <ul className= 'links'>
                <li className= 'links1'> COURSES</li>
                <li className= 'links1'> PRICING</li>
                <li className= 'links1'> CONTACT</li>
            </ul>
            </div>

            <div className='hd3'>
            <button className='reg'>REGISTER</button>
            </div>
        </div>


    );
};

export default Header;