export default {
  name: 'topBrands',
  title: 'Top 6 Brands Settings',
  type: 'document',
  fields: [
    // Brand 1
    {
      name: 'brand1',
      title: 'Brand 1',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Brand Name',
          type: 'string',
          initialValue: 'FOX'
        },
        {
          name: 'logo',
          title: 'Brand Logo',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          name: 'link',
          title: 'Brand Link/URL',
          type: 'url',
          initialValue: '/brand/FOX'
        }
      ]
    },
    // Brand 2
    {
      name: 'brand2',
      title: 'Brand 2',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Brand Name',
          type: 'string',
          initialValue: 'Knox'
        },
        {
          name: 'logo',
          title: 'Brand Logo',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          name: 'link',
          title: 'Brand Link/URL',
          type: 'url',
          initialValue: '/brand/Knox'
        }
      ]
    },
    // Brand 3
    {
      name: 'brand3',
      title: 'Brand 3',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Brand Name',
          type: 'string',
          initialValue: 'LuxPower'
        },
        {
          name: 'logo',
          title: 'Brand Logo',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          name: 'link',
          title: 'Brand Link/URL',
          type: 'url',
          initialValue: '/brand/LuxPower'
        }
      ]
    },
    // Brand 4
    {
      name: 'brand4',
      title: 'Brand 4',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Brand Name',
          type: 'string',
          initialValue: 'Ziewnic'
        },
        {
          name: 'logo',
          title: 'Brand Logo',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          name: 'link',
          title: 'Brand Link/URL',
          type: 'url',
          initialValue: '/brand/Ziewnic'
        }
      ]
    },
    // Brand 5
    {
      name: 'brand5',
      title: 'Brand 5',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Brand Name',
          type: 'string',
          initialValue: '1on Inverters'
        },
        {
          name: 'logo',
          title: 'Brand Logo',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          name: 'link',
          title: 'Brand Link/URL',
          type: 'url',
          initialValue: '/brand/1on'
        }
      ]
    },
    // Brand 6
    {
      name: 'brand6',
      title: 'Brand 6',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Brand Name',
          type: 'string',
          initialValue: 'Fronus'
        },
        {
          name: 'logo',
          title: 'Brand Logo',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          name: 'link',
          title: 'Brand Link/URL',
          type: 'url',
          initialValue: '/brand/Fronus'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'brand1.name'
    },
    prepare(selection: any) {
      return {
        title: 'Top 6 Brands Settings'
      }
    }
  }
}
