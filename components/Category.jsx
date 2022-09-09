import React from 'react';
import Link from 'next/link';
import _ from 'lodash';

import { urlFor } from '../lib/client';
import NumberFormat from 'react-number-format';


const Category = ({ category: { images, title, slug } } ) => {
// const img = _.first(image)?.url


  return (
    <div>
      <Link href={`/category/${slug.current}`} >
        <div className="product-category-card">
          <img src={urlFor(images)} alt=""
           width={250}
           height={250}
           className="product-category-image" />
          
          {/* <img src={urlFor(image && image[0])} alt=""
           width={250}
           height={250}
           className="product-category-image" />
           */}
          <p className="product-category-name">{title}</p>
          {/* <p className="product-category-name">{catname}</p> */}
          {/* <NumberFormat className="product-category-price" value={price} displayType={'text'} thousandSeparator={true} prefix={'₦'} /> */}
          {/* <p className="product-category-price">{price}</p> */}
          
        </div>
      </Link>
    </div>
  )
}


export default Category