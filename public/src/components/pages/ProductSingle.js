import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Slider  from 'react-slick';
import { ProductContext } from '../../context/ProductProvider';

const ProductSingle = (props) => {

    const isJson = (str) => {
        try {
            JSON.parse(str);
        } catch(e) {
            return false;
        }

        return true;
    }

    const product = useContext(ProductContext);

    const settings = {dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'};

    // const { product_name, product_price } = product.single;

    return (
        <div>
            <Helmet>
                <title> eBaaba Gambia </title>
            </Helmet>

            <div className="breadcrumb">
               <div className="breadcrumb-container">
                    <h2>{ product.single.name }</h2>
               </div>
            </div>

            <div className="product-single">
                <div className="product-single-info">
                   <div className="row">
                       <div className="col-md-4">
                       <div className="product-slider">
                           <Slider {...settings}>
                                {
                                    JSON.parse(product.single.url).map((value, index) => {
                                        return(
                                            <div className="img-container" style={{padding: '200px', boxSizing : 'border-box'}}>
                                                <img src={ value } style={{width: '100%'}} />
                                             </div>
                                        );
                                   })   
                                }
                           </Slider>
                        </div>
                       </div>
                       <div className="col-md-8">
                            <div className="product-details">
                                <h2> { product.single.name } </h2>
                                <h3>{ product.single.sale_price } <sup><del>{ product.single.regular_price }</del> <span>You saved D700</span></sup></h3>
                                <h3><Link to="/cart" className="add-to-cart">Buy Now</Link></h3>
                                <h3>
                                    <ul>
                                        <li><a href=""><i className="fa fa-facebook"></i></a></li>
                                        <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                    </ul>
                                </h3>
                                <h3>
                                    <ul>
                                        <li><i className="fa fa-truck"></i></li>
                                        <li>Fast & Reliable Delivery</li>
                                    </ul>
                                </h3>
                            </div>
                       </div>
                   </div>
                </div>

                <div className="single-product-description">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Description</h3>
                            <h5>
                                <ul>
                                    <li>Quality 100% Cotton</li>
                                    <li>Best Quality</li>
                                    <li>Long Lasting</li>
                                </ul>
                            </h5>
                            <h3>Return Policy</h3>
                            <p><i className="fa fa-repeat"></i> 7 Days Return Guarantee</p>
                            <h3>Delivery</h3>
                            <p><i className="fa fa-truck"></i> 2 - 9 Hours</p>
                        </div>
                    </div>
                </div>

            </div>
         
        </div> 
    )
}

export default ProductSingle;