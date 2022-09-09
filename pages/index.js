import React from 'react';
import Link from 'next/link';
import _ from 'lodash';
import { urlFor } from '../lib/client';

import NumberFormat from 'react-number-format';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner, SecondBanner, Banner, Category } from '../components';
// import {Category } from './Category'



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
const Home = ({ productss, bannerData, bannerData2, sbanners ,taxons, category, prods, categories }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    {/* <SmallBanner smallBanner={sbannerData.length && sbannerData}/> */}
    {/* <SmallBanner smallBanner={bannerData.length && bannerData[3]}  />
    <SecondBanner secondBanner={bannerData.length && bannerData[0]}  /> */}
    {/* <SmallBanner/> */}


    <div className="products-category-container">
      {categories?.map((category) => <Category key={category._id} category={category} />)}
    </div>


    <div className='sbanner-con marquee'>
    <div className="sbanner-container maylike-products-container track1">
        {sbanners?.map((sbanner) => <Banner key={sbanner._id} sbanner={sbanner} />)}
      </div>
    </div>

    <div className="categories-con">
      <div className="products-heading">
        <h2>Featured Products</h2>
        {/* <p>Browse products by categories</p> */}
      </div>

      {/* <Category/> */}


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
                    <h3>{name}</h3>
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
    
                                <Link href={`/product/${category.slug.current}`} >
                                  <div className='category-card3' >
                                    <img src={urlFor(category.image && category.image[0])} alt=""
                                    width={250}
                                    height={250}
                                    className="category-image" />

                                    <span className="category-heading"
                                    >
                                      {category.namey}
                                    </span>
        
                                    <NumberFormat className="product-price" value={category.price} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
                                  </div>
                                </Link>
    
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
      



      {/* <div className="products-container">
        {prods?.map((category) => <Category key={category._id} category={category} />)}
        
      </div> */}
        
      
    </div>



    {/* <div className="products-con" >
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>speaker There are many variations passages</p>
      </div>

      <div className="products-container">
        {productss?.map((product) => <Product key={product._id} product={product} />)}
      </div>
        {console.log(productss)}
    </div> */}



    <FooterBanner footerBanner={bannerData2 && bannerData2[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]{"image": pImages[]->{"url": images.asset->url}, name, slug, price }';
  const productss = await client.fetch(query);

 const categoryQuery = '*[_type == "category"]';
 const categories = await client.fetch(categoryQuery);

 const taxonQuery = '*[_type == "taxon"]';
 const taxons = await client.fetch(taxonQuery);

 const taxonQuery2 = '*[_type == "taxon"]{_id, name, slug, label, "cat": products[]->}';
 const prods = await client.fetch(taxonQuery2);
  
  // const categoryQuery = '*[_type == "product"]{name, price}';
  // const categories = await client.fetch(categoryQuery);


  const bannerQuery = '*[_type == "banner" && index == 1]';
  const bannerData = await client.fetch(bannerQuery);
  
  const sbannerQuery = '*[_type == "sbanner"]';
  const sbanners = await client.fetch(sbannerQuery);
 
  const bannerQuery2 = '*[_type == "banner2"]';
  const bannerData2 = await client.fetch(bannerQuery2);

  return {
    props: { productss, bannerData, bannerData2, sbanners, taxons, prods, categories }
  }
}


export default Home;
