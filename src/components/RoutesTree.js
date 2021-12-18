import React from 'react';
import {HomePage} from '../pages/Home/index'
import {ShopPage} from '../pages/shop/index'
import {AboutPage} from '../pages/about/index'
import {CartPage} from '../pages/cart/index'
import {CheckoutPage} from '../pages/checkout/index'
import {LoginPage} from '../pages/login/index'
import {ProductDetailPage} from '../pages/product.detail/index'
import {Page404} from '../pages/page404/index';

import { Route, Routes } from 'react-router-dom';


export const RoutesTree=()=>{
    return(
    <>
    <Routes>
    <Route exact path="/" element={<HomePage/>} />
    <Route  path="/about" element={<AboutPage/>} />
    <Route  path="/shop" element={<ShopPage/>} />
    <Route  path="/product/:id" element={<ProductDetailPage/>} />
    <Route  path="/login" element={<LoginPage/>} />
    <Route  path="/cart" element={<CartPage/>} />
    <Route  path="/cart/checkout" element={<CheckoutPage/>} /> 
    <Route  path="*" element={Page404} /> 
    </Routes>
    </>
)

}