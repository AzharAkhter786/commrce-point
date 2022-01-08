import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars  } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';


export const BottomNavBar=()=>{
 return(
    <>
    <section className="bottom-navbar">
     <div className="container-fluid">
     <div className="row">
      <div className="col-3 col-sm-3 col-md-3 justify-content-center ">
        <div className="bottom-icons">
        <a href="#home" data-tip data-for='happyFace1'>  
        <FontAwesomeIcon icon={faBars} color="white"  />          
          <ReactTooltip id='happyFace1' place="top" type="dark" effect="float">
          <span>menu</span>
          </ReactTooltip>
          <span>Home</span>
        </a>
        </div>
     
     
      </div>
      <div className="col-3 col-sm-3 col-md-3 justify-content-center">
        <div className="bottom-icons">
        <a href="#home" data-tip data-for='happyFace1'>  
        <FontAwesomeIcon icon={faBars} color="white"  />          
          <ReactTooltip id='happyFace1' place="top" type="dark" effect="float">
          <span>menu</span>
          </ReactTooltip>
          <span>Home</span>
        </a>
        </div>
     
     
      </div>
      <div className="col-3 col-sm-3 col-md-3 justify-content-center">
        <div className="bottom-icons">
        <a href="#home" data-tip data-for='happyFace1'>  
        <FontAwesomeIcon icon={faBars} color="white"  />          
          <ReactTooltip id='happyFace1' place="top" type="dark" effect="float">
          <span>menu</span>
          </ReactTooltip>
          <span>Home</span>
        </a>
        </div>
     
     
      </div>
      <div className="col-3 col-sm-3 col-md-3 justify-content-center">
        <div className="bottom-icons">
        <a href="#home" data-tip data-for='happyFace1'>  
        <FontAwesomeIcon icon={faBars} color="white"  />          
          <ReactTooltip id='happyFace1' place="top" type="dark" effect="float">
          <span>menu</span>
          </ReactTooltip>
          <span>Home</span>
  
        </a>
        </div>
     
     
      </div>
      </div>
    </div>  
    </section>
    
  </>

 )
}

