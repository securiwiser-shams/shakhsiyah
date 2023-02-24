import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/headerFour';
import WebinarDetailsSection from './webinarDetailsSection';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Webinar Details" breadcrumbSubTitle="WordPress Development Course for Plugins" />
                <WebinarDetailsSection />
            </main>
            <Footer />
        </>
    );
};

export default index;