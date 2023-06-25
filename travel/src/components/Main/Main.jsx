import React from "react";
import './main.css'
import './main.scss';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi' 
import img from 'C:\\Users\\navne\\Documents\\GitHub\\Smart_Travel_Companion\\travel\\src\\Assets\\img(1).jpeg'
import img2 from 'C:\\Users\\navne\\Documents\\GitHub\\Smart_Travel_Companion\\travel\\src\\Assets\\img(2).jpeg'
import img3 from 'C:\\Users\\navne\\Documents\\GitHub\\Smart_Travel_Companion\\travel\\src\\Assets\\img(3).jpeg'
import img4 from 'C:\\Users\\navne\\Documents\\GitHub\\Smart_Travel_Companion\\travel\\src\\Assets\\img(4).jpeg'
import img5 from 'C:\\Users\\navne\\Documents\\GitHub\\Smart_Travel_Companion\\travel\\src\\Assets\\img(5).jpeg'
import img6 from 'C:\\Users\\navne\\Documents\\GitHub\\Smart_Travel_Companion\\travel\\src\\Assets\\img(6).jpeg'
import img7 from 'C:\\Users\\navne\\Documents\\GitHub\\Smart_Travel_Companion\\travel\\src\\Assets\\img(7).jpeg'

const Data =[
    
    {
     id:1,
     imgSrc: img,
     destTitle: 'bora bora',
     location: 'Newzealand',
     grade: 'CULTURAL RELAX',
     fees: '$700',
     description: 'the epitome of romance, bora bora is one of the best places to travel'

    },

    {
        id:2,
        imgSrc: img2,
        destTitle: 'great barrier reef',
        location: 'australia',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'the epitome of romance, bora bora is one of the best places to travel'

    },
    {
        id:3,
        imgSrc: img3,
        destTitle: 'machu pichu',
        location: 'peru',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'the epitome of romance, bo'
    },



    {
        id: 4,
        imgSrc: img4,
        destTitle: 'cappodocia',
        location: 'turkey',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'th'

    },

    {
        id: 5,
        imgSrc: img5,
        destTitle: 'guanajuato',
        location: 'mexico',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'th'
    },


    {
        id: 6,
        imgSrc: img6,
        destTitle: 'cinque terre',
        location: 'italy',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'th'
    },


    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Angor watt',
        location: 'cambodia',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'th'
    },


    
]

const Main = () => {
    return (
        <section className='main container section'>
            <div className="secTitle">
                <h3 className="title">
                  Most visited destinations

                </h3>

            </div>
            <div className="secContent grid">

              {
                Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                    return(
                        <div key={id}className="singleDestination">
                          <div className="imageDiv">
                            <img src={imgSrc} alt={destTitle}/>
                            </div>  
                            <div className="cardInfo">
                              <h4 className="destTiltle">{destTitle}</h4> 
                              <span className="continent flex">
                                    <HiOutlineLocationMarker classNmae='icon'/>
                                    <span className="name">{location}</span>
                              </span>
                              <div className="fees flex">
                                <div className="grade">
                                   <span>{grade}<small>+1</small></span> 
                                </div>
                                <div className="price">
                                    <h5>{fees}</h5>

                                </div>

                              </div>
                               <div className="desc">
                                <p>{description}</p>
                               </div>

                               <button classNme='btn flex'>
                                    DETAILS <HiOutlineClipboardCheck className=''/>
                               </button>


                            </div>

                        </div>
                    )
                })
              }  

            </div>
 
        </section>
        
    )
}

export default Main;