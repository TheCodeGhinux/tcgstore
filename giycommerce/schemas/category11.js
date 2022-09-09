export default{
    name: "category11",
    title: "Category",
    type: "document",
    fields: [{
        title: "Title",
        name: "title",
        type: "string",
      },
      {
        title: "Slug",
        name: "slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
        },
      },



      // { 
      //   name: 'image',
      //   title: 'Image',
      //   type: "reference",
      //   to: {
      //     type: "product"
      //   }
      // },



      {
        title: "Description",
        name: "description",
        type: "text",
      },
      // {
      //   name: 'image',
      //   title: 'Image',
      //   type: 'array',
      //   of: [{ type: 'product' }],
      //   options: {
      //     hotspot: true,
      //   }
      // },




      {
        title: 'image',
        name: 'image',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              {type: 'pImage'}
            ]
          }
        ]
      },


      // {
      //   title: 'Image',
      //   name: 'image',
      //   type: 'array',
      //   of: [
      //     {
      //       type: 'reference',
      //       to: [
      //         {type: 'image',
      //           of: [{ type: 'product'}],
      //           options: {
      //             hotspot: true
      //           }
      //       }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   name: 'image',
      // title: 'Image',
      // type: 'reference',
      // of: [{ type: 'image' }],
      // options: {
      //   hotspot: true,
      //   },
      // },
      {
        title: "Hex Code",
        name: "hexCode",
        type: "string",
      },
    ],
  };