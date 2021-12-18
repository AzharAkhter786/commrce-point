import React from "react";
import logoImg from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHome } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

export const Header=()=>{
 return(
    <>
    <header className="header">
     <div className="container">
     <div className="row ">
        <div className="col-md-2">
          <div className="header-logo text-center">
                <a href="#home" className="header-brand"><img src={logoImg} alt="company Logo" /></a>
          </div>
        </div>
        <div className="col-md-8">
          <div className="header-menu">
               <ul>
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="about">About Us</Link></li>
                 <li><Link to="shop" >Shops</Link></li>
                 <li><Link to={`/product/${1}`} key={1} >Product-detail</Link></li>
                 
                 <li><Link to="login">Login</Link></li>
                 
               </ul>
          </div>
        </div>
        <div className="col-md-2">
          <div className="header-social-links text-right">
            <a href="#home" data-tip data-for='happyFace1'>  <FontAwesomeIcon icon={faHome} />
            <ReactTooltip id='happyFace1' place="top" type="dark" effect="float">
            <span>face 1</span>
            </ReactTooltip>
            </a>
            <a href="#home" data-tip data-for='happyFace2'>  <FontAwesomeIcon icon={faHome} />
            <ReactTooltip id='happyFace2' place="top" type="dark" effect="float">
            <span>face 2</span>
            </ReactTooltip>
            </a>
            <a href="#home" data-tip data-for='happyFace3'>  <FontAwesomeIcon icon={faHome} />
            <ReactTooltip id='happyFace3' place="top" type="dark" effect="float">
            <span>face 3</span>
            </ReactTooltip>
            </a>
            <a href="#home" data-tip data-for='happyFace4'>  <FontAwesomeIcon icon={faHome} />
            <ReactTooltip id='happyFace4' place="top" type="dark" effect="float">
            <span>face 4</span>
            </ReactTooltip>
            </a>
            <a href="#home" data-tip data-for='happyFace5'>  <FontAwesomeIcon icon={faHome} />
            <ReactTooltip id='happyFace5' place="top" type="dark" effect="float">
            <span>face 5</span>
            </ReactTooltip>
            </a>
     
          </div>
        </div>
      </div>
       </div>  
    </header>
  </>

 )
}