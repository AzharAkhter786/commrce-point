import React from 'react';
import './styles/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {HomePage} from './pages/Home/index'
import {ShopPage} from './pages/shop/index'
import {AboutPage} from './pages/about/index'
import {CartPage} from './pages/cart/index'
import {CheckoutPage} from './pages/checkout/index'
import {LoginPage} from './pages/login/index'
import {ProductDetailPage} from './pages/product.detail/index'


// import {Header} from './components/Header';
// import {Slider} from './components/Slider';
// import {Services} from './components/Services';
// import {Products} from './components/Products';
// import {Footer} from './components/Footer';
// import {NewsLetter} from './components/NewsLetter';
// import {Counter} from './components/Counter';
// import {HappyClient} from './components/HappyClient';


function App() {

  return (
    <>
    <HomePage/>
    <ShopPage/>
    <AboutPage/>
    <CartPage/>
    <CheckoutPage/>
    <ProductDetailPage/>
    <LoginPage/>
    
    {/* <Header/>
     */}
    {/* <Slider/>
    <Services/>
    <Products/>
    <HappyClient/>
    <Products/>    
    <Counter/>
    <NewsLetter/>
    <Footer/>
     */}
   </>
  );
}

export default App;



// https://technext.github.io/shop/