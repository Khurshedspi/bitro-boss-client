import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <Featured></Featured>
           <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;