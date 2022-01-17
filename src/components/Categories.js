import React from 'react';
import cat from '../assets/images/cat2.png';
export const  Categories=()=>{
   return(
   <section className="categories-section" >
      <div className="container">
         <div className="row">
            <div className="col-6">
               <div className="cat-card">
                  <img src={cat} alt="cat-image" />
               </div>
            </div>
            <div className="col-6">
               <div className="cat-card">
                  <img src={cat} alt="cat-image" />
               </div>
            </div>
            <div className="col-6">
               <div className="cat-card">
                  <img src={cat} alt="cat-image" />
               </div>
            </div>
            <div className="col-6">
               <div className="cat-card">
                  <img src={cat} alt="cat-image" />
               </div>
            </div>
            

            
         </div>
      </div>
   </section>)
}