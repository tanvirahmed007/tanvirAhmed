import logo from '../assets/logo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { SlGlobe } from "react-icons/sl";
import { URL } from '../constants';


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-28" src={logo} alt="Tanvir Ahmed"/>
        </div>
        <div className="flex items-center m-8 justify-center gap-4 text-2xl">
            <a href={URL.github}>
                <FaGithub/>
            </a>
            <a href={URL.linkedin}>
                <FaLinkedin/>
            </a>
            <a href={URL.instagram}>
                <FaInstagram/>
            </a>
            <a href={URL.portfolio}>
                <SlGlobe/>
            </a>
            
        </div>
    </nav>
  )
}

export default Navbar