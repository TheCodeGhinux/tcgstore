import React from 'react';
import Link from 'next/link';
import _ from 'lodash';

import { urlFor } from '../lib/client';
import NumberFormat from 'react-number-format';


const Product = ({ product: { image, name, slug, price, catname1 } } ) => {
const img = _.first(image)?.url


  return (
    <div>
      <Link href={`/product/${slug.current}`} >
        <div className="product-card">
          <img src={img} alt=""
           width={250}
           height={250}
           className="product-image" />
          
          {/* <img src={urlFor(image && image[0])} alt=""
           width={250}
           height={250}
           className="product-image" />
           */}
          <p className="product-name">{name}</p>
          {/* <p className="product-name">{catname}</p> */}
          <NumberFormat className="product-price" value={price} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
          {/* <p className="product-price">{price}</p> */}
          
        </div>
      </Link>
    </div>
  )
}

export function PriceNum({ value }) {
  return (
<NumberFormat
  value={price}
  className="foo"
  displayType={'text'}
  thousandSeparator={true}
  prefix={'$'}
  renderText={(value, props) => <div {...props}>{value}</div>}
/>
  );
}

export default Product