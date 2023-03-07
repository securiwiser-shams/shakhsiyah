import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/header';
import LoginSection from './loginSection';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Sign in" breadcrumbSubTitle="Sign in" />
                <LoginSection />
            </main>
            <Footer />
        </>
    );
};

export default index;