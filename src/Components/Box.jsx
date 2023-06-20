import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

const Box = (props) => {
    const [value, setValue] = useState(0)
    const { element } = props
    
    const handleQuantityChange = (event) => {
        setValue(parseInt(event.target.value))
        element.quantity = parseInt(event.target.value)

    }
    const handleView = () => {
        props.history.push('/product-des', element)
    }
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('cartItems'))
        if (data) {
            let itemFound = data.findIndex(obj => obj.id === element.id)
            if (itemFound !== -1) {
                element.quantity = data[itemFound].quantity
            } else {
                element.quantity = 1
            }
        } else {
            element.quantity = 1
        }
    }, [])

    return (
        <div className="product-box">
            <img src={element.image} alt="product-img" />
            <p>{element.name}</p>
            <p className="price">{element.price}Rs/kg</p>
            <p>Quantity: <input className='quantity-input' type='number' min='1' value={element.quantity} onChange={handleQuantityChange} /> </p>
            {/* <NavLink to={{pathname:'/product-des', state: element}} className='NavLink'>View</NavLink> */}
            <button className='Navlink' onClick={() => handleView()}>View</button>
            <button className="addtocart-btn" id={`addtocart-btn-${element.id}`} onClick={() => props.handleCart(element)}>Add to Cart</button><br />
        </div>
    )
}

export default withRouter(Box)