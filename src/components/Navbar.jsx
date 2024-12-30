import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { SlGlobe } from "react-icons/sl";
import { URL } from '../constants';


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="Tanvir Ahmed"/>
        </div>
        <div className="flex items-center m-8 justify-center gap-4 text-2xl">
            <a href={URL.GITHUB}>
                <FaGithub/>
            </a>
            <a href="#">
                <FaLinkedin/>
            </a>
            <a href="#">
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