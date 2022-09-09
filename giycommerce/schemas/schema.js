import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import product from './product';
import banner from './banner';
import logo from './logo';
import banner2 from './banner2';
import carouselBanner from './carousel-banner';
import sbanner from './sbanner';
import category from './category';
import name from './name';
// import prodPrice from './prodPrice';
import prodImage from './prodImage';
import article from './article';
import promo from './promo';



// We import object and document schemas
import country from './country'
// import product from './product'
import variant from './variant'
import size from './size'
import taxon from './taxon'
import taxonn from './taxonn'
import taxonomy from './taxonomy'
import catalog from './catalog'
import blockContent from './blockContent'

import productImage from './productImage'
import localeString from './locale/String'
import localeText from './locale/Text'
import localeSlug from './locale/Slug'
import localeBlockContent from './locale/BlockContent'



export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ product, logo, banner, banner2, sbanner, carouselBanner, category, name, prodImage, article, promo,

   // The following are document types which will appear
    // in the studio.
    country,
    variant,
    size,
    taxon,
    taxonn,
    taxonomy,
    catalog,
    // When added to this list, object types can be used as
    // { type: "typename" } in other document schemas
    productImage,
    blockContent,
    localeString,
    localeText,
    localeSlug,
    localeBlockContent,
  
  ]),
})
  