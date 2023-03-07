import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/header';
import WishlistSection from './wishlistSection';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="My Wishlist" breadcrumbSubTitle="Wishlist" />
                <WishlistSection />
            </main>
            <Footer />
        </>
    );
};

export default index;