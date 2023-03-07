import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/header';
import CourseDetailsSection from './courseDetailsSection';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Curriculum" breadcrumbSubTitle="Halaqah" />
                <CourseDetailsSection />
            </main>
            <Footer />
        </>
    );
};

export default index;