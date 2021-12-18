import React from 'react'
import {Slider} from '../../components/Slider';
import {Services} from '../../components/Services';
import {Products} from '../../components/Products';
import {NewsLetter} from '../../components/NewsLetter';
import {Counter} from '../../components/Counter';
import {HappyClient} from '../../components/HappyClient';


const HomeView = props => {

    return (
        <>
     <Slider/>
    <Services/>
    <Products/>
    <HappyClient/>
    <Products/>    
    <Counter/>
    <NewsLetter/>        
        </>
    )
}


export default HomeView
