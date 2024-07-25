import { memo } from 'react';

import Routes from '~/routes/routes';

import Footer from '~/components/layout/footer';
import Header from '~/components/layout/header';
import Layout from '~/components/layout/layout';

const App = () => {
    //! container actions fetches for third party and the subscriptions and event listeners
    return (
        <>
            <Layout>
                <Header />
                <Routes />
                <Footer />
            </Layout>
        </>
    );
};

export default memo(App);
