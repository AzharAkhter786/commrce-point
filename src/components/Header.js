import React from "react";
import logoImg from '../assets/images/logow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars  } from '@fortawesome/free-solid-svg-icons';

import ReactTooltip from 'react-tooltip';
import Slider from "react-slick";
export const Header=()=>{
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
 return(
    <>
    <header className="top-navbar">
     <div className="container">
     <div className="row">
        <div className="col-6 col-sm-6 col-md-6">
        <a className="top-navbar-brand" href="#home">
        <img src={logoImg} alt="logo"  />
        </a>
        </div>
        <div className="col-6 col-sm-6 col-md-6">
         <div className="top-navbar-links float-child-1 ">
         <ul>
           <li>Lorem.</li>
           <li>Aliquam?</li>
           <li>Architecto!</li>
           <li>Laborum.</li>
           <li>Expedita.</li>
           <li>Ex.</li> 
         </ul>
         </div>
         <div className="top-navbar-icons float-child-2">
         <a href="#home" data-tip data-for='happyFace1'>  <FontAwesomeIcon icon={faBars} height={24} width={24} color="white" />
          <ReactTooltip id='happyFace1' place="top" type="dark" effect="float">
          <span>menu</span>
          </ReactTooltip>
          </a>
        </div>
        </div>
      </div>
       </div>  
    </header>
    {/* <div className="container">
    <div className="row">
    <div className="col-12 col-md-12">
    <Slider {...settings} className="slider">
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>  
    </div>  

    </div>


    </div>
   */}
  </>

 )
}

