import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/headerFour';
import ClassDetailsSection from './classDetailsSection';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Startup Business Management Live Class" breadcrumbSubTitle="Startup Business Management Live Class" />
                <ClassDetailsSection />
            </main>
            <Footer />
        </>
    );
};

export default index;