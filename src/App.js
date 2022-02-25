import React, { cloneElement, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Suspense } from 'react/cjs/react.production.min';
import styled from 'styled-components'
import Product from './Components/Product';
// import a from './Components/products.json';

const Home = React.lazy(()=>import('./Components/Home'))
const Products = React.lazy(()=>import('./Components/Products'))
const ProductDetails = React.lazy(()=>import('./Components/ProductDetails'))
const NavBar = React.lazy(()=>import('./Components/Navbar'))

export default function App () {
  
    return <Suspense fallback={<h1>Loading ....</h1>}>
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/products' component={Products}/>
        <Route path='/productDetails/:name' component={ProductDetails}/>
      </Switch>    
    </BrowserRouter>
    </Suspense>
    ;
  
}


const AppFrame = styled.div`
  text-align: center;
  display: flex;
`;