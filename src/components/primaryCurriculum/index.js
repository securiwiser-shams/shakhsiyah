import React from 'react';
import Breadcrumb from './breadcrumbPrimaryCurriculum';
import CourseBar from '../course/courseBar';
import Footer from '../footer/footer';
import HeaderFour from '../header/header';
import CourseContentFour from './courseContentFour';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Primary School Curriculum" breadcrumbSubTitle="Primary School Curriculum
" />
                <CourseBar />
                <CourseContentFour />
            </main>
            <Footer />
        </>
    );
};

export default index;