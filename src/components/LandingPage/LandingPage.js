import React, { useState } from 'react'
import Nav from '../Nav'
import '../LandingPage/Landing.css'
import Footer from './Footer'
import Carousal from './Carousal'

const LandingPage = () => {
  
  const [values, setvalues] = useState({
    fullName: '',
    mobile: '',
    email: '',
    message: ''
  })
  
  const handlechange = (e) => {
    const {name, value} = e.target;
    setvalues({
      ...values,
      [name]: value,
    })
  }
  return (
    <>
        <Nav/>
        <h4 className=' text-center py-4 md:text-5xl text-2xl text-gray-700 font-semibold'>Welcome<span className='text-amber-500 font-extrabold '>Letmegrab.</span></h4>
        {/* Image Carousal */}
        <div>
        <button className='carousal-btn'>Gallery</button>
            <h1 className='flex items-center justify-center text-lg font-normal tracking-wider text-gray-400'>Our Products</h1>
            <Carousal/>
        </div>

        {/* Get in touch */}
        <div  className='get-in-touch'>
        <form className='contact-form'>
            <button className='c-btn'>CONTACTS</button>
            <h1>Get In Touch Now</h1>
            <h4>We have Developed unique space where you can work and live with your family.</h4>

            <div className='input-form'>
              <div className='i-first'>
                <input
                  type='text'
                  className='f-input'
                  placeholder='Fullname'
                  name='fullName'
                  value={values.fullName}
                  onChange={handlechange}/>
              </div>
              
              <div className='i-second'>
                <input
                  type='email'
                  className='f-input'
                  placeholder='Email address'
                  value={values.email}
                  name='email'
                  onChange={handlechange}/>
                <input
                  type='tel'
                  className='f-input'
                  placeholder='Phone Number'
                  value={values.mobile}
                  name='mobile'
                  onChange={handlechange}/>
              </div>
              <div>
              <input
                  type='textarea'
                  className='msg-input'
                  placeholder='Your message'
                  value={values.message}
                  name='message'
                  onChange={handlechange}/>
              </div>
            </div>
            <div>
              <button className='f-btn'
                    type='submit'>Send Request</button>
            </div>
       
        </form>
      </div>
      
      <Footer/>
    </>
  )
}

export default LandingPage