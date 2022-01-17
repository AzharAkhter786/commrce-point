import React from 'react'
import Shoes from '../assets/images/Shoes1.png'
import Text from '../assets/images/text.png'

export const Slider=()=>{
    return(
        <section className="slider-section">
            <div className="overlay"></div>
               <div className="container">
           <div className="slider-content">
                   <div className="row">
                       <div className="col-12 col-sm-12 col-md-12">
                           <div className="card-show">
                               <h1>STORKLEATHER</h1>
                               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda vel praesentium </p>
                               <button className="primary-btn" ><a href="#home">Show Now</a></button>
                               <div className='card-img'>
                               <img src={Shoes} className='shoesImg' alt="shoes" />
        
                               
                               </div>
                               
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </section>
    )
}