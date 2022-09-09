// category.js

export default {
    title: 'Category',
    name: 'category',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'title',
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
      // add a unique slug field for queries, permalinks etc
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          // auto generates a slug from the title field
          source: 'title',
          auto: true
        }
      },
      {
        title: 'Categories',
        name: 'categories',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              {type: 'product'},
              // etc
            ]
          }
        ]
      }
    ]
  }