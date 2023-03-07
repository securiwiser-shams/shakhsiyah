import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import CourseBar from '../course/courseBar';
import Footer from '../footer/footer';
import HeaderFour from '../header/header';
import CourseContentFour from './courseContentFour';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Secondary School Curriculum" breadcrumbSubTitle="Secondary School Curriculum
" />
                <CourseBar />
                <CourseContentFour />
            </main>
            <Footer />
        </>
    );
};

export default index;