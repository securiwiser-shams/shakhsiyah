import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/header';
import InstructorProfile from './instructorProfile';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Dr Farah Ahmed" breadcrumbSubTitle="Dr Farah Ahmed" />
                <InstructorProfile />
            </main>
            <Footer />
        </>
    );
};

export default index;