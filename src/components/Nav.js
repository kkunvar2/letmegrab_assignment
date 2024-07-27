import React, { useEffect, useState } from 'react'
import { Navbar } from 'flowbite-react';
import {Link, useNavigate } from 'react-router-dom';
import { isLoggedIn, logoutUser } from '../Services/authService';

import logo from './Assests/logo.png'

const Nav = () => {
    const navigate = useNavigate();
    const isLog = isLoggedIn();
    
    const [userData] = useState(JSON.parse(sessionStorage.getItem('loginUser')))
    const [userName, setuserName] = useState('')

    useEffect(() => {
        if (userData) {
          setuserName(userData.userName);
        }
      }, [userData]);
    // //Logout
    const handleLogout = () =>{
        logoutUser()
        navigate('/');
    }


  return (
    <>
           
                <Navbar fluid rounded className='sticky top-0 shadow-lg py-1 ' style={{ zIndex: 100 }}>
                    <Navbar.Brand >
                        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    </Navbar.Brand>
                    <div className="flex w-full items-center justify-between">
                        <div className='flex items-center justify-center w-full'>
                            {isLog &&
                            <h3 className='font-medium text-black'>Welcome {userName}</h3>
                            }
                        </div>

                        <div className='flex items-center'>
                            {!isLog &&
                            <Link to='/login'>
                                <button className='bg-blue-500 py-2 px-3 rounded-md mx-2 text-white font-semibold hover:bg-gray-700'>Login</button>
                            </Link>
                            }
                            {!isLog &&
                            <Link to='/signup'>
                                <button className='bg-yellow-400 py-2 px-2 w-28 rounded-md mx-3 text-white font-semibold hover:bg-gray-700'>Sign Up</button>
                            </Link>
                            }
                            {isLog &&
                            <button className='bg-yellow-400 py-2 px-3 rounded-md mx-2 text-white font-semibold hover:bg-gray-700'
                                onClick={handleLogout}>Logout</button>
                            }
                        </div>
                </div>
                    {/* <Navbar.Collapse className='flex justify-center pt-1 cursor-pointer'>
                                       
                    </Navbar.Collapse> */}
                </Navbar>          
    </>
  )
}

export default Nav
