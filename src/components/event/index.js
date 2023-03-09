import React from 'react';
import Breadcrumb from './breadcrumbEvent';
import Footer from '../footer/footer';
import HeaderFour from '../header/header';
import EventMainSection from './eventMainSection';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Upcoming Event" breadcrumbSubTitle="Upcoming Event" />
                <EventMainSection />
            </main>
            <Footer />
        </>
    );
};

export default index;