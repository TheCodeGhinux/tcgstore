import { BsFillImageFill } from 'react-icons/bs'
import supportedLanguages from './locale/supportedLanguages'

const baseLanguage = supportedLanguages.find((l) => l.isDefault)

export default {
  name: 'productImage',
  title: 'Product Image',
  description: '',
  type: 'document',
  icon: BsFillImageFill,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      validation: (rule) => rule.required(),
    },
  ],
  // preview: {
  //   select: {
  //     title: `name.${baseLanguage.id}`,
  //     media: 'images'
  //   },
  // },
}
