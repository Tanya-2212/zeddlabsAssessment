import React, { useEffect, useState } from 'react'
import Box from './Box'
import items from './Product-list'

const Products = (props) => {
    const [cartItems, setCartItems] = useState([])
    const [value, setValue] = useState(0)

    const cart = (getElement) => {
        if (getElement.quantity !== 0) {
            let totalItems = JSON.parse(localStorage.getItem('cartItems'))
            if (totalItems) {
                let itemFound = totalItems.findIndex(obj => obj.id === getElement.id)
                if (itemFound !== -1) {
                    totalItems[itemFound].quantity += getElement.quantity
                    localStorage.setItem("cartItems", JSON.stringify(totalItems))
                    alert(`${getElement.quantity}kg ${getElement.name} are again added to cart`)
                    getElement.quantity = totalItems[itemFound].quantity

                } else {
                    cartItems.push(getElement)
                    localStorage.setItem('cartItems', JSON.stringify(cartItems))
                    alert(`${getElement.quantity}kg ${getElement.name} are added to cart`)

                }
            } else {
                cartItems.push(getElement)
                localStorage.setItem('cartItems', JSON.stringify(cartItems))
                alert(`${getElement.quantity}kg ${getElement.name} are added to cart`)

            }
            let newItems = JSON.parse(localStorage.getItem('cartItems'))
            setValue(newItems.length)
            props.cartValue(newItems.length)
        } else {
            alert("Minimum quantity required is 1")
        }
    }
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('cartItems'));
        if (data !== null) {
            setCartItems(data)
            setValue(data.length)
        }
    }, [])

    return (
        <div id="products">
            <div className="product-heading">
                <h3>Our Products</h3>
            </div>
            <div className="product-container">
                {items.map((element, i) => {
                    return (
                        <Box element={element} key={i} handleCart={(getElement) => cart(getElement)} />
                    )
                })
                }
            </div>
        </div>
    )
}

export default Products
