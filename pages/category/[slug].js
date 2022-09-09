import React, { useState } from 'react';
import {AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar} from 'react-icons/ai';

import _ from 'lodash';

import { Product } from '../../components';

import { client, urlFor} from '../../lib/client';

import { StateContext, useStateContext } from '../../context/StateContext';
import NumberFormat from 'react-number-format';
import Link from 'next/link';


const CategoryDetails = ({ category, categories }) => {
    const { title, images, cat, image, name, details, price } = category;
    // const img = _.first(image)?.url

    const [index, setIndex] = useState(0);

    const { incQty, decQty, qty, onAdd } = useStateContext ();
  return (
    <div>

        <h3 className='category-header' >{title}</h3>
        {/* <img src={urlFor(images)} ></img> */}
        <div className="category-tab">
            {cat && (
                <div className="category-card1" style={{ listStyle: "none" }}>
                {cat.map((catt) => (
                    
                        <div className='category-card2' key={catt._id}>
                            <Link href={`/product/${catt.slug.current}`} >
                                <div className='category-card3' >
                                    <img src={urlFor(catt.image && catt.image[0])} alt=""
                                    width={250}
                                    height={250}
                                    className="category-image" />

                                    <span className="category-heading"
                                    >
                                        {catt.namey}
                                    </span>

                                    <NumberFormat className="product-price" value={catt.price} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
                                    {console.log(catt)}
                                </div>
                            </Link>
                               

                        
                        </div>
                    
                ))}
                </div>
            )}
        </div>

        
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "category"] {
        slug {
            current
        }
    }
    `;

    const categories = await client.fetch(query)

    const paths = categories.map((category) => ({
        params:{
            slug: category.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "category" && slug.current == '${slug}'][0]{ title,"cat": categories[]->}`;
    const categoriesQuery = '*[_type == "category"]'
    
    const category = await client.fetch(query);
    const categories = await client.fetch(categoriesQuery);
  
    return {
      props: { categories, category }
    }
  }

export default CategoryDetails