import React from 'react';
import PageContent from '../../components/PageContent';
import './index.scss';

const Home: React.VFC = () => {
    return (
        <div className='home-page'>
            <PageContent header='Andrew Matsumoto'>
                <div className='home-page__wrapper'>
                    <h2 className='home-page__subheader'>
                        <span className='home-page__subheader__text'>Passionate About Developing Smart, Customer-Oriented Solutions.</span>
                    </h2>
                </div>
            </PageContent>
        </div>
    )
}

export default Home;