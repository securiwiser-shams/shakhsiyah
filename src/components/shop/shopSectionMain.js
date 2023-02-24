import { Link } from 'gatsby';
import React from 'react';
import ProductModal from './productModal';
import ShopSidebar from './shopSidebar';

const ShopSectionMain = () => {
    return (
        <>
            <section className="shop-area pt-120 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-12">
                            <ShopSidebar />
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <div className="products-wrapper">
                                <div className="product-items text-center">
                                    <div className="product-img">
                                        <Link to="/shop-details"><img src="/assets/img/products/product-thumb-01.png" alt="product-img" /></Link>
                                        <div className="shop-quick-view">
                                            <ul>
                                                <li>
                                                    <Link to="/cart"><i className="fal fa-cart-arrow-down"></i></Link>
                                                </li>
                                                <li>
                                                    <span data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></span>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i className="fal fa-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h4><Link to="/shop-details">Turn Yourself</Link></h4>
                                        <span>$24.00</span>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                        <Link to="/shop-details"><img src="/assets/img/products/product-thumb-02.png" alt="product-img" /></Link>
                                        <div className="shop-quick-view">
                                            <ul>
                                                <li>
                                                    <Link to="/cart"><i className="fal fa-cart-arrow-down"></i></Link>
                                                </li>
                                                <li>
                                                    <span data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></span>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i className="fal fa-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h4><Link to="/shop-details">Art of Not Giving</Link></h4>
                                        <span>$12.00</span>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                        <Link to="/shop-details"><img src="/assets/img/products/product-thumb-03.png" alt="product-img" /></Link>
                                        <div className="shop-quick-view">
                                            <ul>
                                                <li>
                                                    <Link to="/cart"><i className="fal fa-cart-arrow-down"></i></Link>
                                                </li>
                                                <li>
                                                    <span data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></span>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i className="fal fa-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h4><Link to="/shop-details">Attract Women</Link></h4>
                                        <span>$24.00</span>
                                        <del className="shop-old-price">$75.50</del>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                        <Link to="/shop-details"><img src="/assets/img/products/product-thumb-04.png" alt="product-img" /></Link>
                                        <div className="shop-quick-view">
                                            <ul>
                                                <li>
                                                    <Link to="/cart"><i className="fal fa-cart-arrow-down"></i></Link>
                                                </li>
                                                <li>
                                                    <span data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></span>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i className="fal fa-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h4><Link to="/shop-details">Think and Grow Rich</Link></h4>
                                        <span>$16.00</span>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                        <Link to="/shop-details"><img src="/assets/img/products/product-thumb-05.png" alt="product-img" /></Link>
                                        <div className="shop-quick-view">
                                            <ul>
                                                <li>
                                                    <Link to="/cart"><i className="fal fa-cart-arrow-down"></i></Link>
                                                </li>
                                                <li>
                                                    <span data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></span>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i className="fal fa-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h4><Link to="/shop-details">Best Inspirational</Link></h4>
                                        <span>$22.00</span>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                        <Link to="/shop-details"><img src="/assets/img/products/product-thumb-06.png" alt="product-img" /></Link>
                                        <div className="shop-quick-view">
                                            <ul>
                                                <li>
                                                    <Link to="/cart"><i className="fal fa-cart-arrow-down"></i></Link>
                                                </li>
                                                <li>
                                                    <span data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></span>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i className="fal fa-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h4><Link to="/shop-details">The Power of Evil</Link></h4>
                                        <span>$17.00</span>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                        <Link to="/shop-details"><img src="/assets/img/products/product-thumb-07.png" alt="product-img" /></Link>
                                        <div className="shop-quick-view">
                                            <ul>
                                                <li>
                                                    <Link to="/cart"><i className="fal fa-cart-arrow-down"></i></Link>
                                                </li>
                                                <li>
                                                    <span data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></span>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i className="fal fa-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h4><Link to="/shop-details">Turn Yourself</Link></h4>
                                        <span>$24.00</span>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                        <Link to="/shop-details"><img src="/assets/img/products/product-thumb-08.png" alt="product-img" /></Link>
                                        <div className="shop-quick-view">
                                            <ul>
                                                <li>
                                                    <Link to="/cart"><i className="fal fa-cart-arrow-down"></i></Link>
                                                </li>
                                                <li>
                                                    <span data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></span>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i className="fal fa-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h4><Link to="/shop-details">Memoirs of a Geisha</Link></h4>
                                        <span>$13.00</span>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                        <Link to="/shop-details"><img src="/assets/img/products/product-thumb-09.png" alt="product-img" /></Link>
                                        <div className="shop-quick-view">
                                            <ul>
                                                <li>
                                                    <Link to="/cart"><i className="fal fa-cart-arrow-down"></i></Link>
                                                </li>
                                                <li>
                                                    <span data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></span>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i className="fal fa-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h4><Link to="/shop-details">Very First Sight</Link></h4>
                                        <span>$22.00</span>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                        <Link to="/shop-details"><img src="/assets/img/products/product-thumb-10.png" alt="product-img" /></Link>
                                        <div className="shop-quick-view">
                                            <ul>
                                                <li>
                                                    <Link to="/cart"><i className="fal fa-cart-arrow-down"></i></Link>
                                                </li>
                                                <li>
                                                    <span data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></span>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i className="fal fa-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h4><Link to="/shop-details">The Almanack</Link></h4>
                                        <span>$24.00</span>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                        <Link to="/shop-details"><img src="/assets/img/products/product-thumb-11.png" alt="product-img" /></Link>
                                        <div className="shop-quick-view">
                                            <ul>
                                                <li>
                                                    <Link to="/cart"><i className="fal fa-cart-arrow-down"></i></Link>
                                                </li>
                                                <li>
                                                    <span data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></span>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i className="fal fa-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h4><Link to="/shop-details">Wealth and Happiness</Link></h4>
                                        <span>$24.00</span>
                                        <del className="shop-old-price">$75.50</del>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                        <Link to="/shop-details"><img src="/assets/img/products/product-thumb-12.png" alt="product-img" /></Link>
                                        <div className="shop-quick-view">
                                            <ul>
                                                <li>
                                                    <Link to="/cart"><i className="fal fa-cart-arrow-down"></i></Link>
                                                </li>
                                                <li>
                                                    <span data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></span>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i className="fal fa-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h4><Link to="/shop-details">Rabbit drawing book</Link></h4>
                                        <span>$23.00</span>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                        <Link to="/shop-details"><img src="/assets/img/products/product-thumb-13.png" alt="product-img" /></Link>
                                        <div className="shop-quick-view">
                                            <ul>
                                                <li>
                                                    <Link to="/cart"><i className="fal fa-cart-arrow-down"></i></Link>
                                                </li>
                                                <li>
                                                    <span data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></span>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i className="fal fa-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h4><Link to="/shop-details">Time Management</Link></h4>
                                        <span>$32.00</span>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                        <Link to="/shop-details"><img src="/assets/img/products/product-thumb-14.png" alt="product-img" /></Link>
                                        <div className="shop-quick-view">
                                            <ul>
                                                <li>
                                                    <Link to="/cart"><i className="fal fa-cart-arrow-down"></i></Link>
                                                </li>
                                                <li>
                                                    <span data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></span>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i className="fal fa-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h4><Link to="/shop-details">Startup Dream</Link></h4>
                                        <span>$21.00</span>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                        <Link to="/shop-details"><img src="/assets/img/products/product-thumb-15.png" alt="product-img" /></Link>
                                        <div className="shop-quick-view">
                                            <ul>
                                                <li>
                                                    <Link to="/cart"><i className="fal fa-cart-arrow-down"></i></Link>
                                                </li>
                                                <li>
                                                    <span data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></span>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i className="fal fa-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h4><Link to="/shop-details">Positive Attitude</Link></h4>
                                        <span>$75.00</span>
                                        <del className="shop-old-price">$75.50</del>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                        <Link to="/shop-details"><img src="/assets/img/products/product-thumb-16.png" alt="product-img" /></Link>
                                        <div className="shop-quick-view">
                                            <ul>
                                                <li>
                                                    <Link to="/cart"><i className="fal fa-cart-arrow-down"></i></Link>
                                                </li>
                                                <li>
                                                    <span data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></span>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i className="fal fa-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h4><Link to="/shop-details">Options Handboo</Link></h4>
                                        <span>$11.00</span>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProductModal />
        </>
    );
};

export default ShopSectionMain;