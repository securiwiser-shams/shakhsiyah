import React from 'react';
import Breadcrumb from './breadcrumbWebinar';
import Footer from '../footer/footer';
import HeaderFour from '../header/header';
import WebinarSection from './webinarSection';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Upcoming Webinars" breadcrumbSubTitle="Upcoming Webinars" />
                <WebinarSection />
            </main>
            <Footer />
        </>
    );
};

export default index;