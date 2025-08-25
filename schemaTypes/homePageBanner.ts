const homePageBanner = {
  name: 'homePageBanner',
  title: 'Home Page Banners',
  type: 'document',
  description: 'Manage all banner images, text, and links for the home page grid layout',
  fields: [
    {
      name: 'TopFullLeftBAnner',
      title: 'Desktop: Top Left Banner',
      type: 'object',
      description: 'Small banner on the top left of desktop layout',
      fields: [
        { 
          name: 'image', 
          title: 'Banner Image', 
          type: 'image',
          options: { hotspot: true },
          validation: (Rule: any) => Rule.required()
        },
        { 
          name: 'text', 
          title: 'Banner Text', 
          type: 'string',
          description: 'Main text that appears on the banner'
        },
        { 
          name: 'button', 
          title: 'Button Text', 
          type: 'string',
          description: 'Text for the call-to-action button'
        },
        { 
          name: 'link', 
          title: 'Redirect Link', 
          type: 'url',
          description: 'Where this banner should redirect when clicked',
          validation: (Rule: any) => Rule.required()
        },
      ],
    },
    {
      name: 'TopCenterLeftBAnner',
      title: 'Desktop: Bottom Center Left Banner',
      type: 'object',
      description: 'Banner positioned at bottom center left in desktop layout',
      fields: [
        { 
          name: 'image', 
          title: 'Banner Image', 
          type: 'image',
          options: { hotspot: true },
          validation: (Rule: any) => Rule.required()
        },
        { 
          name: 'text', 
          title: 'Banner Text', 
          type: 'string',
          description: 'Main text that appears on the banner'
        },
        { 
          name: 'button', 
          title: 'Button Text', 
          type: 'string',
          description: 'Text for the call-to-action button'
        },
        { 
          name: 'link', 
          title: 'Redirect Link', 
          type: 'url',
          description: 'Where this banner should redirect when clicked',
          validation: (Rule: any) => Rule.required()
        },
      ],
    },
    {
      name: 'TopCenterRightBAnner',
      title: 'Desktop: Bottom Center Right Banner',
      type: 'object',
      description: 'Banner positioned at bottom center right in desktop layout',
      fields: [
        { 
          name: 'image', 
          title: 'Banner Image', 
          type: 'image',
          options: { hotspot: true },
          validation: (Rule: any) => Rule.required()
        },
        { 
          name: 'text', 
          title: 'Banner Text', 
          type: 'string',
          description: 'Main text that appears on the banner'
        },
        { 
          name: 'button', 
          title: 'Button Text', 
          type: 'string',
          description: 'Text for the call-to-action button'
        },
        { 
          name: 'link', 
          title: 'Redirect Link', 
          type: 'url',
          description: 'Where this banner should redirect when clicked',
          validation: (Rule: any) => Rule.required()
        },
      ],
    },
    {
      name: 'BottomLeftBanner',
      title: 'Desktop: Bottom Left Banner',
      type: 'object',
      description: 'Banner positioned at bottom left in desktop layout',
      fields: [
        { 
          name: 'image', 
          title: 'Banner Image', 
          type: 'image',
          options: { hotspot: true },
          validation: (Rule: any) => Rule.required()
        },
        { 
          name: 'text', 
          title: 'Banner Text', 
          type: 'string',
          description: 'Main text that appears on the banner'
        },
        { 
          name: 'button', 
          title: 'Button Text', 
          type: 'string',
          description: 'Text for the call-to-action button'
        },
        { 
          name: 'link', 
          title: 'Redirect Link', 
          type: 'url',
          description: 'Where this banner should redirect when clicked',
          validation: (Rule: any) => Rule.required()
        },
      ],
    },
    {
      name: 'BottomWideCenterBanner',
      title: 'Desktop: Top Wide Center Banner',
      type: 'object',
      description: 'Wide banner at the top center of desktop layout (spans 2 columns)',
      fields: [
        { 
          name: 'image', 
          title: 'Banner Image', 
          type: 'image',
          options: { hotspot: true },
          validation: (Rule: any) => Rule.required()
        },
        { 
          name: 'text', 
          title: 'Banner Text', 
          type: 'string',
          description: 'Main text that appears on the banner'
        },
        { 
          name: 'button', 
          title: 'Button Text', 
          type: 'string',
          description: 'Text for the call-to-action button'
        },
        { 
          name: 'link', 
          title: 'Redirect Link', 
          type: 'url',
          description: 'Where this banner should redirect when clicked',
          validation: (Rule: any) => Rule.required()
        },
      ],
    },
    {
      name: 'FullRightTallBanner',
      title: 'Desktop: Right Tall Banner',
      type: 'object',
      description: 'Tall banner on the right side (spans 2 rows)',
      fields: [
        { 
          name: 'image', 
          title: 'Banner Image', 
          type: 'image',
          options: { hotspot: true },
          validation: (Rule: any) => Rule.required()
        },
        { 
          name: 'text', 
          title: 'Banner Text', 
          type: 'string',
          description: 'Main text that appears on the banner'
        },
        { 
          name: 'button', 
          title: 'Button Text', 
          type: 'string',
          description: 'Text for the call-to-action button'
        },
        { 
          name: 'link', 
          title: 'Redirect Link', 
          type: 'url',
          description: 'Where this banner should redirect when clicked',
          validation: (Rule: any) => Rule.required()
        },
      ],
    },
    {
      name: 'MobileTopWideBanner',
      title: 'Mobile: Hero Banner (Top)',
      type: 'object',
      description: 'Main hero banner for mobile view - appears at the top',
      fields: [
        { 
          name: 'image', 
          title: 'Banner Image', 
          type: 'image',
          options: { hotspot: true },
          validation: (Rule: any) => Rule.required()
        },
        { 
          name: 'text', 
          title: 'Banner Text', 
          type: 'string',
          description: 'Main text that appears on the banner'
        },
        { 
          name: 'button', 
          title: 'Button Text', 
          type: 'string',
          description: 'Text for the call-to-action button'
        },
        { 
          name: 'link', 
          title: 'Redirect Link', 
          type: 'url',
          description: 'Where this banner should redirect when clicked',
          validation: (Rule: any) => Rule.required()
        },
      ],
    },
    {
      name: 'MobileSecondWideBanner',
      title: 'Mobile: Flash Deals Banner (Second)',
      type: 'object',
      description: 'Flash deals banner for mobile view - appears second',
      fields: [
        { 
          name: 'image', 
          title: 'Banner Image', 
          type: 'image',
          options: { hotspot: true },
          validation: (Rule: any) => Rule.required()
        },
        { 
          name: 'text', 
          title: 'Banner Text', 
          type: 'string',
          description: 'Main text that appears on the banner'
        },
        { 
          name: 'button', 
          title: 'Button Text', 
          type: 'string',
          description: 'Text for the call-to-action button'
        },
        { 
          name: 'link', 
          title: 'Redirect Link', 
          type: 'url',
          description: 'Where this banner should redirect when clicked',
          validation: (Rule: any) => Rule.required()
        },
      ],
    },
    {
      name: 'MobileBottomLeftBanner',
      title: 'Mobile: Bottom Left Card',
      type: 'object',
      description: 'Left card in the bottom dual-card row on mobile',
      fields: [
        { 
          name: 'image', 
          title: 'Banner Image', 
          type: 'image',
          options: { hotspot: true },
          validation: (Rule: any) => Rule.required()
        },
        { 
          name: 'text', 
          title: 'Banner Text', 
          type: 'string',
          description: 'Brand name or main text (e.g., "JINKO SOLAR PANELS")'
        },
        { 
          name: 'button', 
          title: 'Button Text', 
          type: 'string',
          description: 'Text for the call-to-action button'
        },
        { 
          name: 'link', 
          title: 'Redirect Link', 
          type: 'url',
          description: 'Where this banner should redirect when clicked',
          validation: (Rule: any) => Rule.required()
        },
      ],
    },
    {
      name: 'MobileBottomRightBanner',
      title: 'Mobile: Bottom Right Card',
      type: 'object',
      description: 'Right card in the bottom dual-card row on mobile',
      fields: [
        { 
          name: 'image', 
          title: 'Banner Image', 
          type: 'image',
          options: { hotspot: true },
          validation: (Rule: any) => Rule.required()
        },
        { 
          name: 'text', 
          title: 'Banner Text', 
          type: 'string',
          description: 'Main text that appears on the banner'
        },
        { 
          name: 'button', 
          title: 'Button Text', 
          type: 'string',
          description: 'Text for the call-to-action button'
        },
        { 
          name: 'link', 
          title: 'Redirect Link', 
          type: 'url',
          description: 'Where this banner should redirect when clicked',
          validation: (Rule: any) => Rule.required()
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'TopFullLeftBAnner.text'
    },
    prepare(selection: any) {
      return {
        title: 'Home Page Banners',
        subtitle: 'Manage all banner content for home page grid'
      }
    }
  }
}

export default homePageBanner
