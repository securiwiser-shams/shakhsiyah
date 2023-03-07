import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/header';
import ShopSectionMain from './shopSectionMain';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Shop" breadcrumbSubTitle="Shop" />
                <ShopSectionMain />
            </main>
            <Footer />
        </>
    );
};

export default index;