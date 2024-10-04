import React from 'react'
import Footerlogo from '../../assets/logo.png'
import Banner from '../../assets/website/footer.jpg'
import { 
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
 } from 'react-icons/fa'

const BannerImg = {
    backgroundImage:`url(${Banner})`,
    backgroundPosition:'bottom',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    height:'100%',
    width:'100%', 
}

const FooterLinks = [
    {
        title:'Home',
        link:'/#'
    },
    {
        title:'About',
        link:'/#about'
    },
    {
        title:'Contact',
        link:'/#contact'
    },
    {
        title:'Blog',
        link:'/#blog '
    },
]

const Footer = () => {
  return (
    <div style={BannerImg}
     className='text-white mb-20'>
      <div className='container'>
        <div
        data-aos='zoom-in'
        className='grid md:grid-cols-3 pb-44 pt-5'>
            {/* Company details */}
            <div>
                <h1
                className=' sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                    <img src={Footerlogo} alt=""
                    className='max-w-[50px]'
                    />
                    Shopsy</h1>
                <p>Shopsy is a revolutionary e-commerce platform designed to empower individuals to shop and sell products effortlessly. It brings the latest trends right to your fingertips—all at affordable prices.</p>
            </div>

            {/* Footer Links details */}
            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                <div>
                    <div className='py-8 px-4'>
                        <h1
                        className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>
                            Important Links
                            </h1>
                        <ul className='flex flex-col gap-3'>
                            { FooterLinks.map((link) => (
                                    <li 
                                    className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}
                                    >
                                        <span>{link.title}</span>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='py-8 px-4'>
                        <h1
                        className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>
                             Links
                            </h1>
                        <ul className='flex flex-col gap-3'>
                            { FooterLinks.map((link) => (
                                    <li 
                                    className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}
                                    >
                                        <span>{link.title}</span>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
                
                {/* social link */}

                <div>
                    <div className='flex items-center gap-3 mt-6'>
                        <a href="#">
                            <FaInstagram className='text-3xl'/>
                        </a>
                        <a href="#">
                            <FaFacebook className='text-3xl'/>
                        </a>
                        <a href="#">
                            <FaLinkedin className='text-3xl'/>
                        </a>
                    </div>
                    <div className='mt-6'>
                        <div className='flex items-center gap-3 '>
                            <FaLocationArrow/>
                            <p>Pune, Maharashtra</p>
                        </div>
                         
                        <div className='flex items-center gap-3 mt-3'>
                            <FaMobileAlt/>
                            <p>+91 8805720373</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
