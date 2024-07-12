
import { useState } from 'react';
import Logo from '../assets/images/logo3.png'
import "../styles/Header.css"

const Header = () => {


    const [click, setClick] = useState(false)

const handleCLick = () =>{
    setClick(!click)
}

    return (
        <div className='header-div items-center flex  justify-around'> 
            <div className='hd1'>
            {/* <<h2>Techi-fied</h2>> */}
            <img className='logo' src={Logo} />
            </div>

{/* navlink */}
<div className={click? ("hd2") : ("hide")}>


<div className='hd2 flex md:flex-row flex-col items-center justify-center gap-[20px]  md:gap-0'>
            <ul className= 'links  flex md:flex-row flex-col justify-between  gap-[20px] '>
                <li className= 'links1'> COURSES</li>
                <li className= 'links1'> PRICING</li>
                <li className= 'links1'> CONTACT</li>
            </ul>

            <div className='hd3 lg:ml-[5rem]'>
            <button className='reg'>REGISTER</button>
            </div>



            </div>

          

</div>


{/* side Menu */}
<div className="flex lg:hidden text-[35px]"  onClick={handleCLick}> 
    {click? (<i className="ri-menu-line"></i>)  : (<i className="ri-close-line"></i>)   }

</div>
          

        </div>


    );
};

export default Header;