import React from 'react';
import BecomeInstructorSection from '../about/becomeInstructorSection';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/header';
import CounterSectionThree from '../homeThree/counterSectionThree';
import InstructorFeature from './instructorFeature';
import StepJourneySection from './stepJourneySection';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Become an Instructor" breadcrumbSubTitle="Become an Instructor" />
                <InstructorFeature />
                <CounterSectionThree />
                <StepJourneySection />
                <BecomeInstructorSection />
            </main>
            <Footer />
        </>
    );
};

export default index;