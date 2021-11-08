import React from 'react';
import personImage from '../assets/images/person3.jpg'
import {Heading} from '../components/Heading';
export const HappyClient=()=>{

    return (
        <section className="happy-client-section"  >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="slider">
                              <Heading/>

                            <div className="slider-content">
                                <figure>    
                                <img src={personImage} className="rounded" alt="person" />
                                </figure>
                                 <blockquote>
                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                       Labore cumque ex provident eius culpa officiis debitis architecto! Perferendis tempora quam iusto veritatis est! Nihil autem praesentium vero laborum, quis illum sequi impedit odio dolore, fuga sit recusandae iusto unde adipisci sunt soluta ullam assumenda accusamus omnis laboriosam, rem qui asperiores.</p>
                                 </blockquote>
                           
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}