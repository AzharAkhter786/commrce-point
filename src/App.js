import React from 'react';
import './styles/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './components/Header';
import img1 from "./assets/images/1.jpg"
import img2 from "./assets/images/2.jpg"
import img3 from "./assets/images/3.jpg"
import img4 from "./assets/images/4.jpg"
import img5 from "./assets/images/5.jpg"
import img6 from "./assets/images/6.jpg"



function App() {
   let data=[
     {
       id:1,
       imgSrc:img1
     },
     {
      id:2,
      imgSrc:img2
    },
    {
      id:3,
      imgSrc:img3
    },
    {
      id:4,
      imgSrc:img4
    },
    {
     id:5,
     imgSrc:img5
   },
   {
     id:6,
     imgSrc:img6
   },
   
   ]
  return (
    <>
    <Header/>

    {
      console.warn(data)
    }
     <section className="gallery-section">
       {
         data.map(()=>{
           return
         })
       }
     </section>
   </>
  );
}

export default App;
