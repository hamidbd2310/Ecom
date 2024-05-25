import React from 'react';
import ProductStore from '../../store/ProductStore';
import StarRatings from 'react-star-ratings/build/star-ratings';
import { Link } from 'react-router-dom';
import ProductSkeleton from './../../skeleton/ProductSkeleton';

const Product = () => {
    const { ListByRemark, ListByRemarkRequest } = ProductStore();
    return (
        <div className="section">
            <div className="container-fluid py-5 bg-light">
                <div className="row">
                    <h1 className="headline-4 text-center my-2 p-0"> Products</h1>
                    <span className="bodySmal mb-3 text-center">Explore a World of Choices Across Our Most Popular</span>
                    <div className="col-12">
                        <div>
                            <ul className="nav nav-pills p-3 justify-content-center mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button onClick={() => { ListByRemarkRequest("new") }} className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-new" type="button" role="tab" aria-controls="pills-home" ariaselected="true">New</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button onClick={() => { ListByRemarkRequest("trending") }} className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" databs-target="#pills-trending" type="button" role="tab" aria-controls="pills-profile" ariaselected="false">Trending</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button onClick={() => { ListByRemarkRequest("popular") }} className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" databs-target="#pills-popular" type="button" role="tab" aria-controls="pills-contact" ariaselected="false">Popular</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button onClick={() => { ListByRemarkRequest("top") }} className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" databs-target="#pills-top" type="button" role="tab" aria-controls="pills-disabled" ariaselected="false">Top</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button onClick={() => { ListByRemarkRequest("special") }} className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-
                                        bs-target="#pills-special" type="button" role="tab" aria-controls="pills-disabled" ariaselected="false">Special</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">

                                <div className="tab-pane fade show active" id="pills" role="tabpanel" aria-labelledby="pills-profiletab" tabIndex="0">
                                    {
                                        ListByRemark === null ? (<ProductSkeleton />) : (
                                            <div className="container">
                                                <div className="row">
                                                    {
                                                        ListByRemark.map((item, i) => {

                                                            let price = <p className="bodyMedium text-dark my-1">Price:{item["price"]} BDT</p>

                                                            if (item["discount"] === true) {
                                                                price = <p className="bodyMedium text-danger  my-1">Price: <strike className="text-secondary text-sm">{item["price"]}</strike> {item["discountPrice"]} BDT</p>
                                                            }
                                                            return (<div className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                                                <Link to={`/details/${item["_id"]}`} className="card shadow-sm h-100 rounded-3 bg-white">
                                                                    <img alt="img" className="w-100 rounded-top-2" src={item["image"]} />
                                                                    <div className="card-body">
                                                                        <p className="bodySmall text-secondary my-1">{item["title"]}</p>
                                                                        <p className="bodySmall text-secondary my-1">{item["remark"]}</p>
                                                                        {price}
                                                                        <StarRatings rating={parseFloat(item["star"])} starRatedColor="red" starDimension="15px" starSpacing="2px" />
                                                                    </div>
                                                                </Link>
                                                            </div>)
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Product;