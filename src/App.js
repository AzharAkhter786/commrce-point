import React from 'react';
import './styles/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './components/Header';
import {Slider} from './components/Slider';
import {Services} from './components/Services';
import {Products} from './components/Products';
import {Footer} from './components/Footer';
import {NewsLetter} from './components/NewsLetter';
import {Counter} from './components/Counter';
import {HappyClient} from './components/HappyClient';

function App() {

  return (
    <>
    <Header/>
    <Slider/>
    <Services/>
    <Products/>
    <HappyClient/>
    <Products/>
    
    <Counter/>
    <NewsLetter/>
    <Footer/>
   </>
  );
}

export default App;



// https://technext.github.io/shop/