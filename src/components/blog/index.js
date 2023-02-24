import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/headerFour';
import BlogMain from './blogMain';

const index = () => {

    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Blog" breadcrumbSubTitle="Blog" />
                <BlogMain />
            </main>
            <Footer />
        </>
    );
};

export default index;