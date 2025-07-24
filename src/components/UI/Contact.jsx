import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className='pb-16'>
            <div className='container'>
                <h2 className='text-headingColor font-[700] text-[2.5rem] mb-2'>Get in touch</h2>
                <div className='md:flex justify-between items-center'>
                    <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
                        <iframe
                            title='google-map'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62844.282970982456!2d-66.94207599999999!3d10.500000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5904b14c1e63%3A0xd56c58bffeb5c2d5!2sCaracas%2C%20Capital%20District%2C%20Venezuela!5e0!3m2!1sen!2s!4v1721731000000!5m2!1sen!2s"
                            className='border-0 w-full h-full'
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    <div className='w-full  md:w-1/2 sm:h-[450px] lg:flex items-center bg-primaryColor p-8' >
                        <form className='w-full py-5' action="#">                           
                            <div className='mb-5'>
                                <input type='text' placeholder='Enter Your name' className='w-full p-3 focus:outline-none rounded-[5px]' />
                            </div>
                            <div className='mb-5'>
                                <input type='email' placeholder='Enter Your email' className='w-full p-3 focus:outline-none rounded-[5px]' />

                            </div>
                            <div className='mb-5'>
                                <input type='text' placeholder='Enter Your Subject' className='w-full p-3 focus:outline-none rounded-[5px]' />

                            </div>
                            <div className='mb-5'>
                                <textarea type='text' rows={3} placeholder='write your message' className='w-full p-3 focus:outline-none rounded-[5px]' />

                            </div>
                            <button className='w-full p-3  focus:outline-none rounded-[5px] bg-amber-900 text-white hover:bg-amber-950 text-center ease-linear duration-150' >Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>)
}

export default Contact