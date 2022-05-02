import React,{useState} from 'react';
import {FaBars,FaTimes,FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assests/logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {

    const [nav,setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
    <div>
        <img src={Logo} className='mt-3' alt='Logo image' style={{width:'150px'}}/>
    </div>

    {/*    Menu   */}
    
        <ul className='hidden md:flex'>
            <li>
            <Link  to="home"  smooth={true}  duration={500} >
                Home
            </Link>
            </li>
            <li>
            <Link  to="about"  smooth={true}  duration={500} >
                About
            </Link>
            </li>
            <li>
            <Link  to="skills"  smooth={true}  duration={500} >
                Skills
            </Link>
            </li>
            <li>
            <Link  to="work"  smooth={true}  duration={500} >
                Work
            </Link>
            </li>
            <li>
            <Link  to="contact"  smooth={true}  duration={500} >
                Contact
            </Link>
            </li>
        </ul>
   

    {/*      Hamburger     */}

    <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
    </div>

    {/*      Mobile Menu     */}

    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col bg-[#0a192f] justify-center items-center'}>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home"  smooth={true}  duration={500} >
                Home
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about"  smooth={true}  duration={500} >
                About
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="skills"  smooth={true}  duration={500} >
                Skills
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="work"  smooth={true}  duration={500} >
                Work
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact"  smooth={true}  duration={500} >
                Contact
            </Link>
            </li>
        </ul>

     
    {/*     Social Icon    */}

    <div className='hidden lg:flex fixed flex-col top-[30%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a href='https://www.linkedin.com/in/sahil-kadam-b2a394191/' className='flex justify-between items-center w-full text-gray-300'>
                    LinkedIn <FaLinkedin size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a href='https://github.com/codwithSahil' className='flex justify-between items-center w-full text-gray-300'>
                   Github <FaGithub size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                <a href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=SUBJECT&to=worksahil82@gmail.com&body=BODY' className='flex justify-between items-center w-full text-gray-300'>
                    Mail <HiOutlineMail size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                <a href='https://drive.google.com/file/d/1zIoF4DXbti2PPHrP21wN-Te9qrimjjR_/view?usp=sharing' className='flex justify-between items-center w-full text-gray-300'>
                    Resume <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar