import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {

    
    
   

  return (
     <>
        <div>
            <div className='px-4 sm:px-100 '  >
                  <div className=''>
                        <div className=' lg:flex justify-between px-4 py-2'>
                            <div className=' flex items-center justify-center'>
                                 <div className='flex items-center'>
                                    <div>
                                        <img className=' object-cover' src='image/Momo.png' alt='momo'></img>
                                    </div>
                                     <div className='ml-5'>
                                         <div>
                                            <ul className='flex'>
                                                <li className='text-xl font-semibold text-cyan-900'>M</li>
                                               
                                                 <div className='loader'>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    
                                                 </div>  
                                                <li className='text-xl font-semibold text-cyan-900'>M</li>
                                                <li className='text-xl font-semibold text-cyan-900'>O</li>
                                            </ul>
                                         </div>
                                     </div>
                                 </div>
                            </div>
                            <div className='flex items-center justify-center '>
                                <div>
                                    <ul className='sm:flex mainNav'>
                                        <li className='text-md pt-2 mr-4 px-3 py-1 text-gray-500 cursor-pointer'>About Us</li>
                                        <li className='text-md pt-2 mr-4 px-3 py-1 text-gray-500 cursor-pointer'>Our Menu</li>
                                        <li className='text-md pt-2 mr-4 px-3 py-1 text-gray-500 cursor-pointer'>Our Services</li>
                                        <li className='text-md pt-2 mr-4 px-3 py-1 text-gray-500 cursor-pointer'>Allegry Advice</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                               <div className='flex items-center'>
                                 <div className='mycontainer'>
                                     <Link to="" className='icon'>
                                     <FaFacebookF  className='samei'/>
                                     </Link>

                                     <Link to="" className='icon'>
                                     <FaTiktok className='samei' />
                                     </Link>

                                     <Link to="" className='icon'>
                                     <FaInstagram className='samei' />
                                     </Link>

                                 </div>
                                  <div>
                                    <button className='border-2 px-5 py-2 ml-6 text-md rounded-xl bg-homeOneColor text-white  capitalize' type='button'> Contact Us</button>
                                  </div>
                               </div>
                            </div>
                        </div>
                  </div>
            </div>
        </div>
     </>
  )
}

export default NavBar