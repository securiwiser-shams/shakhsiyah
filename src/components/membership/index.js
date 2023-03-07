import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import TestimonialSlider from '../elements/slider/testimonialSlider';
import Footer from '../footer/footer';
import HeaderFour from '../header/header';
import MembershipPrice from './membershipPrice';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Membership Plan" breadcrumbSubTitle="Membership Plan" />
                <MembershipPrice />
                <TestimonialSlider />
            </main>
            <Footer />
        </>
    );
};

export default index;