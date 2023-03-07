import React from 'react';

const GallaryInstaSection = () => {
    return (
        <div className="gallery-area">
            <div className="swiper-containers">
                <div className="swiper-wrappers gallery-inner">
                    <div className="swiper-slides gallery-single w-img">
                        <img src="/assets/img/gallery/gallary1.png" alt="img not found" />
                        <div className="gallery-link">
                            <a href="#" className="gallery-insta"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="swiper-slides gallery-single w-img">
                        <img src="/assets/img/gallery/gallary_img-2.jpg" alt="img not found" />
                        <div className="gallery-link">
                            <a href="#" className="gallery-insta"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="swiper-slides gallery-single w-img">
                        <img src="/assets/img/gallery/gallary_img-3.jpg" alt="img not found" />
                        <div className="gallery-link">
                            <a href="#" className="gallery-insta"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="swiper-slides gallery-single w-img">
                        <img src="/assets/img/gallery/gallary_img-4.jpg" alt="img not found" />
                        <div className="gallery-link">
                            <a href="#" className="gallery-insta"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="swiper-slides gallery-single w-img">
                        <img src="/assets/img/gallery/gallary_img-5.jpg" alt="img not found" />
                        <div className="gallery-link">
                            <a href="#" className="gallery-insta"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GallaryInstaSection;