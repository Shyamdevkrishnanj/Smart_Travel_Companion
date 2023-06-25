import React from "react";
import './home.css'
import './home.scss';
import video from '../../video for website/video.mp4'
import {GrLocation} from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { SiTripadvisor } from 'react-icons/sh'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'
const Home = () => {
    return (
        <section className="home">
            <div className="overlay"></div>
            <video src = {video}muted autoPlay loop type="video/mp4">/</video>
       
       
           <div className="homeContent container"></div>
              <div className="textDiv">
                <span className="smallTexxt">
                    Our Packages
                </span>
              </div>

                <h1 className="homeTitle">
                    Search your holday
                </h1>
                <div className="carDiv grid">
                   <div className="dateInput">
                     <label htmlFor="city" >Select your date:</label>
                      <div className="input flex">

                        <input type = "date" />
                           
                      </div>
                      <div className="priceInput">
                       <div className="label_total flex">
                        <label htmlFor="price">Max price:

                        </label>
                        <h3 className="total">$5000</h3>
                      </div>
                   
                   <div className="input flex ">
                    <input type="range" max="5000" min ="1000">
                        
                    </input>
                    <div className="searchOptions flex">
                      <HiFilter classNmae="icon"/>
                      <span>MORE FILTERS</span>

                      <div className="homeFooterIcons flex">
                        <div className="rightIcons">
                        <FiFacebook className="icon"/>
                        <AiOutlineInstagram className="icon" />
                        <SiTripadvisor  className="icon" />
                          </div>
                          <div className="leftIcons">
                         <BsListTask className="icon" /> 
                         <TbApps className="icon" /> 
                        </div>
                    </div>
                   </div>
                   
                   </div>
                   
                   
                   </div>
                   <div className="destinationInput">
                     <label htmlFor="city" >Search Your destination:</label>
                      <div className="input flex">

                        <input type = "text"  placeholder="Enter name here...."/>
                            <GrLocation className="icon"/>
                      </div>
                   
                   
                   
                   </div>
                </div>
              </div>
        </section>
    )
}

export default Home;