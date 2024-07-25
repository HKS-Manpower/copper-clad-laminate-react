import React from 'react';

import { aboutUsData } from '~/components/common/about-section-data';
import Header from '~/components/header/header';
import AboutUs from '~/components/home/about-us';
import Banner from '~/components/home/banner';

const sliderImages = [
    { id: 1, img: '/assets/images/about-banner.png' },
    { id: 2, img: '/assets/images/about-banner.png' },
    { id: 3, img: '/assets/images/about-banner.png' },
    { id: 4, img: '/assets/images/about-banner.png' },
];

const AboutScreen = () => {
    return (
        <div>
            <Banner images={sliderImages} />
            <AboutUs aboutData={aboutUsData} orderClass="order-2" />
        </div>
    );
};

export default AboutScreen;
