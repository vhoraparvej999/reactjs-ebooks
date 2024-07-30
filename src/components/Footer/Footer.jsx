import React from 'react';
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt, FaTwitter,} from "react-icons/fa";
import footerLogo from "../../assets/images/logo.png";

const FooterLinks = [
  {
    title : "Home",
    link : "/#",
  },
  {
    title : "About",
    link : "/#about",
  },
  {
    title : "Contact",
    link : "/#contact",
  },
  {
    title : "Blog",
    link : "/#blog",
  },
];


const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-950">
        <div className="container">
            <div className="grid md:grid-cols-3 py-5">
              <div className='py-8 px-4'>
                <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>
                  Book Store
                </h1>
                <p>
                AT-Vadodara,Manubhai Tower.
                </p>
                <br />

                {/* Scoial Links */}
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Vadodara, Gujarat</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91 8460009840</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <a href='#'> <FaFacebook className='text-3xl hover:text-blue-600 hover:scale-100 transform duration-300' /></a>
                  <a href='#'> <FaInstagram className='text-3xl hover:text-pink-500 hover:scale-100 transform duration-300' /></a>
                  <a href='#'> <FaLinkedin className='text-3xl hover:text-blue-800 hover:scale-100 transform duration-300' /></a>
                  <a href='#'> <FaTwitter className='text-3xl hover:text-blue-400 hover:scale-100 transform duration-300' /></a>
                  <a href='#'> <FaGithub className='text-3xl hover:text-gray-300 hover:scale-100 transform duration-300' /></a>
                </div>
              </div>

              {/* Link Section */}
              <div className="grid grid-cols-3 sm:grid-cols-3 col-span-2 md:pl-10">
                <div>
                  <div className="py-8 px-4">
                      <h1 className="text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                      <ul className="flex flex-col gap-3">
                        {
                          FooterLinks.map((link) =>(
                            <li className='cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500'>
                              <span>&#11162;</span>
                              <span>{link.title}</span>
                            </li>
                          ))
                        }
                      </ul>
                  </div>
                </div>
                <div>
                  <div className="py-8 px-4">
                      <h1 className="text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                      <ul className="flex flex-col gap-3">
                        {
                          FooterLinks.map((link) =>(
                            <li className='cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500'>
                              <span>&#11162;</span>
                              <span>{link.title}</span>
                            </li>
                          ))
                        }
                      </ul>
                  </div>
                </div>
                <div>
                  <div className="py-8 px-4">
                      <h1 className="text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                      <ul className="flex flex-col gap-3">
                        {
                          FooterLinks.map((link) =>(
                            <li className='cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500'>
                              <span>&#11162;</span>
                              <span>{link.title}</span>
                            </li>
                          ))
                        }
                      </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center py-10 border-t-2 border-gray-300/50">
              Copyright &copy; 2024 All right reserved || Made with by PSV
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
