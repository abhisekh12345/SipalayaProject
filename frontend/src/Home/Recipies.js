import React, { useRef, useState } from 'react';
import ItemComp from '../Components/ItemComp';
import Buffitem from '../Components/Buffitem';
import Chickenitem from '../Components/Chickenitem';
import Vegitem from '../Components/Vegitem';
import { CiLocationArrow1 } from "react-icons/ci";
import { motion,useScroll } from 'framer-motion'



const Recipies = () => {


  const ref = useRef()

  const{scrollYProgress} =useScroll(
    {
      target : ref,
      offset:["0 1","1.1 1"]
    }
  )


  const itemdata = [
    {
      id: 1,
      title: 'momo',
      image: 'image/SteamMomo.png',
      price: '150',
    },
    {
      id: 2,
      title: 'FryMomo',
      image: 'image/FryMomo.png',
      price: '180',
    },
    {
      id: 3,
      title: 'C Momo',
      image: 'image/CMomo.png',
      price: '200',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('Buff');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className='pt-12 pb-16 bg-gray-50'>
        <motion.div 
          ref={ref} 
       style={{
         scale : scrollYProgress,
         opacity : scrollYProgress
       }}
        className='px-4 sm:px-100'>
          <div>
            <div>
              <h1 className='text-center mt-2 text-4xl text-cyan-700 font-semibold'>Our <span className='text-ownColor'> Most Popular</span> Recipes </h1>
              <p className='text-center mt-2 mb-12 text-gray-500'>Browse through a varieties of recipes with fresh ingredients selected only from the best places</p>
            </div>
            <div>
              <div className='border p-2 flex justify-center items-center'>
                <button
                  type='button'
                  className={`px-7 py-2 rounded-lg ${
                    selectedCategory === 'Buff'
                      ? 'bg-cyan-700 shadow-2xl shadow-gray-200 text-white'
                      : 'border border-black text-black'
                  }`}
                  onClick={() => handleCategoryClick('Buff')}
                >
                  <span className='font-semibold'>Buff</span>
                </button>
                <button
                  type='button'
                  className={`px-7 py-2 rounded-lg ml-4 ${
                    selectedCategory === 'Chicken'
                      ? 'bg-cyan-700 shadow-2xl shadow-gray-200 text-white'
                      : 'border border-black text-black'
                  }`}
                  onClick={() => handleCategoryClick('Chicken')}
                >
                  <span className='font-semibold'>Chicken</span>
                </button>
                <button
                  type='button'
                  className={`px-7 py-2 rounded-lg ml-4 ${
                    selectedCategory === 'Veg'
                      ? 'bg-cyan-700 shadow-2xl shadow-gray-800 text-white'
                      : 'border border-black text-black'
                  }`}
                  onClick={() => handleCategoryClick('Veg')}
                >
                  <span className='font-semibold'>Veg</span>
                </button>
              </div>
            </div>
            <div className='mt-12'>
              {selectedCategory === 'Buff' && <Buffitem />}
              {selectedCategory === 'Chicken' && <Chickenitem />}
              {selectedCategory === 'Veg' && <Vegitem />}
            </div>
            <div>
            <div className="flex items-center justify-center mt-12 ml-6">
                            <button className="flex items-center px-6 py-3 rounded-xl text-sm bg-teal-600 text-gray-50" type="button">
                                Explore more food <CiLocationArrow1 className="ml-2 text-xl" />
                            </button>
                         </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Recipies;
