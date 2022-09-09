import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const SecondBanner = ({ secondBanner }) => {
return (
    <div className="second-banner-container">
        <div>
        
        <img src={urlFor(secondBanner.image)} alt="headphones" className="second-banner-image" />
        {/* <p className="beats-solo">{secondBanner.smallText}</p> */}
        <div className="second-banner-text">
            <h3>{secondBanner.midText}</h3>
            <h3>{secondBanner.largeText1}</h3>
            <h3>{secondBanner.largeText2}</h3>
        </div>
        <div className='shop-now' >
            <Link href={`/product/${secondBanner.product}`}>
            <button type="button">{secondBanner.buttonText}</button>
            </Link>
            <div className="desc">
            <h5>{secondBanner.desc}</h5>
            {/* <p>{secondBanner.discount}</p> */}
            </div>
        </div>
        </div>
    </div>
    )
}

export default SecondBanner