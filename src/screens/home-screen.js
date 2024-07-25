import React from 'react';

import { aboutUsData } from '~/components/common/about-section-data';
import Header from '~/components/header/header';
import AboutUs from '~/components/home/about-us';
import Banner from '~/components/home/banner';
import CopperHome from '~/components/home/copper-home';

const sliderImages = [
    { id: 1, img: '/assets/images/Banner_img1.jpg' },
    { id: 2, img: '/assets/images/Banner_img1.jpg' },
    { id: 3, img: '/assets/images/Banner_img1.jpg' },
    { id: 4, img: '/assets/images/Banner_img1.jpg' },
];

const HomeScreen = () => {
    return (
        <div>
            <Header />
            <Banner images={sliderImages} />
            <AboutUs
                LearnMoreButton={true}
                aboutData={aboutUsData}
                showOneData={true}
            />
            <CopperHome />
        </div>
    );
};

export default HomeScreen;
