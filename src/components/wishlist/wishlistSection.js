import { Link } from 'gatsby';
import React from 'react';

const WishlistSection = () => {
    return (
        <>
            <div className="cart-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form action="#">
                                <div className="table-content table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Images</th>
                                                <th className="cart-product-name">Product</th>
                                                <th className="product-price">Unit Price</th>
                                                <th className="product-quantity">Add to cart</th>
                                                <th className="product-subtotal">Total</th>
                                                <th className="product-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product-thumbnail"><Link to="/course-details"><img src="/assets/img/products/product-thumb-05.png" alt="img not found" /></Link></td>
                                                <td className="product-name"><Link to="/course-details">Best Inspirational</Link></td>
                                                <td className="product-price"><span className="amount">$20.00</span></td>
                                                <td className="product-quantity">
                                                    <Link to="/cart" className="edu-border-btn">Add to Cart</Link>
                                                </td>
                                                <td className="product-subtotal"><span className="amount">$20.00</span></td>
                                                <td className="product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td className="product-thumbnail"><Link to="/course-details"><img src="/assets/img/products/product-thumb-11.png" alt="img not found" /></Link></td>
                                                <td className="product-name"><Link to="/course-details">Wealth and Happiness</Link></td>
                                                <td className="product-price"><span className="amount">$24.00</span></td>
                                                <td className="product-quantity">
                                                    <Link to="/cart" className="edu-border-btn">Add to Cart</Link>
                                                </td>
                                                <td className="product-subtotal"><span className="amount">$24.00</span></td>
                                                <td className="product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WishlistSection;