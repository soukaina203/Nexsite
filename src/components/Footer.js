import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
    return (
        <div className='flex justify-between h-[6rem] items-center'>
            <img src='logo.png' className='w-[2.8rem] h-[3rem] ' />


                <ul  className='flex items-center justify-center gap-2 pr-3'>
                    <li className='flex items-center justify-center gap-2'>
                        <FaPhoneAlt />
                        <a href="">+212 612563245</a>
                    </li>

                    <li className='flex items-center justify-center gap-2'>
                        <MdOutlineMailOutline />
                        <a href="">nexsite11@gmail.com</a>
                    </li>

                    

                    <li className='flex items-center justify-center gap-2'>
                        <FaInstagram />
                        <a href="">instagram</a>
                    </li>

                    <li className='flex items-center justify-center gap-2'>
                            <FaFacebookF />
                        <a href="https://www.facebook.com/profile.php?id=61564815623223" >
                            Nexsite</a>
                    </li>
                </ul>
        </div>
    )
}

export default Footer
