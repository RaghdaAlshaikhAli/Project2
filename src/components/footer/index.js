import React from 'react'
import './style.css'
import { IoLocationOutline } from "react-icons/io5";
import logo from '../../assets/images/logo2.png'
import { BsFillTelephoneFill } from "react-icons/bs";


const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer_content'>
                <div className='footer-social-icon'>
                    <ul>
                        <li>
                            <IoLocationOutline /> كفر الشيخ - مطعم فودكاست <br /> شارع مستشفى الزهراء - أمام معهد الفتيات
                        </li>
                        <li>
                            <BsFillTelephoneFill /> 01069242307
                        </li>
                    </ul>
                </div>
                <div className='footer_content_left'>
                    <img src={logo} alt='' loading='lazy'/>
                </div>
            </div>
        </div>
    )
}

export default Footer
