import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/headerFour';
import CheckoutSection from './checkoutSection';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Checkout" breadcrumbSubTitle="Checkout" />
                <CheckoutSection />
            </main>
            <Footer />
        </>
    );
};

export default index;