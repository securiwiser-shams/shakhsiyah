import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import CourseBar from '../course/courseBar';
import Footer from '../footer/footer';
import HeaderFour from '../header/headerFour';
import CourseContentTwo from './courseContentTwo';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Course 02" breadcrumbSubTitle="Courses" />
                <CourseBar />
                <CourseContentTwo />
            </main>
            <Footer />
        </>
    );
};

export default index;