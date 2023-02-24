import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import CourseBar from '../course/courseBar';
import Footer from '../footer/footer';
import HeaderFour from '../header/headerFour';
import CourseContentThree from './courseContentThree';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Course 03" breadcrumbSubTitle="Course" />
                <CourseBar />
                <CourseContentThree />
            </main>
            <Footer />
        </>
    );
};

export default index;