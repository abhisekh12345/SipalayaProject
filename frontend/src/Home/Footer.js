import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <>
        <div className='pt-16 pb-5'>
            <div className='px-4 sm:px-100'>
                <div className=''>
                     <div className='w-full grid grid-cols-1  sm:grid-cols-2 lg:flex'>
                         <div className='p-2  lg:w-5/12'>
                           <div>
                              <div className=''>
                              <div className='flex items-center'>
                                    <div>
                                        <img className=' object-cover' src='image/momo.png' alt='momo'></img>
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
                                  <div>
                                    <p className='text-md text-gray-400 mt-4 w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam dicta fuga eaque facere obcaecati temporibus consectetur ut numquam vel, doloribus, iure assumenda modi, minima nostrum atque cum eveniet ullam sed.</p>
                                  </div>
                              </div>
                           </div>
                         </div>
                         <div className='pt-2 lg:w-2/12'>
                            <div>
                                <div className='mb-3'>
                                    <h1 className='text-2xl font-semibold text-cyan-800'>momos</h1>
                                </div>
                                <div>
                                    <ul>
                                        <li className='text-md text-gray-800'>About Us</li>
                                        <li className='text-md text-gray-800'>Our Menu</li>
                                        <li className='text-md text-gray-800'>Our Services</li>
                                        <li className='text-md text-gray-800'>Contact Us</li>
                                    </ul>
                                </div>
                            </div>
                         </div>
                         <div className='pt-2 lg:w-2/12'>
                         <div>
                                <div className='mb-3'>
                                    <h1 className='text-2xl font-semibold text-cyan-800'>Legals</h1>
                                </div>
                                <div>
                                    <ul>
                                        <li className='text-md text-gray-800'>Term & Condition</li>
                                        <li className='text-md text-gray-800'>Privacy Policy</li>
                                        <li className='text-md text-gray-800'>Support</li>
                                    </ul>
                                </div>
                            </div>
                         </div>
                         <div className='pt-2  lg:w-3/12'>
                               <div className='mb-3'>
                                    <h1 className='text-2xl font-semibold text-cyan-800'>Follow Us</h1>
                                </div>
                               <div className='flex items-center'>
                                  <div className=' flex w-full'>
                                     <div className='w-[3rem] h-[3rem] rounded-full bg-gray-300 flex justify-center items-center'>
                                     <Link to="">
                                     <FaFacebookF  className='text-xl  text-white'/>
                                     </Link>
                                     </div>

                                     <div className='w-[3rem] h-[3rem] ml-3 rounded-full bg-gray-300 flex justify-center items-center'>
                                     <Link to="">
                                     <FaTiktok  className='text-xl  text-white'/>
                                     </Link>
                                     </div>


                                     <div className='w-[3rem] h-[3rem] ml-3 rounded-full bg-gray-300 flex justify-center items-center'>
                                     <Link to="">
                                     <FaInstagram  className='text-xl  text-white'/>
                                     </Link>
                                     </div>

                                

                                  </div>
                                  
                               </div>
                               <div className='flex items-center mt-3'>
                                  <div className='flex w-full'>
                                     <div className='w-[3rem] h-[3rem] rounded-full bg-gray-300 flex justify-center items-center'>
                                     <Link to="">
                                     <IoLogoYoutube  className='text-xl  text-white'/>
                                     </Link>
                                     </div>

                                     <div className='w-[3rem] h-[3rem] ml-3 rounded-full bg-gray-300 flex justify-center items-center'>
                                     <Link to="">
                                     <FaLinkedin  className='text-xl  text-white'/>
                                     </Link>
                                     </div>


                                     <div className='w-[3rem] h-[3rem] ml-3 rounded-full bg-gray-300 flex justify-center items-center'>
                                     <Link to="">
                                     <FaTwitter  className='text-xl  text-white'/>
                                     </Link>
                                     </div>

                                

                                  </div>
                                  
                               </div>
                         </div>
                     </div>
                      <div className='w-full h-[1rem] my-4 border-b-2 border-gray-300'>
                        
                      </div>
                      <div className='mb-4 mt-6'>
                        <p className='text-center text-sm text-gray-600'>Copyright ©️2023 Everest Momo Pvt Ltd. All Rights Reserved</p>
                      </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer