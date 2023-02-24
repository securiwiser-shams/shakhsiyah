import React from 'react';
import CategorySlider from '../elements/slider/categorySlider';
import CourseTabTwo from '../elements/tabs/courseTabTwo';
import Footer from '../footer/footer';
import HeaderTwo from '../header/headerTwo';
import AboutSection from './aboutSection';
import BlogSection from './blogSection';
import CounterSection from './counterSection';
import HeroSectionTwo from './heroSectionTwo';
import PartnerSection from './partnerSection';
import SkillSection from './skillSection';
import TeacherSection from './teacherSection';
import ZoomSection from './zoomSection';

const index = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <HeroSectionTwo />
                <CounterSection />
                <AboutSection />
                <CategorySlider />
                <CourseTabTwo />
                <PartnerSection />
                <TeacherSection />
                <ZoomSection />
                <SkillSection />
                <BlogSection />
            </main>
            <Footer />
        </>
    );
};

export default index;