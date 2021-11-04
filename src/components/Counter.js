import React from 'react';

export const Counter=()=>{
    const styleborder={
        border:"2px solid red"
    }
    return(
        <section className="country-section" style={styleborder}>
         <div className="container">
             <div className="row">
                 <div className="col-md-4 col-sm-12 col-lg-4">
                     <div className="card-counter">
                         <p><span><i>Lorem, ipsum.</i></span></p>
                         <p>number</p>
                         <p>CREATIVITY FUEL</p>
                     </div>
                 </div>
                 <div className="col-md-4 col-sm-12 col-lg-4">
                     <div className="card-counter">
                         <p><span><i>Mollitia, impedit.</i></span></p>
                         <p>number</p>
                         <p>CREATIVITY FUEL</p>
                     </div>
                 </div>
                 <div className="col-md-4 col-sm-12 col-lg-4">
                     <div className="card-counter">
                         <p><span><i>Unde, dolorum!</i></span></p>
                         <p>number</p>
                         <p>CREATIVITY FUEL</p>
                     </div>
                 </div>
             </div>
         </div>
        </section>
    )
}