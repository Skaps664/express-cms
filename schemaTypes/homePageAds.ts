const homePageAds = {
  name: 'homePageAds',
  title: 'Home Page Ads',
  type: 'document',
  fields: [
    {
      name: 'mainSolarAd',
      title: 'Main Solar Advertisement',
      type: 'object',
      fields: [
        {
          name: 'offerBadge',
          title: 'Offer Badge Text',
          type: 'string',
          initialValue: 'LIMITED OFFER'
        },
        {
          name: 'headline',
          title: 'Main Headline',
          type: 'string',
          initialValue: 'Go Solar & Save'
        },
        {
          name: 'subHeadline',
          title: 'Sub Headline',
          type: 'string',
          initialValue: 'Up to 90% on Bills'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
          initialValue: 'Let the Sun Lead the Way to Energy Independence'
        },
        {
          name: 'benefits',
          title: 'Benefits',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'text', type: 'string' },
              { name: 'icon', type: 'string' }
            ]
          }],
          initialValue: [
            { text: 'Clean Energy', icon: 'sun' },
            { text: '24/7 Power', icon: 'battery' },
            { text: 'Home Value +15%', icon: 'home' },
            { text: 'Govt. Incentives', icon: 'graph' }
          ]
        },
        {
          name: 'pricing',
          type: 'object',
          fields: [
            { name: 'startingPrice', type: 'number' },
            { name: 'monthlyPrice', type: 'number' },
            { name: 'priceText', type: 'string' }
          ]
        },
        {
          name: 'cta',
          type: 'object',
          fields: [
            { name: 'phoneNumber', type: 'string' },
            { name: 'consultationText', type: 'string' },
            { name: 'consultationLink', type: 'url' }
          ]
        },
        {
          name: 'urgencyText',
          type: 'string',
          initialValue: 'Offer expires soon • Limited slots available'
        },
        {
          name: 'mainImage',
          title: 'Main Image',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          name: 'testimonial',
          type: 'object',
          fields: [
            { name: 'text', type: 'string' },
            { name: 'rating', type: 'number' }
          ]
        },
        {
          name: 'savingsBadge',
          type: 'object',
          fields: [
            { name: 'percentage', type: 'number' },
            { name: 'text', type: 'string' }
          ]
        }
      ]
    },
    {
      name: 'miniTopAd',
      title: 'Mini Top Advertisement',
      type: 'object',
      fields: [
        {
          name: 'headline',
          type: 'string',
          initialValue: 'Ready to Go Solar?'
        },
        {
          name: 'description',
          type: 'string',
          initialValue: 'Schedule a free consultation with our solar experts today'
        },
        {
          name: 'buttonText',
          type: 'string',
          initialValue: 'Book Consultation'
        },
        {
          name: 'buttonLink',
          type: 'url'
        }
      ]
    },
    {
      name: 'miniBottomAd',
      title: 'Mini Bottom Advertisement',
      type: 'object',
      fields: [
        {
          name: 'headline',
          type: 'string',
          initialValue: 'Ready to Go Solar?'
        },
        {
          name: 'description',
          type: 'string',
          initialValue: 'Schedule a free consultation with our solar experts today'
        },
        {
          name: 'buttonText',
          type: 'string',
          initialValue: 'Book Consultation'
        },
        {
          name: 'buttonLink',
          type: 'url'
        }
      ]
    }
  ]
}

export default homePageAds
