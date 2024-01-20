import React, { useRef } from 'react'
import { CiLocationArrow1 } from "react-icons/ci";
import { motion,useScroll } from 'framer-motion'


const Customer = () => {


   const ref = useRef()

    const{scrollYProgress} =useScroll(
      {
        target : ref,
        offset:["0 1","1.1 1"]
      }
    )

  return (
    <>
        <div className='px-4 pb-16 sm:px-100' >
           <motion.div 
           ref={ref} 
       style={{
         scale : scrollYProgress,
         opacity : scrollYProgress
       }}
           className='pt-12 md:flex'>
                <div className='md:w-1/2'>
                 <div className='flex justify-center items-center'>
                 <div className='w-full h-[23rem]'>
                    <img className='object-contain w-full h-full' src='image/man.png' alt='man'></img>
                 </div>
                 </div>
                </div>
                <div className='px-3 pt-7 md:w-1/2 md:pt-1'>
                   <div className='flex justify-center items-center w-full h-full'>
                   <div>
                        <h1 className='text-2xl font-semibold mb-5 text-cyan-900'>Why Customers <span className='text-ownColor'>Loves Us</span> ?</h1>
                        <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ut ipsa eveniet incidunt perspiciatis. Esse doloremque adipisci officia saepe perferendis dicta error dignissimos, temporibus veniam eligendi iste cumque vero. Cupiditate eveniet earum, fugit ullam consequuntur soluta officia nesciunt commodi minus.</p>
                        <div className="flex items-center mt-12 ml-6">
                            <button className="flex items-center px-6 py-3 rounded-xl text-sm bg-teal-600 text-gray-50" type="button">
                                Explore our Story <CiLocationArrow1 className="ml-2 text-xl" />
                            </button>
                         </div>
                     </div>
                   </div>   
                </div>
           </motion.div>
        </div>
    </>
  )
}

export default Customer