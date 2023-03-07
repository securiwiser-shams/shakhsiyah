import React from 'react';
import Breadcrumb from './breadcrumbEarlyCurriculum';
import CourseBar from '../course/courseBar';
import Footer from '../footer/footer';
import HeaderFour from '../header/header';
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