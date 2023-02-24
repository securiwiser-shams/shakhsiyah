import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/headerFour';
import RegistrationSection from './registrationSection';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Sign up" breadcrumbSubTitle="Sign up" />
                <RegistrationSection />
            </main>
            <Footer />
        </>
    );
};

export default index;