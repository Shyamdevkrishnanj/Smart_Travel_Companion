import React, { useEffect } from 'react';
import './footer.css';
import video2 from './video2.mp4';
import {Fisend} from 'react-icons/fi';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AioutlineTwitter} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {FaTripadvisor} from 'react-icons/fa';
import {FiChevronRight} from 'react-icons/fi';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, []);
    return (
    <section className="footer">
         <div className="videoDiv">
            <video src = {video2} loop autoplay muted
            type="viedo/mp4"></video>
         </div>

         <div className="secContent container">
            <div className="contactDiv flex">
                <div data-aos="fade-up" classname="text">
                    <small>Keep in touch</small>
                    <h2>Travel with us</h2>
                </div>

                <div className="inputDiv flex">
                    <input data-aos="fade-up" type="text" 
                    placeholder="Enter your email Address"/>
                    <button data-aos="fade-up"
                    className="btn flex"type='submit'>
                        SEND <Fisend classname="icon"/>
                    </button>
                </div>
            </div>

            <div className="footerCard flex">
                <div className="footerIntro Flex">
                    <div className="logoDiv">
                        <a href="#" className='logo flex'>
                          <MdOutlineTravelExplore
                          className="icon"/> Travel.
                        </a>
                    </div>

                        <div data-aos="fade-up" 
                        className="footerParagraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam, voluptatum.
                        </div>

                         <div className="footerSocials flex">
                            <AioutlineTwitter className="icon"/>
                            <AiFillYoutube className="icon"/>
                            <AiFillInstagram className="icon"/>
                            <FaTripadvisor className="icon"/>
                         </div>
                </div>
               
                <div className="footerLinks grid">
                    {/*Group 1*/}
                    <div data-aos="fade-up"
                    data-aos-duration="3000"
                    className="linkGroup">
                        <span className="groupTitle">
                            OUR AGENCY
                        </span>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Services
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Insurance 
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Agency 
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Tourism 
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Payment 
                        </li>

                    </div>

                    {/*Group 2*/}
                    <div data-aos="fade-up"
                    data-aos-duration="4000"
                    className="linkGroup">
                        <span className="groupTitle">
                            PARTNERS 
                        </span>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            P1
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            P2 
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            P3 
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            P4
                        </li>

                    </div>

                    {/*Group 3*/}
                    <div data-aos="fade-up"
                    data-aos-duration="5000"
                     className="linkGroup">
                        <span className="groupTitle">
                            LAST MINUTE
                        </span>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            London
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Venice 
                        </li>

                    </div>


                </div>

            </div>

         </div>
    </section>
    );
}

export default Footer;

