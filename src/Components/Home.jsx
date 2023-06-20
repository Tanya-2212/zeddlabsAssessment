import React from 'react'
import Main from './Main';
import Products from './Products'
import Footer from './Footer'

const Home = (props) => {
    const cart = (cartvalue) => {
        props.Cart(cartvalue)
    }
    return (
        <div>
            <Main />
            <Products cartValue={(cartvalue) => cart(cartvalue)} />
            <Footer />
        </div>
    )
}

export default Home
