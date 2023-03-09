import React from 'react';
import Breadcrumb from './breadcrumbEvent';
import Footer from '../footer/footer';
import HeaderFour from '../header/header';
import EventDetailsSection from './eventDetailsSection';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Event Details" breadcrumbSubTitle="Education Autumn Tour Conference" />
                <EventDetailsSection />
            </main>
            <Footer />
        </>
    );
};

export default index;