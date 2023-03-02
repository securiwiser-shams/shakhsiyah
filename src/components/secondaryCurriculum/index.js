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
                <Breadcrumb breadcrumbTitle="Early Years Curriculum" breadcrumbSubTitle="Early Years Curriculum
" />
                <CourseBar />
                <CourseContentFour />
            </main>
            <Footer />
        </>
    );
};

export default index;