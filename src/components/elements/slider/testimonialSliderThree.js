import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';

// Import Swiper styles
import 'swiper/css/bundle'

const TestimonialSliderThree = () => {
    return (
        <div className="feedback-wrapper">
            <div className="section-title mb-45">
                <h2>Student's Feedback</h2>
            </div>
            <div className="swiper-container feedback-active">
                <div className="swiper-wrapper">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplaydisableoninteraction={"false"}
                            loop={true}
                            autoplay= {{
                                delay: 2000,
                                disableOnInteraction: true
                            }}
                        >
                        <SwiperSlide>
                            <div className="feedback-content mb-30">
                                <div className="feedback-items position-relative">
                                    <div className="feedback-header">
                                        <div className="feedback-img">
                                            <img src="/assets/img/testimonial/Image.png" alt="img not found"/>
                                        </div>
                                        <div className="feedback-title">
                                            <h4>David Johnson</h4>
                                            <span>Student</span>
                                        </div>
                                    </div>
                                    <div className="feedback-icon">
                                        <i className="flaticon-quotes"></i>
                                    </div>
                                    <div className="feedback-body">
                                        <h3>Great Course !</h3>
                                        <p>Thanks to our marketplace model, our content keeps pace with
                                            market changes. You’ll find
                                            courses on the latest technologies and business practice and
                                            more!</p>
                                    </div>
                                    <div className="testimonial-icon">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="feedback-content mb-30">
                                <div className="feedback-items position-relative">
                                    <div className="feedback-header">
                                        <div className="feedback-img">
                                            <img src="/assets/img/testimonial/testimonial-02.png" alt="img not found"/>
                                        </div>
                                        <div className="feedback-title">
                                            <h4>Brandon Tylor</h4>
                                            <span>Student</span>
                                        </div>
                                    </div>
                                    <div className="feedback-icon">
                                        <i className="flaticon-quotes"></i>
                                    </div>
                                    <div className="feedback-body">
                                        <h3>Best Experience !</h3>
                                        <p>In every software-as-a-service solution, user billing and
                                            payments are key aspects in the
                                            sale of services rendered. Let’s learn about Stripe the metal
                                            mates.</p>
                                    </div>
                                    <div className="testimonial-icon">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="feedback-content mb-30">
                                <div className="feedback-items position-relative">
                                    <div className="feedback-header">
                                        <div className="feedback-img">
                                            <img src="/assets/img/testimonial/testimonial.png" alt="img not found"/>
                                        </div>
                                        <div className="feedback-title">
                                            <h4>Richard Joseph</h4>
                                            <span>Student</span>
                                        </div>
                                    </div>
                                    <div className="feedback-icon">
                                        <i className="flaticon-quotes"></i>
                                    </div>
                                    <div className="feedback-body">
                                        <h3>Helpful Instructors !</h3>
                                        <p>There are so many websites out there that have not considered the
                                            overall usability of
                                            their visually impaired users. When it comes to designing better
                                            links.</p>
                                    </div>
                                    <div className="testimonial-icon">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSliderThree;