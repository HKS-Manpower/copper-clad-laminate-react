import React from 'react';

import Header from '~/components/header/header';
import AboutUs from '~/components/home/about-us';
import Banner from '~/components/home/banner';
import CopperHome from '~/components/home/copper-home';

const HomeScreen = () => {
    return (
        <div>
            <Header />
            <Banner />
            <AboutUs />
            <CopperHome />
        </div>
    );
};

export default HomeScreen;
