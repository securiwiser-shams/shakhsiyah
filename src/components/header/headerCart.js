import { Link } from 'gatsby';
import React, { useState } from 'react';

const HeaderCart = ({setCartOpen, cartOpen}) => {
    const [count, setCount] = useState(1);
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);

    const handleIncrement = () => {
        setCount(nextCount => nextCount + 1);
    };
    const handleDecrement = () => {
        setCount(prevCount => prevCount > 1 ? prevCount - 1 : prevCount);
    };
    const handleIncrement1 = () => {
        setCount1(nextCount => nextCount + 1);
    };
    const handleDecrement1 = () => {
        setCount1(prevCount => prevCount > 1 ? prevCount - 1 : prevCount);
    };
    const handleIncrement2 = () => {
        setCount2(nextCount => nextCount + 1);
    };
    const handleDecrement2 = () => {
        setCount2(prevCount => prevCount > 1 ? prevCount - 1 : prevCount);
    };
    return (
        <div className="cartmini__area">
            <div className={cartOpen ? "cartmini__wrapper opened" : "cartmini__wrapper"}>
                <div className="cartmini__title">
                    <h4>Shopping cart</h4>
                </div>
                <div className="cartmini__close">
                    <button type="button" className="cartmini__close-btn" onClick={() => setCartOpen(false)}><i className="fal fa-times"></i></button>
                </div>
                <div className="cartmini__widget">
                    <div className="cartmini__inner">
                        <ul>
                            <li>
                                <div className="cartmini__thumb">
                                    <Link to="/course"><img src="/assets/img/products/product-thumb-01.png" alt="img not found" /></Link>
                                </div>
                                <div className="cartmini__content">
                                    <h5><Link to="/course">Turn Yourself</Link></h5>
                                    <div className="product-quantity mt-10 mb-10">
                                        <span className="cart-minus" onClick={handleDecrement}><i className="far fa-minus"></i></span>
                                        <p className="cart-input">{count}</p>
                                        <span className="cart-plus" onClick={handleIncrement}><i className="far fa-plus"></i></span>
                                    </div>
                                    <div className="product__sm-price-wrapper">
                                        <span className="product__sm-price">$24.00</span>
                                    </div>
                                </div>
                                <button type='button' className="cartmini__del"><i className="fal fa-times"></i></button>
                            </li>
                            <li>
                                <div className="cartmini__thumb">
                                    <Link to="/course"><img src="/assets/img/products/product-thumb-02.png" alt="img not found" /></Link>
                                </div>
                                <div className="cartmini__content">
                                    <h5><Link to="/course">Art of Not Giving</Link></h5>
                                    <div className="product-quantity mt-10 mb-10">
                                        <span className="cart-minus" onClick={handleDecrement1}><i className="far fa-minus"></i></span>
                                        <p className="cart-input">{count1}</p>
                                        <span className="cart-plus" onClick={handleIncrement1}><i className="far fa-plus"></i></span>
                                    </div>
                                    <div className="product__sm-price-wrapper">
                                        <span className="product__sm-price">$12.00</span>
                                    </div>
                                </div>
                                <button type='button' className="cartmini__del"><i className="fal fa-times"></i></button>
                            </li>
                            <li>
                                <div className="cartmini__thumb">
                                    <Link to="/course"><img src="/assets/img/products/product-thumb-03.png" alt="img not found" /></Link>
                                </div>
                                <div className="cartmini__content">
                                    <h5><Link to="/course">Attract Women</Link></h5>
                                    <div className="product-quantity mt-10 mb-10">
                                        <span className="cart-minus" onClick={handleDecrement2}><i className="far fa-minus"></i></span>
                                        <p className="cart-input">{count2}</p>
                                        <span className="cart-plus" onClick={handleIncrement2}><i className="far fa-plus"></i></span>
                                    </div>
                                    <div className="product__sm-price-wrapper">
                                        <span className="product__sm-price">$42.00</span>
                                    </div>
                                </div>
                                <button type='button' className="cartmini__del"><i className="fal fa-times"></i></button>
                            </li>
                        </ul>
                    </div>
                    <div className="cartmini__checkout">
                        <div className="cartmini__checkout-title mb-30">
                            <h4>Subtotal:</h4>
                            <span>$88.00</span>
                        </div>
                    </div>
                    <div className="cartmini__viewcart">
                        <Link to="/cart" className='edu-sec-btn'>View cart</Link>
                        <Link to="/checkout" className='edu-sec-btn'>Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderCart;