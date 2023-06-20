import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home'
import CartPage from './Components/CartPage'
import ProductDes from './Components/ProductDes'
import Header from './Components/Header'


const App = () =>{
  const [totalItems, setTotalItems] = useState(JSON.parse(localStorage.getItem('cartItems')))
  const [cartvalue,setCartvalue] = useState(0)
  
  useEffect(()=>{
    if (totalItems !== null){
      setCartvalue(totalItems.length)
     }
  },[totalItems])

  const Valuecart=(value)=>{
    setCartvalue(value)
  }

   return (
    <> 
    <BrowserRouter>
    <Header cartvalue={cartvalue} />
      <Switch>
      <Route exact path="/" component={()=> <Home  Cart={Valuecart} />} />
      <Route path="/cart" component={()=> <CartPage Cart={Valuecart} />} />
      <Route path="/product-des" component={()=> <ProductDes Cart={Valuecart} />} />
      </Switch>
      </BrowserRouter>
    </>

    )
  }

export default App; 
