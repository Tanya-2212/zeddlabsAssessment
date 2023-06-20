import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

const ProductDes = (props) => {
    const [cartItems, setCartItems] = useState([])
    const [value, setValue] = useState(0)
    const element = props.history.location.state

    const handleQuantityChange = (event) => {
        setValue(parseInt(event.target.value))
        props.location.state.quantity = parseInt(event.target.value)

    }

    const Cart = (element) => {
        if (element.quantity !== 0) {
            let totalItems = JSON.parse(localStorage.getItem('cartItems'))
            if (totalItems) {
                let itemFound = totalItems.findIndex(obj => obj.id === element.id)
                if (itemFound !== -1) {
                    totalItems[itemFound].quantity += element.quantity;
                    localStorage.setItem("cartItems", JSON.stringify(totalItems))
                    alert(`${element.quantity}kg ${element.name} are again added to cart`)
                    setValue(totalItems[itemFound].quantity)
                    props.location.state.quantity = totalItems[itemFound].quantity

                } else {
                    cartItems.push(element)
                    localStorage.setItem('cartItems', JSON.stringify(cartItems))
                    alert(`${element.quantity}kg ${element.name} are added to cart`)
                }
            } else {
                cartItems.push(element)
                localStorage.setItem('cartItems', JSON.stringify(cartItems))
                alert(`${element.quantity}kg ${element.name} are added to cart`)
            }
            let data = JSON.parse(localStorage.getItem('cartItems'))
            setValue(data.length)
            props.Cart(data.length)

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
        <>
            <div className="productDes-container" >
                <div className="productDes-box" >
                    <img src={element.image} alt="product-img" />
                    <div className="product-des" >
                        <h3>Name: {element.name}</h3>
                        <h3>This is best selling {element.name}. These are directly delieved from our farms. These are totally fresh and organic.</h3>
                        <h3>Price: {element.price}Rs</h3>
                        <h3>Quantity: <input className='quantity-input' type='number' min='1' value={element.quantity} onChange={handleQuantityChange} /></h3>
                        <button className="productDes-btn" onClick={() => Cart(element)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(ProductDes)
