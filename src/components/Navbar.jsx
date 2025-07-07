import React from 'react'
import logo from '../assets/Logo.png';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp  } from 'react-icons/fa';
function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
      <a href="#"> <img className='mx-2 w-24 md:w-17 h-auto' src={logo} alt='logo' /></a>
      <a href="#"> <strong>SDE</strong></a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
      <a href="https://www.linkedin.com/in/malla-chanikya-satish" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='w-6 h-6 md:w-8 md:h-8' />
        </a>
        <a href="https://github.com/chanikya23" target="_blank" rel="noopener noreferrer">
          <FaGithub className='w-6 h-6 md:w-8 md:h-8' />
        </a>
        <a href="mailto:mallachanikya22@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope  className='w-6 h-6 md:w-8 md:h-8' />
        </a>
        <a href="https://wa.me/918367339798" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp  className='w-6 h-6 md:w-8 md:h-8' />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
