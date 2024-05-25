import React, {useEffect} from 'react';
import Layout from '../components/layout/Layout';


import ProductStore from './../store/ProductStore';
import FeaturesStore from '../store/FeatureStore';


import Slider from '../components/product/Slider';
import Features from '../components/features/Features';
import Categories from '../components/product/Categories';
import Product from '../components/product/Product';
import Brands from '../components/product/Brands';

const HomePage = () => {
    const {BrandListRequest,CategoryListRequest,SliderListRequest,ListByRemarkRequest}=ProductStore();
    const {FeaturesListRequest}=FeaturesStore();

    useEffect (()=>{
        (async()=>{
            await  SliderListRequest();
            await  FeaturesListRequest();
            await  CategoryListRequest();
            await  ListByRemarkRequest("new");
            await  BrandListRequest();
        })()
    }, [])

    return (
        <Layout>
           <Slider/>
           <Features/>
           <Categories/>
           <Product/>
           <Brands/>
        </Layout>
    );
};

export default HomePage;