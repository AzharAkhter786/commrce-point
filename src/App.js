import React from 'react';
import './styles/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './components/Header';
import {RoutesTree} from './components/RoutesTree';
import {Footer} from './components/Footer';

function App() {

  return (
    <>
    <Header/>
    <RoutesTree/>
    <Footer/>
   </>
  );
}

export default App;



// https://technext.github.io/shop/
//https://reactrouter.com/docs/en/v6/getting-started/concepts#defining-routes
//https://reactjs.org/docs/getting-started.html