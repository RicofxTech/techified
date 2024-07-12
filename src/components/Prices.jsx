

const Prices = () => {
    return (
        <div className='price-div items-center justify-center'>
            <div className='price-title-block'>
                <h1 className='price-heading font-[700] text-[32px]'>Our Prices</h1>
                <p className='price-intro'>Choosing to offer unbeatable pricing to make information technology awareness a reality. We seek to make minds blossoms for global impact.</p>
            </div>
        
            <div className='course-price  pt-[2rem]'>


                <div className='sect'>
                    <div className='course-header'>
                        <div className='bullet1'>o</div>
                        <h3 className='course-title'> BOOTCAMP</h3>
                        <h3 className='course-duration'>1 WEEK</h3>
                    </div>
                    <p className='course-details'>Get a taste of the course, the basic elements of each one you get to register for, and determine if its the best path for your IT journey.</p>
                    <button className='amount'>N5,000</button>
                </div>
                
            
                <div className='sect'>
                    <div className='course-header'>
                        <div className='bullet1'>o</div>
                        <h3 className='course-title'> BASIC COURSE</h3>
                        <h3 className='course-duration'> 6 WEEKS</h3>
                    </div>
                    <p className='course-details'>With this program, you learn the most importatnt components of your chosen field. No fluff, just core and very useful information.</p>
                    <button className='amount'>N20,000</button>
                    <p className='discount'>15% discount to the first 10 persons to register, and 10% discount to the second 10 persons to register.</p>
                </div>

                <div className='sect'>
                    <div className='course-header'>
                        <div className='bullet1'>o</div>
                        <h3 className='course-title'> 3 MONTHS DEEP DIVE</h3>
                        <h3 className='course-duration'>12 WEEKS</h3>
                    </div>
                    <p className='course-details'>Solid tutoring that includes a 1 MONTH mentorship program. This concise learning experience will shape you for a place in the job market.</p>
                    <button className='amount'>N50,000</button>
                    <p className='discount'>10% discount to the first 10 persons to register.</p>
                </div>
            </div>

            
        </div>


    );
};

export default Prices;