export default{
    title: 'Product Image',
    name: 'prodImage',
    type: 'document',
    options: {
      hotspot: true // <-- Defaults to false
    },
    fields: [
      {
        name: 'pImage',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      {
        name: 'caption',
        type: 'string',
        title: 'Caption',
        options: {
          isHighlighted: true // <-- make this field easily accessible
        }
      },
      {
        // Editing this field will be hidden behind an "Edit"-button
        name: 'attribution',
        type: 'string',
        title: 'Attribution',
      },
      
    ]
  }