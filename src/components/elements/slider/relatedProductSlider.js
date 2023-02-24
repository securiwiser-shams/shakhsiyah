import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/bundle';
import { Link } from 'gatsby';
import ProductModal from '../../shop/productModal';

const RelatedProductSlider = () => {
    return (
        <>
            <div className="related_product pb-115">
                <div className="container custome-container">
                    <div className="section-title mb-55">
                        <h2>Related Product</h2>
                    </div>
                    <div className="swiper-container r-product-active">
                        <div className="swiper-wrapper">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                autoplaydisableoninteraction={"false"}
                                loop={true}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1
                                    },
                                    480: {
                                        slidesPerView: 2
                                    },
                                    640: {
                                        slidesPerView: 2
                                    },
                                    991: {
                                        slidesPerView: 3
                                    },
                                    1200: {
                                        slidesPerView: 3
                                    },
                                    1400: {
                                        slidesPerView: 5
                                    }
                                }}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: true
                                }}
                            >

                                <SwiperSlide>
                                    <div className="product-items text-center">
                                        <div className="product-img">
                                            <Link to="/shop-details"><img src="/assets/img/products/product-thumb-01.png" alt="product-img" /></Link>
                                            <div className="shop-quick-view">
                                                <ul>
                                                    <li>
                                                        <Link to="/cart"><i className="fal fa-cart-arrow-down"></i></Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/wishlist"><i className="fal fa-heart"></i></Link>
                                                    </li>
                                                    <li>
                                                        <span data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></span>
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
                                                <i className="fal fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-items text-center">
                                        <div className="product-img">
                                            <Link to="/shop-details"><img src="/assets/img/products/product-thumb-02.png" alt="product-img" /></Link>
                                            <div className="shop-quick-view">
                                                <ul>
                                                    <li>
                                                        <Link to="/cart"><i className="fal fa-cart-arrow-down"></i></Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/wishlist"><i className="fal fa-heart"></i></Link>
                                                    </li>
                                                    <li>
                                                        <span data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h4><Link to="/shop-details">Art of Not Giving</Link></h4>
                                            <span>$24.00</span>
                                            <div className="course-icon">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fal fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-items text-center">
                                        <div className="product-img">
                                            <Link to="/shop-details"><img src="/assets/img/products/product-thumb-03.png" alt="product-img" /></Link>
                                            <div className="shop-quick-view">
                                                <ul>
                                                    <li>
                                                        <Link to="/cart"><i className="fal fa-cart-arrow-down"></i></Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/wishlist"><i className="fal fa-heart"></i></Link>
                                                    </li>
                                                    <li>
                                                        <span data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h4><Link to="/shop-details">Attract Women</Link></h4>
                                            <span>$24.00</span>
                                            <div className="course-icon">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fal fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-items text-center">
                                        <div className="product-img">
                                            <Link to="/shop-details"><img src="/assets/img/products/product-thumb-04.png" alt="product-img" /></Link>
                                            <div className="shop-quick-view">
                                                <ul>
                                                    <li>
                                                        <Link to="/cart"><i className="fal fa-cart-arrow-down"></i></Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/wishlist"><i className="fal fa-heart"></i></Link>
                                                    </li>
                                                    <li>
                                                        <span data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h4><Link to="/shop-details">Think and Grow Rich</Link></h4>
                                            <span>$24.00</span>
                                            <div className="course-icon">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fal fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-items text-center">
                                        <div className="product-img">
                                            <Link to="/shop-details"><img src="/assets/img/products/product-thumb-05.png" alt="product-img" /></Link>
                                            <div className="shop-quick-view">
                                                <ul>
                                                    <li>
                                                        <Link to="/cart"><i className="fal fa-cart-arrow-down"></i></Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/wishlist"><i className="fal fa-heart"></i></Link>
                                                    </li>
                                                    <li>
                                                        <span data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h4><Link to="/shop-details">Best Inspirational</Link></h4>
                                            <span>$24.00</span>
                                            <div className="course-icon">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fal fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <ProductModal />
        </>
    );
};

export default RelatedProductSlider;