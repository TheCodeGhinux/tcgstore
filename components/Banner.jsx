import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
import {getClient} from '../lib/client'

const Banner = ({ sbanner } ) => {
  return (
    <div className="small-banner-container product-card">
        <div>
        
            <img src={urlFor(sbanner.image)} alt="headphones" className=" prouct-image small-banner-image" />
            {/* <p className="beats-solo">{smallText}</p> */}
            <div className="small-banner-text">
                {/* <h3>{midText}</h3> */}
                {/* <h3>{sbanner.largeText1}</h3> */}
                {/* <h3>{sbanner.largeText2}</h3> */}
            </div>
        </div>
        {/* <div className='shop-now' >
            <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
            </Link>
            <div className="desc">
            <h5>{desc}</h5>
            <p>{discount}</p>
            </div>
        </div> */}
        
    </div>
  )
}


// export async function getStaticProps(){
//     const sbanner = await getClientBuildManifest.fetch(groq`
//     *[_type == "sbanner" ]{
//         _id,
//         image,
//         largeText1,
//         largeText2
//     }`)
// }

export default Banner