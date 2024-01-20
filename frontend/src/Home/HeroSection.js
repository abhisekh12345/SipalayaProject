import React from 'react'
import { CiLocationArrow1 } from "react-icons/ci";

export const HeroSection = () => {
  return (
    <>
        <div className='w-full h-[50rem] md:h-[40rem] bg-cover bg-center bg-no-repeat px-4 sm:px-100' style={{backgroundImage : "url(image/banner1.png)"}}>
                <div className='h-full w-full lg:flex'>
                        <div className='flex justify-center items-center lg:w-1/2'>
                             <div className=''>
                                   <div>
                                    <p className='uppercase tracking-widest text-gray-400 mb-2'>Resturant</p>
                                    <div className='flex items-center'>
                                        <h1 className='text-6xl mr-5 font-bold text-cyan-900'>The </h1>
                                        <img src='image/one.png' alt='one'></img>
                                    </div>
                                    <h1 className='text-6xl font-bold text-cyan-900 Momomo'>Momo <span></span></h1>
                                    <p className='capitalize mt-1 font-semibold text-cyan-900'>more than <span className='text-2xl text-ownColor'>20 Varieties</span> of momo available for you</p>
                                   </div>
                                   <div className="flex items-center mt-12 ml-6">
                                      <button className="flex items-center px-6 py-3 rounded-xl text-sm bg-teal-600 text-gray-50" type="button">
                                            Explore more food <CiLocationArrow1 className="ml-2 text-xl" />
                                      </button>
                                   </div>
                             </div>
                        </div>
                        <div className='flex justify-center items-center lg:w-1/2 '>
                         <div className='mt-12 lg:mt-0'>
                            <div className='w-full h-[12rem] lg:h-[22rem]'>
                                <img className='w-full h-full object-contain' src='image/Frame.png' alt='frame'></img>
                            </div>
                         </div>
                        </div>
                </div>
        </div>
    </>
  )
}
