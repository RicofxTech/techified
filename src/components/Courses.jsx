
import Frontend from '../assets/logos/frontend.jpg';
import Programming from '../assets/logos/database.png';
import Dbase from '../assets/logos/database.png';
import Cybersec from '../assets/logos/cybersec.jpg';


const Courses = () => {
    return (
        <div className='courses'>
            <h1  className="text-[30px] font-[700]">Our Courses</h1>
    <p className='offer'>We offer solid foundational courses that you can learn in
         easy steps, and journey your way into a tech experience that will keep you relevant.</p>
            

            {/* four-boxes styling starts here */}
            <div className=' flex flex-col md:flex-row flex-wrap items-center lg:flex-nowrap w-[100%] '> 
                <div className='blue-box'>
                    <div className='round-box'>
                        <img className='course-img' src= {Frontend} />
                    </div>
                    <h5 className='title'>Front-end Development</h5>
                    <p>Learn the core systems of building out the interface of website. Using HTML & CSS, you can achieve the beautiful site your customer ordered.</p>
                </div>
                
                <div className='blue-box'>
                    <div className='round-box'>
                        <img className='course-img' src= {Programming} />
                    </div>
                    <h5 className='title'>Python Programming</h5>
                    <p>Uncover the essential fundamentals of the most exciting programming language, and build applications that are both useful and commercial.</p>
                </div>

                <div className='blue-box'>
                    <div className='round-box'>
                        <img className='course-img' src= {Dbase} />
                    </div>
                    <h5 className='title'>Data Analytics</h5>
                    <p>Businesses are looking for professionals that can provide them insights into business success by unlocking the gems in their corporate data.</p>
                </div>

                <div className='blue-box'>
                    <div className='round-box'>
                        <img className='course-img' src= {Cybersec} />
                    </div>
                    <h5 className='title'>Intro to Cyber Security & Ethical Hacking</h5>
                    <p>Get into the world of internet security, secure your own device, and prepare yourself for the role of white-hat hacking or cyber policing.
                        
                    </p>
                </div>

            </div>

        </div>
    );
};

export default Courses;