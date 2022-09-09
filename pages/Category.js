import React from 'react';
import Link from 'next/link';
import _ from 'lodash';
import { urlFor } from '../lib/client';

import NumberFormat from 'react-number-format';

import { client } from '../lib/client';
// import { Product, FooterBanner, HeroBanner, SecondBanner, Category, SmallBanner } from '../components';



// npm install swiper

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



// const img = _.first(pImages)?.url
const Category = ({ taxons, category, prods }) => (
  <div>
    <div className="categories-con">
      {/* <div className="products-heading">
        <h2>Categories</h2>
        <p>Browse product categories</p>
      </div> */}
      <Category  />


      <section id="testimonials">

        <div className="container testimonials__container"
        
        >
          {prods.map(
            ({
              _id,
              name = "",
              slug = "",
              label = "",
              _createdAt = "",
              cat = "",
              categories = "",
            }) =>
              slug && (
                <div className='product-name' > 
                  <div className='category-text' >
                    <h3 className='category-header' >{name}</h3>
                    <h4 className='category-label' >{label}</h4>
                  </div>
                  <Swiper className="shadow-lg rounded-lg bg-white pb-5" key={_id}
                  // install Swiper modules
                  modules={[ Pagination]}
                  spaceBetween={10}
                  slidesPerView={2.5}
                  pagination={{ clickable: true }}
                  >
                    <div className="category-product">
                      
                      <div className="category-tab">
                        {cat && (
                          <div className="category-card1" style={{ listStyle: "none" }}>
                            {cat.map((category) => (
                              <SwiperSlide className='category-card2' key={category._id}>
    
                                <img src={urlFor(category.image && category.image[0])} alt=""
                                width={250}
                                height={250}
                                className="category-image" />

                                <span className="category-heading"
                                >
                                  {category.namey}
                                </span>
    
                                <NumberFormat className="product-price" value={category.price} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
    
                                {console.log(categories)}
                              </SwiperSlide>
                              
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Swiper>
                </div>
              )
          )}
          
        </div>
      </section>
      
        <div className="category-card">
        </div>;



      {/* <div className="products-container">
        {prods?.map((category) => <Category key={category._id} category={category} />)}
        
      </div> */}
        {console.log(prods)}
      
    </div>



    <div className="products-con" >
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>speaker There are many variations passages</p>
      </div>

      <div className="products-container">
        {productss?.map((product) => <Product key={product._id} product={product} />)}
      </div>
        {console.log(productss)}
    </div>



    <FooterBanner footerBanner={bannerData2 && bannerData2[0]} />
  </div>
);

export const getServerSideProps = async () => {

 const taxonQuery = '*[_type == "taxon"]';
 const taxons = await client.fetch(taxonQuery);

 const categoryQuery = '*[_type == "taxon"]{_id, name, slug, label, "cat": products[]->}';
 const prods = await client.fetch(categoryQuery);

  return {
    props: {taxons, prods }
  }
}



export default Category;
