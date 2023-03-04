import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';

// Import Swiper styles
import 'swiper/css/bundle'

const TestimonialSlider = () => {
    return (
        <div className="testimonial-area pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-title text-center mb-55">
                            <h2>What Parents<br /> Think and Say About <span className="down-mark-line">Shakhsiyah</span></h2>
                        </div>
                    </div>
                </div>
                <div className="swiper-container testimonial-active">
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
                                    slidesPerView: 1
                                },
                                640: {
                                    slidesPerView: 1
                                },
                                991: {
                                    slidesPerView: 2
                                },
                                1200: {
                                    slidesPerView: 3
                                },
                                1400: {
                                    slidesPerView: 3
                                }
                            }}
                            pagination={{
                                clickable: true,
                                el: '.testimonial-pagination',
                            }}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: true
                            }}
                        >
                            <SwiperSlide>
                                <div className="testimonial-items position-relative">
                                    <div className="testimonial-header">
                                        <div className="testimonial-img">
                                            <img src="/assets/img/testimonial/customer.png" alt="img not found" />
                                        </div>
                                        <div className="testimonial-title">
                                            <h4>Abz_fp</h4>
                                            <span>Parent</span>
                                        </div>
                                    </div>
                                    <div className="testimoni-quotes">
                                        <img src="/assets/img/testimonial/quotes.png" alt="img not found" />
                                    </div>
                                    <div className="testimonial-body">
                                        <h3>Benefited Greatly !</h3>
                                        <p>I had children that attended ISF, I found that they benefited greatly from the smaller 
                                            classes and bilingual curriculum. This is one of the only schools in London that 
                                            instills a deep Islamic ethos for children that they carry with them throughout 
                                            their lives. Strong Islamic practice starts from young</p>
                                    </div>
                                    <div className="testimonial-icon">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="testimonial-items position-relative">
                                    <div className="testimonial-header">
                                        <div className="testimonial-img">
                                            <img src="/assets/img/testimonial/customer.png" alt="img not found" />
                                        </div>
                                        <div className="testimonial-title">
                                            <h4>Ziiko Bon</h4>
                                            <span>Parent</span>
                                        </div>
                                    </div>
                                    <div className="testimoni-quotes">
                                        <img src="/assets/img/testimonial/quotes.png" alt="img not found" />
                                    </div>
                                    <div className="testimonial-body">
                                        <h3>Very good school !</h3>
                                        <p>Very good school masha Allah certainly helped develop my daughter's basic principles, 
                                            values and knowledge as a human being and from an Islamic perspective. Sad we had to 
                                            leave because we moved out of area. Teacher Samia is amazing masha Allah. By Abu Sumaya.</p>
                                    </div>
                                    <div className="testimonial-icon">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="testimonial-items position-relative">
                                    <div className="testimonial-header">
                                        <div className="testimonial-img">
                                            <img src="/assets/img/testimonial/customer.png" alt="img not found" />
                                        </div>
                                        <div className="testimonial-title">
                                            <h4>Umm Yasmin</h4>
                                            <span>Parent</span>
                                        </div>
                                    </div>
                                    <div className="testimoni-quotes">
                                        <img src="/assets/img/testimonial/quotes.png" alt="img not found" />
                                    </div>
                                    <div className="testimonial-body">
                                        <h3>The nursery is well equipped and stuff friendly !</h3>
                                        <p>My 3yo daughter went to the nursery at Shakhsiyah Foundation school for two years. 
                                            The nursery is well equipped and stuff friendly. During her time there she learnt 
                                            several surah's as well as some dua's and islamic rhymes. This nursery is a cosy 
                                            and a welcoming place. MashaAllah.</p>
                                    </div>
                                    <div className="testimonial-icon">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className="testimonial-pagination text-center"></div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;