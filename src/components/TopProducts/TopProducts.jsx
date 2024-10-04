import React from 'react'
import Img1 from '../../assets/shirt/shirt.png'
import Img2 from '../../assets/shirt/shirt2.png'
import Img3 from '../../assets/shirt/shirt3.png'
import {FaStar} from "react-icons/fa"

const ProductsData = [
    {
        id:1,
        img:Img1,
        title:'Printed shirt',
        description:'Turn heads with this bold and stylish printed shirt, perfect for adding a pop of personality to any outfit. Featuring a unique, eye-catching design, this shirt effortlessly blends comfort with fashion.',
       
    },
    {
        id:2,
        img:Img2,
        title:'Casual Wear',
        description:"Our casual wear collection has everything you need to stay effortlessly chic without compromising on ease. Whether you're running errands, grabbing coffee, or relaxing on the weekend, our casual pieces are designed to keep you looking and feeling your best.",
       
    },
    {
        id:3,
        img:Img3,
        title:'Women shirt',
        description:"Elevate your wardrobe with our Chic Women's Shirt, designed for both comfort and style. This versatile shirt is perfect for any occasion, whether you’re dressing up for a night out or keeping it casual during the day.",
       
    },
]

const TopProducts = ({handleOrderPopup}) => {
  return (
    <div>
        <div className='container'>
            {/* Header Section */} 
            <div className='text-left mb-24 '>
            <p data-aos='fade-up' className='text-sm text-primary'>
                Top Rated Products for you
                </p>
            <h1 data-aos='fade-up' className='text-3xl font-bold'>
                Best Products
                </h1>
            <p data-aos='fade-up' className='text-xs text-gray-400'>
            Elevate your style with the top picks from our fashion-forward customers! Our best-selling clothing collection is packed with trendy, versatile, and high-quality pieces, perfect for every occasion. </p>
        </div>

             {/* Body Section */}
             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                {ProductsData.map((data) => (
                        <div 
                           data-aos='zoom-in'
                           className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]' >

                            {/* image section */}
                            <div className='h-[100px]'>
                                <img src={data.img} alt=""
                                className='max-w-[140px] block mx-auto transform -translate-y-20  group-hover:scale-105 duration-300 drop-shadow-md'/>
                            </div>

                            {/* details section */}
                            <div className='p-4 text-center'>

                                {/* Star rating */}
                                <div className='w-full flex items-center justify-center gap-1'>
                                    <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-yellow-500'/>
                                </div>
                                <h1 className='text-xl font-bold'>{data.title}</h1>
                                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                                <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'
                                onClick={handleOrderPopup}
                                >
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))}
             </div>
        </div>
    </div>
  )
}

export default TopProducts
