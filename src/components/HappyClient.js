import React from 'react';
import personImage from '../assets/images/person3.jpg'

export const HappyClient=()=>{
    const styleborder={
        border:"2px solid red"
    }
    return (
        <section className="happy-client-section"  style={styleborder}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="slider">
                            <p>TESTIMONY</p>
                            <h2>HAPPY CLIENTS</h2>

                            <div className="slider-content">
                                <img src={personImage} className="rounded" alt="person" />
                                <p>Person Name</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum animi fugiat eos esse temporibus tempore praesentium placeat ipsum quisquam suscipit.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}