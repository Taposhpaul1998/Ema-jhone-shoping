import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-conteiner'>
            <div className="product-conteiner">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                    ></Product>)
                }
            </div>
            <div className="cart-continer">
                <h2>order product</h2>
            </div>
        </div>
    );
};

export default Shop;