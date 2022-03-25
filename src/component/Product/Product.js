import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { img, name, price, seller, ratings } = product
    return (
        <div className='products'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h4>Name: {name}</h4>
                <h5>Price: ${price}</h5>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button className='order-product'> Order Naw</button>
        </div>
    );
};

export default Product;