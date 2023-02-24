import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/headerFour';
import CartSection from './cartSection';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="My Cart" breadcrumbSubTitle="Cart" />
                <CartSection />
            </main>
            <Footer />
        </>
    );
};

export default index;