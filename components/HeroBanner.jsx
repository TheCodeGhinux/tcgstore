import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
       
        <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />
        {/* <p className="beats-solo">{heroBanner.smallText}</p> */}
        <div className="herobanner-text">
          <h3>{heroBanner.midText}</h3>
          <h3>{heroBanner.largeText1}</h3>
          <h3>{heroBanner.largeText2}</h3>
          <Link href={`/product/${heroBanner.slug}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
        </div>
        <div className='shop-now' >
          {/* <div className="desc">
            <h5>{heroBanner.desc}</h5>
            <p>{heroBanner.discount}</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default HeroBanner