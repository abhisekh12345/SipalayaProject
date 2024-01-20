import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const HappyCoutomer = () => {
  return (
    <>
       <div className='bg-gray-50 pt-10 pb-10'>
            <div className='px-4 sm:px-100'>
                <div className='lg:flex py-9'>
                    <div className='lg:w-1/2'>
                          <div className='w-full h-full flex justify-center items-center'>
                             <div className='pl-12'>
                             <h1 className='text-4xl text-cyan-900 '>200+ <span className='text-ownColor'>Happy Customers</span></h1>
                             <p className='text-sm text-cyan-900 font-semibold mb-7'>What our customeers say about us</p>
                             <p className='italic text-xl w-[86%] text-gray-500'>“Only the best momo you can find in the market. Different Varieties of momo to choose from. Will be visiting again soon” </p>
                             <h1 className='mt-6 mb-6 text-lg font-semibold text-cyan-950'>Livia Dias</h1>
                             <div className='flex mb-6'>
                                <div className='border-2 border-gray-300 p-3 rounded-lg'>
                                   <FaArrowLeft className='text-cyan-800' />
                                </div>
                                <div className='ml-2 border-2 border-gray-300 p-3 rounded-lg'>
                                  <FaArrowRight className='text-cyan-800' />
                                </div>
                             </div>
                             </div>
                            
                          </div>
                    </div>
                    <div className='lg:w-1/2'>
                          <div className='w-full h-full flex justify-center items-center'>
                               <div>
                                   <img src='image/Happyman.png' alt='happyman'></img>
                               </div>
                          </div>
                    </div>
                </div>
            </div>
       </div>
    </>
  )
}

export default HappyCoutomer