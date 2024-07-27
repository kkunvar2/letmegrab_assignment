import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Product = () => {

  const [products, setproducts] = useState([])
  const [fileterProducts, setfilterProducts] = useState([])
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [selType, setselType] = useState('')
  const [search, setsearch] = useState('')

  
  //fetching
  const fetchData = async() => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products')
        const data = response.data
        setproducts(data) 
        setfilterProducts(data)   
    } catch (error) {
        console.log("while fetching data", error);
    }
}


  useEffect(() => {
    fetchData()
  },[]);
  
  useEffect(() => {
    let filtered = products;
    if (selType) {
      filtered = filtered.filter(product => product.category === selType);
    }

    if (search) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setfilterProducts(filtered);
  }, [selType, search, products]);

  // view
  const handleView = (id) => {
    const product = products.find((product) => product.id === id);
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // delete
   const handleDelete = async(id) => {
    try {
       await axios.delete(`https://fakestoreapi.com/products/${id}`)
       setproducts(products.filter(product => product.id !== id))
       alert('Product deleted successfully') 
    } catch (error) {
        console.log("error while deleting data", error);
    }
    // const deletingdata = [...posts]
    // deletingdata.splice(index, 1);
    // setposts(deletingdata)
}
  return (
    <>
    <Nav/>

    <div className='flex justify-between  items-center'>
      <div>
        <Link to='/create'>
          <button className='bg-blue-500 py-2 px-3 rounded-md mx-2 text-white font-semibold hover:bg-gray-700'>Create</button>
        </Link>
      </div>
      <div className='flex py-2 gap-20'>
        {/* Search Filter */}
        <div className="relative md:-right-24">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input className="block md:w-auto w-[10rem] p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                type="search" 
                placeholder="Search here.."
                onChange={(e) => setsearch(e.target.value)}
                />
          </div>
        {/* Dropdown Filter */}
        <div className='flex justify-end px-3 mb-2'>
          <select  className='max-lg:w-[45%] lg:ml-4 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 rounded border border-gray-600 focus:border-yellow-500 text-base outline-none text-gray-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                name='type'
                onChange={(e) => setselType(e.target.value)}
                >
            <option className='bg-gray-800 text-black'>Category</option>
            <option className='bg-gray-800 font-medium text-sm text-yellow-400'>men's clothing</option>
            <option className='bg-gray-800 font-medium text-sm text-yellow-400'>women's clothing</option>
            <option className='bg-gray-800 font-medium text-sm text-green-400'>electronics</option>
            <option className='bg-gray-800 font-medium text-sm text-green-400'>jewelery</option>
          </select>
        </div>
      </div>
      </div>

    <div>
       <table className='table-fixed w-full '>
            <thead className=' sticky h-[3rem] bg-gray-50 border-b-2 border-gray-200 text-gray-600'>
                <tr className='w-24 p-3 text-lg font-semibold tracking-wide text-center'>
                    <th className=''>Title</th>
                    <th className=''>Price</th>
                    <th className=''>Discription</th>
                    <th className=''>Category</th>
                    <th className=''>Action</th>
                </tr>
            </thead>
            <tbody className='divide-y divide-gray-100 text-center'>
            {fileterProducts.map((product) =>( 
              <tr key={product.id} className='bg-slate-200 p-3 text-md hover:bg-gray-300'>
                <td className='font-bold text-blue-500'>{product.title}</td>
                <td className='text-gray-700'>{product.price}</td>
                <td className='text-gray-700'>{product.description}</td>
                <td className='text-gray-700'>
                  <span className={`p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 `}>
                  {/* bg-${complaint.status === 'COMPLETED' ? 'green' : 'yellow'}-200 rounded-lg` */}
                    {product.category}
                  </span>
                </td>
                <td className='flex gap-2 p-3 items-center justify-center text-gray-700'>
                    <button className=' text-sky-600 font-medium' onClick={() => handleView(product.id)}>View</button>
                    <Link to={`/update/${product.id}`}><button className=' text-yellow-500 mt-3 font-medium'>Update</button></Link> 
                    <button className=' text-red-500 font-medium' onClick={() => handleDelete(product.id)}>Delete</button>
                </td>
              </tr>
            ))} 
        </tbody>
      </table>
    </div>
    
    {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">{selectedProduct.title}</h2>
            <p className="text-gray-700">Price: {selectedProduct.price}</p>
            <p className="text-gray-700">Description: {selectedProduct.description}</p>
            <p className="text-gray-700 font-bold ">Category: {selectedProduct.category}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Product