import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE",
            id: id,
        })
    }
    return (
        <div className="checkout_prod">
            <img className="checkoutProd_image" src={image} alt="" />
            <div className="checkoutProd_info">
                <p className="checkoutProd_title">{title}</p>
                <p className="checkoutProd_price">
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProd_rating">
                    {
                        Array(rating).fill().map((_) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
