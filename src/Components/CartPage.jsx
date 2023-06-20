import React, { useEffect, useState } from 'react'

const CartPage = (props) => {
    const [Items, setItems] = useState('')
    const [sum, setSum] = useState(0)
    const [value, setValue] = useState(0)

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('cartItems'))
        setItems(data)
        if (data) {
            const newSum = data.reduce((sum, o) => sum += (o.price * o.quantity), 0)
            setSum(newSum)
            setValue(data.length)
        }
    }, [])

    const Delete = (i) => {
        Items.splice(i, 1);
        localStorage.setItem('cartItems', JSON.stringify(Items))
        let totalItems = JSON.parse(localStorage.getItem('cartItems'))
        setItems(totalItems)

        const newSum = totalItems.reduce((sum, o) => sum += (o.price * o.quantity), 0)
        setSum(newSum)

        if (totalItems.length === 0) {
            localStorage.removeItem('cartItems')
        }
        setValue(totalItems.length)
        props.Cart(totalItems.length)

    }

    const Edit = (item) => {
        let totalItems = JSON.parse(localStorage.getItem('cartItems'))
        let update = Items.findIndex(obj => obj.id === item.id)
        if (update !== -1) {
            totalItems[update].quantity = item.quantity;
            localStorage.setItem("cartItems", JSON.stringify(totalItems))

            const newSum = totalItems.reduce((sum, o) => sum += (o.price * o.quantity), 0)
            // totalItems.map((items) => sum += (items.price * items.quantity))
            setSum(newSum)
        }

    }

    return (
        <>
            {Items ?
                <>
                    <h1 className='cart-heading'>Cart Products</h1>
                    {
                        Items.map((item, i) => (
                            <div className="cart-container" key={i} >
                                <div className="cart-box" >
                                    <img src={item.image} alt="cart-img" />
                                    <div className="cart-des">
                                        <h3>{item.name}</h3>
                                        <h3>Price: {item.price}Rs</h3>
                                        <h3>Quantity: <input className='quantity-input' type='number' defaultValue={item.quantity} onChange={(event) => item.quantity = parseInt(event.target.value)} /></h3>
                                        <div className="cart-icons" >
                                            <i className="fa fa-trash-o delete-icon" onClick={() => Delete(i)}></i>
                                            <i className="fa fa-edit edit-icon" onClick={() => Edit(item)}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        )
                    }<br />
                    <h1 className="heading-total" >Total : {sum}Rs</h1>
                    <button className="btn-checkout">CheckOut</button>
                </>
                :
                <h1 className='cart-heading'>Add items to cart</h1>
            }
        </>
    )
}

export default CartPage
