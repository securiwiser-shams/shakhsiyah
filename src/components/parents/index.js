import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/headerFour';
import EventDetailsSection from './eventDetailsSection';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Information for Parents" breadcrumbSubTitle="Information for Parents" />
                <EventDetailsSection />
            </main>
            <Footer />
        </>
    );
};

export default index;