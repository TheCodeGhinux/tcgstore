import { MdShoppingCart } from 'react-icons/md'
import supportedLanguages from './locale/supportedLanguages'

const baseLanguage = supportedLanguages.find((l) => l.isDefault)

export default {
  name: 'product',
  title: 'Product',
  description: '',
  type: 'document',
  icon: MdShoppingCart,
  fields: [
    { 
      name: 'namey',
      title: 'Namey',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'string'
    },
    {
      name: 'tag2',
      title: 'Tag 2',
      type: 'string'
    },
    {
      name: 'promoDesc',
      title: 'Promo Desc',
      type: 'string'
    },
    { 
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'namey',
        maxLength: 90,
      }
    },
    { 
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    { 
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'reference',
      title: 'Reference',
      type: 'string',
      options: {
        source: 'slug',
        maxLength: 90,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'pImages',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'productImage',
          },
        },
      ],
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ 
        type: 'image', 
        options: {
          hotspot: true
        }
      }],
      
    },
    {
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'variant',
          },
        },
      ],
      validation: (rule) => rule.required(),
    },
    {
      name: 'promo',
      title: 'Promotion',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'promo',
          },
        },
      ],
    },
  ],

  // preview: {
  //   select: {
  //     title: `name.${baseLanguage.id}`,
  //     subtitle: `slug.${baseLanguage.id}.current`,
  //     media: 'images.0.images',
  //   },
  //   prepare({ title, subtitle, media }) {
  //     return {
  //       title: title,
  //       subtitle: `/${subtitle}`,
  //       media: media,
  //     }
  //   },
  // },
}
