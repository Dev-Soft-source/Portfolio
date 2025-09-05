import React from 'react';
import CountUp from 'react-countup';
import heroImg from '../../assets/images/pic.png';
import 'remixicon/fonts/remixicon.css';

function Hero() {

    return (
        <section className="pt-0" id="about">
            <div className="container pt-10">
                <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
                    {/* hero left content */}
                    <div className="w-full md:basis-1/2">
                        <h5
                            data-aos="fade-right"
                            data-aos-duration="1500" // Duration in milliseconds
                            className="text-headingColor font-[600] text-[16px]">
                            Hello and welcome!  I'm<strong> Yorge Francia</strong> 
                        </h5>                        
                        <h4 data-aos="fade-up" data-aos-duration="1500" className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'>
                            Full-stack Engineer (Python | React | ML | Scraping)
                        </h4>
                        <div data-aos="fade-up" data-aos-duration="1800" data-aos-delay="200" className='flex items-center gap-6 mt-7'>

                            <button className='bg-primaryColor text-white font-[500] p-2 rounded-[8px] hover:font-[500] hover:bg-smallTextColor hover:text-white ease-in duration-700'>
                                <a href="#contact" className='flex items-center gap-2
                                '><i className="ri-mail-line"></i>Hire Me</a>
                            </button>
                            <a className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor ' href='#portfolio'>See portfolio</a>
                        </div>
                        <p data-aos="fade-left"
                            data-aos-duration="1500"
                            className='flex gap-2 text-headingColor font-[500] text-[15px] sm:pl-2 sm:pr-10 mt-7 leading-7'>
                            <span>
                                <i className="ri-apps-line"></i>
                            </span>
                            I’m a highly motivated and ambitious Python Web Developer with 6+ years of experience building scalable, secure, and maintainable web applications. My focus is on developing clean, efficient backend systems using frameworks like Django, Flask, and FastAPI, while following best practices in REST API design, database modeling, and deployment.

                            <br/>With a strong foundation in problem-solving and a passion for continuous learning, I stay up-to-date with the latest tools and trends in Python development. I thrive in collaborative environments, adapt quickly to new challenges, and take pride in turning complex ideas into reliable, production-ready solutions. 
                        </p>
                    </div>

                    {/* hero image */}

                    <div className='basis-1/3 mt-10 sm:mt-0'>
                        <figure className='flex items-center justify-center'>
                            <img src={heroImg} alt="" />
                        </figure>
                    </div>
                    {/* hero contentright */}
                    <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={6} duration={2} suffix='+' />
                            </h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'>Years of experience</h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={98} duration={2} suffix='+%' />
                            </h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'>Success rate</h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={98} duration={2} suffix='+%' />
                            </h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'>Happy client</h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={100} duration={2} suffix='+%' />
                            </h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'>Project competed</h4>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;