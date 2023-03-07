import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/header';
import ShopDetailsSection from './shopDetailsSection';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Shop Details" breadcrumbSubTitle="Shop Details" />
                <ShopDetailsSection />
            </main>
            <Footer />
        </>
    );
};

export default index;