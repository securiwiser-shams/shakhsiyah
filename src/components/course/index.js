import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/header';
import CourseBar from './courseBar';
import CourseContent from './courseContent';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Courses" breadcrumbSubTitle="Courses" />
                <CourseBar />
                <CourseContent />
            </main>
            <Footer />
        </>
    );
};

export default index;