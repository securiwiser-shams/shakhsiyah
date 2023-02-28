import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/headerFour';
import StudentChooseSection from '../home/studentChooseSection';
import AboutCounterSection from './aboutCounterSection';
import AboutFeatureSection from './aboutFeatureSection';
import AboutFeatureVideo from './aboutFeatureVideo';
import AffiliateSection from './affiliateSection';
import BecomeInstructorSection from './becomeInstructorSection';
import KnowUsBetter from './knowUsBetter';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Mission Statement" breadcrumbSubTitle="Mission Statement" />
                <StudentChooseSection choose_area_className="pt-110 pb-120" />
                <AboutFeatureSection />
                <AboutFeatureVideo />
                <KnowUsBetter />
                <BecomeInstructorSection />
            </main>
            <Footer />
        </>
    );
};

export default index;