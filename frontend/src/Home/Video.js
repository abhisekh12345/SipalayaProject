import React from 'react'
import QualityComp from '../Components/QualityComp'
import { CiLocationArrow1 } from "react-icons/ci";

const Video = () => {
   
    const qualityData = {
        img:"image/Quality.png",
        title : "Quality food",
        para : "Only the best food with top quality products and ingredients"
    }

    const privatePartyData ={
        img:"image/party.png",
        title : "Private Party",
        para : "Get the best food for all your private parties and gatherings"
    }

    const categringData ={
        img:"image/Chef.png",
        title : "Categring",
        para : "Get the best food for any occasions and gatherings"
    }

  return (
     <>
        <div className='mt-16  pb-11'>
            <div>
               <h1 className='text-center text-4xl pt-12 pb-20 text-cyan-900'> <span className='text-ownColor'>We Ofer People</span> The Service They Want</h1>
            </div>
            <div>
                 <img className='w-full' src='image/Video.png' alt='video'></img>
            </div>
            <div>
                <div className='px-4 mt-8 sm:px-100'>
                    <div className='lg:flex'>
                        <div className='py-10 lg:w-4/12'>
                           <QualityComp image={qualityData.img} title={qualityData.title} paragraph={qualityData.para} />
                        </div>
                        <div className='py-10 lg:w-4/12'>
                           <QualityComp image={privatePartyData.img} title={privatePartyData.title} paragraph={privatePartyData.para} />  
                        </div>
                        <div className='py-10 lg:w-4/12'>
                        <QualityComp image={categringData.img} title={categringData.title} paragraph={categringData.para} />  
                           
                        </div>
                    </div>
                </div>
            </div>
             <div>
              
                  <div className="flex justify-center items-center mt-9 ">
                            <button className="flex items-center px-6 py-3 rounded-xl text-sm bg-teal-600 text-gray-50" type="button">
                                Explore our Service <CiLocationArrow1 className="ml-2 text-xl" />
                            </button>
                         </div>
             </div>
        </div>
     </>
  )
}

export default Video