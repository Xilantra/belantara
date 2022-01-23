const general = {
  file: 'src/util/meta.json',
  label: '🗃 General',
  name: 'general',
  fields: [
    { 
      label: 'Meta Section (Mainly for SEO)',
      name: 'meta',
      widget: 'object',
      collapsed: true,
      fields:
      [
        {
          label: 'Site Title', 
          name: 'title', 
          widget: 'string',
          required: true
          },
        {
          label: 'Website URL',
          name: 'siteUrl',
          widget: 'string',
          pattern: ['.{10,}', "Should have more than 10 characters"],
          default: 'https://example.com',
          required: true
          },
        {
          label: 'Description',
          name: 'description',
          default: 'My personal website. Artist, engineer, astronaut, unicorn. From Kuala Lumpur, Malaysia',
          hint: 'Tell a bit about yourself or the website. This is important for SEO. Keep it under 160 characters.',
          widget: 'text',
          required: true
          },
        {
          label: 'Logo/Image (square)',
          name: 'logo',
          hint: 'Your image or logo in a square shape. It will be used in the header and footer.',
          default: '/img/logo.svg',
          widget: 'image',
          required: true
          },
        {
          label: 'Favicon',
          name: 'iconImage',
          default: '/img/logo.svg',
          widget: 'image',
          required: true
          },
        {
          label: 'Twitter Username',
          name: 'twitterUsername',
          widget: 'string',
          required: false
          },
        {
          label: 'Google Global Site Tag',
          name: 'googleAnalytics',
          default: 'UA-XXXXX-X',
          widget: 'string',
          hint: "Add your Google Global Site Tag's tracking ID, for example UA-XXXXX-X",
          required: false
        }
      ]
    },
    { 
      label: 'Theme',
      name: 'theme',
      widget: 'object',
      collapsed: true,
      hint: 'Settings for theme',
      fields: 
      [
        { 
          label: 'Background Color', 
          name: 'background', 
          widget: 'object', 
          fields: 
          [
            { label: 'Light Mode', name: 'light', default: '#F7F0EB', widget: 'color', enableAlpha: true, required: true },
            { label: 'Dark Mode', name: 'dark', default: '#180204', widget: 'color', enableAlpha: true, required: true }
          ]
        },
        { 
          label: 'Theme Color', 
          name: 'themeColor', 
          widget: 'object', 
          hint: 'Please avoid MacOS window control buttons color. (Red/Yellow/Green). More details [here](https://css-tricks.com/meta-theme-color-and-trickery/)', 
          fields: 
          [
            { label: 'Light Mode', name: 'light', default: '#F6B472', widget: 'color', required: true },
            { label: 'Dark Mode', name: 'dark', default: '#1A4555', widget: 'color', required: true }
          ]
        }
      ]
    },

  ],
}

export default general
