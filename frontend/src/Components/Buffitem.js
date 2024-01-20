import React from 'react'
import ItemComp from './ItemComp'

const Buffitem = () => {

    const itemdata = [
        {
            id: 1,
            title :"momo",
            image : "image/SteamMomo.png",
            price : "150"
        },
        {
            id: 2,
            title :"FryMomo",
            image : "image/FryMomo.png",
            price : "180"
        },
        {
            id: 3,
            title :"C Momo",
            image : "image/CMomo.png",
            price : "200"
    
        }
      ]

  return (
   <>
     <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5'>
                 {
                    itemdata.map((item) => {
                        const{id,title,image,price} = item
                        return(
                            <div key={id}>
                            <ItemComp
                            image={image} 
                            title={title} 
                            price={price} />
                            </div>
                        )
                    })
                   }
                 </div>
   </>
  )
}

export default Buffitem