import React from 'react';

const Courses = () => {
    return (
        <div className='courses'>
            <h1>Our Courses</h1>
            <p className='offer'>We offer solid foundational courses that you can learn in easy steps, and journey your way into a tech experience that will keep you relevant.</p>
            
            <div className='four-boxes'> 
                <div className='blue-box'>
                    <div className='round-box'>
                        <img className='course-img' src='src/assets/logos/frontend.jpg' />
                    </div>
                    <h5 className='title'>Front-end Development</h5>
                    <p>Learn the core systems of building out the interface of website. Using HTML & CSS, you can achieve the beautiful site your customer ordered.</p>
                </div>
                
                <div className='blue-box'>
                    <div className='round-box'>
                        <img className='course-img' src='src/assets/logos/programming.jfif' />
                    </div>
                    <h5 className='title'>Python Programming</h5>
                    <p>Uncover the fundamentals of the most exciting programming language, and build applications that are both useful and commercial.</p>
                </div>

                <div className='blue-box'>
                    <div className='round-box'>
                        <img className='course-img' src='src/assets/logos/database.png' />
                    </div>
                    <h5 className='title'>Data Analytics</h5>
                    <p>Businesses are looking for professionals that can provide them insights into business success by unlocking the gems in their corporate data.</p>
                </div>

                <div className='blue-box'>
                    <div className='round-box'>
                        <img className='course-img' src='src/assets/logos/cybersec2.jpg' />
                    </div>
                    <h5 className='title'>Intro to Cyber Security & Ethical Hacking</h5>
                    <p>Learn the core systems of building out the interface of website. Using HTML & CSS, you can achieve the beautiful site your customer ordered.</p>
                </div>
            </div>

        </div>
    );
};

export default Courses;