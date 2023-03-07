import React from 'react';
import BrandSlider from '../elements/slider/brandSlider';
import TestimonialSlider from '../elements/slider/testimonialSlider';
import CourseTab from '../elements/tabs/courseTab';
import Footer from '../footer/footer';
import Header from '../header/header';
import BrowserCourseSection from './browserCourseSection';
import EducationSection from './educationSection';
import FeatureSection from './featureSection';
import HeroSection from './heroSection';
import StudentChooseSection from './studentChooseSection';
import TopCategorySection from './topCategorySection';
import UniversityCardSection from './universityCardSection';
import UniversityMessage from './universityMessage';




const index = () => {
    return (
        <>
        <Header />
            <main>
                <HeroSection />
                <UniversityCardSection />
                <UniversityMessage />
                <TopCategorySection />
                <CourseTab />
                <FeatureSection />
                <StudentChooseSection />
                <TestimonialSlider />
                <BrowserCourseSection />
                <EducationSection />
                <BrandSlider />
            </main>
            <Footer />
        </>
    );
};

export default index;