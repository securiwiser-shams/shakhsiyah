import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/headerFour';
import ZoomClassSection from './zoomClassSection';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Zoom Live Class" breadcrumbSubTitle="Zoom Live Class" />
                <ZoomClassSection />
            </main>
            <Footer />
        </>
    );
};

export default index;