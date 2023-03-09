import React from 'react';
import Breadcrumb from './breadcrumbWebinar';
import Footer from '../footer/footer';
import HeaderFour from '../header/header';
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