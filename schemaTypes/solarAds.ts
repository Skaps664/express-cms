const solarAds = {
  name: 'solarAds',
  title: 'Solar Advertisements',
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
          initialValue: 'Limited Offer'
        },
        {
          name: 'headline',
          title: 'Main Headline',
          type: 'string',
          initialValue: 'Go Solar. Save Big.'
        },
        {
          name: 'subHeadline',
          title: 'Sub Headline',
          type: 'string',
          initialValue: 'Energy freedom starts now.'
        },
        {
          name: 'benefits',
          title: 'Benefits List',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'text', title: 'Benefit Text', type: 'string' },
              { 
                name: 'icon', 
                title: 'Icon', 
                type: 'string',
                options: {
                  list: [
                    { title: 'Sun', value: 'sun' },
                    { title: 'Battery', value: 'battery' },
                    { title: 'Home', value: 'home' },
                    { title: 'Graph', value: 'graph' }
                  ]
                }
              }
            ]
          }],
          initialValue: [
            { text: 'Clean Energy', icon: 'sun' },
            { text: '24/7 Power', icon: 'battery' },
            { text: '+15% Home Value', icon: 'home' }
          ]
        },
        {
          name: 'pricing',
          title: 'Pricing Information',
          type: 'object',
          fields: [
            { 
              name: 'startingPrice', 
              title: 'Starting Price (PKR)', 
              type: 'number',
              initialValue: 675000
            },
            { 
              name: 'monthlyPrice', 
              title: 'Monthly Price (PKR)', 
              type: 'number',
              initialValue: 12500
            },
            { 
              name: 'priceText', 
              title: 'Price Label Text', 
              type: 'string',
              initialValue: 'Starting at'
            }
          ]
        },
        {
          name: 'cta',
          title: 'Call to Action',
          type: 'object',
          fields: [
            { 
              name: 'phoneNumber', 
              title: 'Phone Number', 
              type: 'string' 
            },
            { 
              name: 'callButtonText', 
              title: 'Call Button Text', 
              type: 'string',
              initialValue: 'Call Now'
            },
            { 
              name: 'consultationText', 
              title: 'Consultation Button Text', 
              type: 'string',
              initialValue: 'Free Consultation'
            },
            { 
              name: 'consultationLink', 
              title: 'Consultation Link', 
              type: 'url' 
            }
          ]
        },
        {
          name: 'urgencyText',
          title: 'Urgency Message',
          type: 'string',
          initialValue: 'Offer expires soon'
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
          name: 'savingsBadge',
          title: 'Savings Badge',
          type: 'object',
          fields: [
            { 
              name: 'percentage', 
              title: 'Savings Percentage', 
              type: 'number',
              initialValue: 90
            },
            { 
              name: 'text', 
              title: 'Badge Text', 
              type: 'string',
              initialValue: 'On Bills'
            }
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
          title: 'Headline',
          type: 'string',
          initialValue: 'Ready to Go Solar?'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
          initialValue: 'Schedule a free consultation with our solar experts today'
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Book Consultation'
        },
        {
          name: 'buttonLink',
          title: 'Button Link',
          type: 'url'
        },
        {
          name: 'backgroundImage',
          title: 'Background Image (Optional)',
          type: 'image',
          options: {
            hotspot: true
          }
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
          title: 'Headline',
          type: 'string',
          initialValue: 'Ready to Go Solar?'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
          initialValue: 'Schedule a free consultation with our solar experts today'
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Book Consultation'
        },
        {
          name: 'buttonLink',
          title: 'Button Link',
          type: 'url'
        },
        {
          name: 'backgroundImage',
          title: 'Background Image (Optional)',
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    }
  ]
}

export default solarAds;
