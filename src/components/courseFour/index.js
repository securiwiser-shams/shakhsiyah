import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import CourseBar from '../course/courseBar';
import Footer from '../footer/footer';
import HeaderFour from '../header/headerFour';
import CourseContentFour from './courseContentFour';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Course 04" breadcrumbSubTitle="Courses" />
                <CourseBar />
                <CourseContentFour />
            </main>
            <Footer />
        </>
    );
};

export default index;