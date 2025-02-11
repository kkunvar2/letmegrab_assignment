import React from 'react'
import '../LandingPage/Landing.css'

import Insta from '../Assests/instagram.png'
import facebook from '../Assests/facebook.png'
import twitter from '../Assests/twitter.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='lw_footer section_padding'>
            <div className='lw_footer-links'>
                <div className='lw_footer-links_div'>
                    <h4>Contact Information</h4>
                    <p>Phone: +911234567890</p>
                    <p>Email: letmegrab@gmail.com</p>
                    <p>Address: Adajan, beside gail tower, reliance mall</p>
                </div>
                <div className='lw_footer-links_div'>
                    <h4>Important Links</h4>
                    <a href='#'>FAQs</a>
                    <a href='#'>Services</a>
                    <a href='#'>Privacy Policy</a>    
                </div>
                <div className='lw_footer-links_div'>
                    <h4>Security and Privacy</h4>
                    <a href='#'>Terms</a>
                    <a href='#'>Rules & Regulations</a>
                    <a href='#'>Policy</a>    
                </div>
                <div className='lw_footer-links_div'>
                    <h5>Follow Us</h5>   
                    <div className='socialmedia'>
                        <p><img className=' h-6 w-12' src={facebook} alt='facebook'/></p>
                        <p><img className=' h-6 w-12 ml-2' src={twitter} alt='twitter'/></p>
                        <p><img className=' h-6 w-12 ml-2' src={Insta} alt='instagram'/></p>
                    </div>
                </div>
            </div>

            <hr></hr>

            <div className='lw_footer-below'>
                <div className='lw_footer-copyright'>
                    <p>
                        @{new Date().getFullYear()} Letmegrab. All right reserved
                    </p>
                </div>
                <div className='lw_footer-below-link'>
                    <a href='#'>Feedback</a>
                    <a href='#'>Declaration</a>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Footer
