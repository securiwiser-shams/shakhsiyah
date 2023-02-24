import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/headerFour';
import CourseDetailsSection from './courseDetailsSection';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Courses" breadcrumbSubTitle="MySQL Database : Beginner SQL Database Design" />
                <CourseDetailsSection />
            </main>
            <Footer />
        </>
    );
};

export default index;