import React from 'react'
import Slider from 'react-slick'
import Img1 from '../../assets/star/rohit.jpeg'
import Img2 from '../../assets/star/shraddha.jpeg'
import Img3 from '../../assets/star/rahul.jpeg'
import Img4 from '../../assets/star/tejashri.jpeg'

const TestimonialData = [
    {
        id:1,
        name:'Rohit Sharma',
        text:'Great customer service until I signed the very expensive contract during which it was never explained to me that I/my team would have to do everything to set it up. When I offered to pay to have them do it for me they refused.',
        img:Img1,
    },
    {
        id:2,
        name:'Shraddha Kapoor ',
        text:'The software is fully featured and you can track all of your progress easily and granular data. We can easily customize everything about campaigns and change them as our marketing changes. Automation of payouts and tracking pay is super easy and one click approval, no other system has this. ',
        img:Img2,
    },
    {
        id:3,
        name:'Rahul Dravid',
        text:'Had everything we needed out of the box. Full tracking of all referrals and referrers. Easy to integrate with our other systems, and our customers love it! We have seen a fantastic response from our customers and are generating hundreds of ambassadors. ',
        img:Img3,
    },
    {
        id:4,
        name:'Tejashri Pradhan',
        text:'The product itself is great and can do everything we need to earn more customer leads. The success team really helped us understand and develop our goals. Great results.',
        img:Img4,
    },
]

const Testimonial = () => { 

    var settings = {
        dots:true,
        arrows:false,
        infinite:true,
        speed:500,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:'linear',
        pauseOnHover:true,
        pauseOnFocus:true,
        responsive:[
            {
                breakpoint:10000,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1,
                    infinite:true,
                },
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:2, 
                    slidesToScroll:1,
                    initialSlide:2,
                },
            },
            {
                breakpoint:640,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },     
        ]
    }

  return (
    <div className='py-10 mb-10'>
      <div className='container'>
        {/* header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p data-aos='fade-up' className='text-sm text-primary'>
                What our customers are saying
                </p>
            <h1 data-aos='fade-up' className='text-3xl font-bold'>
                Testimonials
                </h1>
            <p data-aos='fade-up' className='text-xs text-gray-400'>
            Here are some engaging testimonial phrases you can use to showcase customer satisfaction 
                </p>
        </div>
        {/* Testimonial cards */}
        <div 
        data-aos='zoom-in'>
            <Slider {...settings}>
                {TestimonialData.map((data) => (
                    <div className='my-6'>
                    <div
                    key={data.id}
                    className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'
                    >
                        <div className='mb-4 '>
                            <img src={data.img} 
                            alt="" 
                            className='rounded-full w-20 h-20'/>
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                            <div className='space-y-3'>
                            <p className='text-xs text-gray-500'
                            >{data.text}</p>
                            <h1 className='tetx-xl font-bold text-black/80 dark:text-light'>{data.name}</h1>
                            </div>  
                        </div>
                        <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>
                        ,, </p>
                    </div>
                </div>
                ))  
                }</Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
