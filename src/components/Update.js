import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {

  const { id } = useParams();
  const [inputs, setinputs] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
  })
  const navigate= useNavigate();

  const handleChange = (e) => {
    const {name,value} = e.target

    setinputs({...inputs,
        [name]: value
    })
  }
  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setinputs(response.data);
    } catch (error) {
      console.error('Error fetching post', error);
    }
  };

  const updatePost = async () => {
    try {
      await axios.patch(`https://fakestoreapi.com/products/${id}`,inputs);
      alert('Product updated successfully')
      console.log('updated');
      navigate('/product');
    } catch (error) {
      console.error('Error updating post', error);
    }
  };

  return (
    <div className='h-screen bg-slate-400'>
        <div className='px-12'>
        <div className='flex justify-around items-center pt-5 '>
            <div>
               <h4 className='md:text-5xl text-2xl text-gray-700 font-semibold'>Update<span className='text-amber-600'>Product</span></h4>
            </div>
        </div>

        <div className=' px-52 py-6'>
        <label className=' font-medium'>Title:</label>
        <input 
            className="block w-full px-4 py-2 mb-2 text-gray-400 placeholder-gray-500 bg-gray-800 border rounded-lg focus:focus:border-yellow-300  focus:ring-opacity-40  focus:ring-blue-300"
            type="text"
            name='title' 
            placeholder="Title" 
            value={inputs.title} 
            onChange={handleChange} 
        />

        <label className=' font-medium'>Price:</label>
        <input 
            className="block w-full px-4 py-2 mb-2 text-gray-400 placeholder-gray-500 bg-gray-800 border rounded-lg focus:focus:border-yellow-300  focus:ring-opacity-40  focus:ring-blue-300"
            type="number"  
            name='price'
            placeholder="Price" 
            value={inputs.price} 
            onChange={handleChange} 
        />

        <label className=' font-medium'>Description:</label>
        <textarea
            className="block w-full px-4 py-2 mb-2 text-gray-400 placeholder-gray-500 bg-gray-800 border rounded-lg focus:focus:border-yellow-300  focus:ring-opacity-40  focus:ring-blue-300" 
            placeholder="Description"
            name='description' 
            value={inputs.description} 
            onChange={handleChange} 
        ></textarea>
        
        <label className=' font-medium'>Category:</label>
        <input
            className="block w-full px-4 py-2 mb-2 text-gray-400 placeholder-gray-500 bg-gray-800 border rounded-lg focus:focus:border-yellow-300  focus:ring-opacity-40  focus:ring-blue-300" 
            type="text" 
            name='category'
            placeholder="category" 
            value={inputs.category} 
            onChange={handleChange} 
        />
        
        <button
         className='bg-amber-600 float-end mb-2 py-2 px-3 rounded-md mx-2 text-white font-semibold hover:bg-gray-700' 
         onClick={updatePost}>Update</button>
        </div>
    </div>
    </div>
  );
};

export default Update;
