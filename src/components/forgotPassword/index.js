import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/header';
import ForgotPassSection from './forgotPassSection';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Forgot Password" breadcrumbSubTitle="Forgot Password" />
                <ForgotPassSection />
            </main>
            <Footer />
        </>
    );
};

export default index;