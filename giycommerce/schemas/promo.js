import { IoMdPricetags } from 'react-icons/io'
import supportedLanguages from './locale/supportedLanguages'

const baseLanguage = supportedLanguages.find((l) => l.isDefault)

export default {
  name: 'promo',
  title: 'Promo',
  description: '',
  type: 'document',
  icon: IoMdPricetags,
  fields: [
    { 
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
    },
    {
      name: 'tag2',
      title: 'Tag2',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'description2',
      title: 'Description2',
      type: 'string',
    },
    {
      name: 'description3',
      title: 'Description3',
      type: 'string',
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
