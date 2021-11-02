import React from "react";
import logoImg from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHome } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';


export const Header=()=>{
 return(
    <>
    <header className="header">
     <div className="container-fluid">
     <div className="row ">
        <div className="col-md-2">
          <div className="header-logo text-center">
                <a href="#home" className="header-brand"><img src={logoImg} alt="company Logo" /></a>
          </div>
        </div>
        <div className="col-md-8">
          <div className="header-menu">
               <ul>
                 <li><a href="#home">Home</a></li>
                 <li><a href="#news">pages</a></li>
                 <li className="dropdown"><a href="#home">categoires</a>
                   <div className="dropdown-content">
                     <a href="#home">Link 1</a>
                     <a href="#home">Link 2</a>
                     <a href="#home">Link 3</a>
                   </div>
                 </li>
                 <li><a href="#news">about</a></li>
                 <li><a href="#news">Contact</a></li>
                 
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