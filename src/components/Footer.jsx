import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer () {
    return(

    <footer className=" fixed bottom-0 left-0 w-full pb-4  z-10 pointer-events-auto no-custom-cursor
    bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-500 group-hover:opacity-90">
        <div className='flex justify-center items-center gap-3'>
          <a href="https://www.linkedin.com/in/moibhub/" target='_blank' className="group">
            <AiFillLinkedin size={22} className=" text-[#afada5] group-hover:text-[#fbffda] transition-colors duration-300" />
          </a>
          <a href="https://github.com/modtherhub" target='_blank' className="group">
            <FaGithub size={22} className="text-[#afada5] group-hover:text-[#fbffda] transition-colors duration-300" />
          </a>
          <a aria-label="Send email to moibhub@gmail.com"
          href="mailto:moibhub@gmail.com" target='_blank' className="group">
            <SiGmail size={22} className="text-[#afada5] group-hover:text-[#fbffda] transition-colors duration-300" />
          </a>
        </div>
        <p className='items-center text-center p-1 pt-2 font-serif text-sm text-[#9c9b96]'
        >© All rights reserved 2025</p>
        
    </footer>)
}

export default Footer