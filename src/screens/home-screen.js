import AboutUs from '~/components/home/about-us';
import Banner from '~/components/home/banner';
import CopperHome from '~/components/home/copper-home';

const HomeScreen = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <CopperHome />
        </div>
    );
};

export default HomeScreen;
