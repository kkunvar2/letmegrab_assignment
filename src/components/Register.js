import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from './Assests/logo.png'

const Register = () => {

    const navigate = useNavigate()
    const [match, setMatch] = useState(true);
    const [inputs, setInputs] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [formErrors, setFormErrors] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // Validation
    const handleValidation = (e) => {
        const { name, value } = e.target;
        let errors = { ...formErrors };

        switch (name) {
            case 'userName':
                errors.userName = !value ? 'Please Enter Username' : '';
                break;
            case 'email':
                errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address';
                break;
            case 'confirmPassword':
                errors.confirmPassword = inputs.password !== e.target.value ? setMatch(false) : setMatch(true)

            default:
                break;
        }

        setFormErrors(errors);
        setInputs({ ...inputs, [name]: value });
    };

    // Submit Registration form
    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputs.userName && !formErrors.userName && !formErrors.email && match){
            localStorage.setItem('signupData', JSON.stringify(inputs));
            console.log("Registration Successfull");
            navigate('/login')
        }
        // else if(formErrors && !match){
        //     setFormErrors({...formErrors, signed: 'Please fill form properly'})
        //         setTimeout(() => {
        //             setFormErrors({...formErrors, signed: ''})
        //         }, 2000)
        //         return;
        // }
    }
  return (
    <>
     <div className='bg-gray-800 min-h-screen'>
        <div className="w-full max-w-sm mx-auto overflow-hidden bg-gray-600 rounded-lg shadow-lg dark:bg-gray-800">
            <div className="px-6 py-4">
                <div className="flex flex-col justify-center mx-auto items-center">
                   <img src={logo} alt='logo'/>
                </div>

                {/* form */}
                <form onSubmit={handleSubmit}>
                    <div className="w-full mt-4">
                        <input className="block w-full px-4 py-2 mt-2 text-gray-400 placeholder-gray-500 bg-gray-800 border rounded-lg focus:focus:border-yellow-300  focus:ring-opacity-40  focus:ring-blue-300" 
                            type='text' placeholder='Enter Username' 
                            name='userName' 
                            value={inputs.userName} 
                            onChange={handleValidation} />
                    </div>
                    {formErrors.userName && <p style={{ color: "#ff6347", fontSize: "13px", paddingTop:"4px",  margin: 0}}>{formErrors.userName}</p>}

                    <div className="w-full mt-4">
                        <input className="block w-full px-4 py-2 mt-2 text-gray-400 placeholder-gray-500 bg-gray-800 border rounded-lg focus:focus:border-yellow-300  focus:ring-opacity-40  focus:ring-blue-300" 
                            type='email' 
                            placeholder='Email' 
                            name='email' 
                            value={inputs.email} 
                            onChange={handleValidation}/>
                    </div>
                    {formErrors.email && <p style={{ color: "#ff6347", fontSize: "13px", paddingTop:"4px",  margin: 0}}>{formErrors.email}</p>}            

                    {/* Password */}
                    <div className='mt-4'>
                        <div className='input'>
                            <input className='block w-full px-4 py-2 mt-2 text-gray-400 placeholder-gray-500 bg-gray-800 border rounded-lg focus:focus:border-yellow-300  focus:ring-opacity-40  focus:ring-blue-300' 
                                type='password' 
                                name='password'
                                placeholder='Password' 
                                value={inputs.password} 
                                onChange={handleValidation} />
                        </div>
                    </div>

                    <div>
                        <div className='input'>
                            <input className='block w-full px-4 py-2 mt-2 text-gray-400 placeholder-gray-500 bg-gray-800 border rounded-lg focus:focus:border-yellow-300  focus:ring-opacity-40  focus:ring-blue-300' 
                                type='password' 
                                placeholder='Confirm Password' 
                                name='confirmPassword' 
                                value={inputs.confirmPassword} 
                                onChange={handleValidation} />
                        </div>
                        {!match && <p style={{ color: "#ff6347", fontSize: "13px",  }}>Passwords doesn't match</p>}
                        
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                        <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-400 rounded-lg hover:bg-yellow-500"
                                type='submit'>
                            Signup
                        </button>
                    </div>
                    
                    {/* Form Errors */}
                    <div>
                        {formErrors.signed &&
                            <p className='text-red-500 text-center mt-2'>{formErrors.signed}</p>
                        }               
                    </div>
                </form>
            </div>

            <div className="flex items-center justify-center py-4 text-center bg-gray-900">
                <span className="text-sm text-gray-200 ">If you already Register</span>
                <Link to='/login'>
                    <p className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline mt-2">click here</p>
                </Link>
            </div>
        </div>  
    </div>    
    </>
  )
}

export default Register