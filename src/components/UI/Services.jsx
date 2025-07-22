import React from 'react'
import frontedImg from '../../assets/images/front-end.png'
import uiuxImg from '../../assets/images/design.png'
function Services() {
    return (
        <section id='services'>
            <div className='container lg:pt-5'>
                <div className='text-center'>
                    <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>What do i help</h2>
                    <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[600] leading-7'>
                        I help businesses build fast, secure, and scalable web applications using Python (Django/FastAPI) and React.
                        I create clean, user-friendly interfaces and powerful backend systems tailored to real-world needs.
                        From eCommerce to SaaS platforms, I turn ideas into fully functional digital products.
                    </p>
                </div>
            </div>

            <div className='flex flex-col justify-center sm:py-12'>
                <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                    <div className='relative text-gray-700 antialiased text-sm font-semibold'>
                        {/* left card */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                <div className='flex justify-start w-full mx-auto items-center'>
                                    <div className='w-full sm:w-3/4 sm:pr-8'>
                                        <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1200" className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className='text-indigo-400 font-[600] mb-3 group-hover:text-white text-xl'>
                                                Python Backend Developer
                                            </h3>
                                            <p className='text-[15px] text-teal-600 group-hover:text-white leading-7'>
                                                I build backend systems using Django and FastAPI, create APIs, and work with databases like PostgreSQL. I’ve used tools like Celery and Redis for background tasks, and I handle user login and security with JWT and OAuth2. I also deploy projects using Docker and set up CI/CD for smooth updates.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* right card */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                <div className='flex justify-end w-full mx-auto items-center'>
                                    <div className='w-full sm:w-3/4 sm:pl-8'>
                                        <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="1300" className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className='text-indigo-400 font-[600] mb-3 group-hover:text-white text-xl'>
                                                UI/UX Designer
                                            </h3>
                                            <p className='text-[15px] text-teal-600 group-hover:text-white leading-7'>
                                                As a Frontend developer, I have experience working with frontend tools like React.js, JavaScript, and Tailwind CSS. I understand how frontend state is managed using useReducer, Context API, and Redux Toolkit. This helps me build backend systems that integrate smoothly with modern frontend applications.
                                            </p>
                                        </div>
                                    </div>
                                </div>                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services