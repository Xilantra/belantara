const personal = {
  file: 'src/util/personal-links.json',
  label: '📇 Personal Links',
  name: 'personal',
  fields: [
    { 
      label: 'Social Media',
      name: 'socialMedia', 
      widget: 'object', 
      collapsed: true, 
      hint: "Simple links only show three social media links with icons. If you want to have more links, please use the Personal Links section below.", 
      fields:
        [
          {label: 'Facebook Username', name: 'facebookUsername', widget: 'string', required: false},
          {label: 'Twitter Username', name: 'twitterUsername', widget: 'string', required: false},
          {label: 'Instagram Username', name: 'instagramUsername', widget: 'string', required: false},
          {label: 'Pinterest Username', name: 'pinterestUsername', widget: 'string', required: false},
          {label: 'Tiktok Username', name: 'tiktokUsername', widget: 'string', required: false},
          {label: 'Dribbble Username', name: 'dribbbleUsername', widget: 'string', required: false},
          {label: 'DeviantArt Username', name: 'deviantartUsername', widget: 'string', required: false},
          {label: 'Behance Username', name: 'behanceUsername', widget: 'string', required: false},
          {label: 'Youtube Username', name: 'youtubeUsername', widget: 'string', required: false},
          {label: 'Linkedin Username', name: 'linkedinUsername', widget: 'string', required: false},
          {label: 'Medium Username', name: 'mediumUsername', widget: 'string', required: false},
          {label: 'Matter Username', name: 'getmatterUsername', widget: 'string', required: false},
          {label: 'Github Username', name: 'githubUsername', widget: 'string', required: false},
          {label: 'Codepen Username', name: 'codepenUsername', widget: 'string', required: false},
          {label: 'Buy Me a Coffee Username', name: 'buymeacoffeeUsername', widget: 'string', required: false},
          {label: 'Email', name: 'email', widget: 'string', required: false},
          {label: 'Enter Link Yourself', name: 'custom', widget: 'boolean', hint: 'Enable this if you want to use the Personal Links below', default: false, required: false}
        ]
      },
      { 
        label: 'Personal Links', 
        name: 'personalLinks', 
        widget: 'list', 
        label_singular: 'Personal Link', 
        hint: "Personal Links are links that are not in the navigation bar. They are usually links to social media, or to other websites. No icons.", 
        required: false, 
        fields:
          [
            { 
              label: 'Title', 
              name: 'title', 
              widget: 'string'
            },
            { 
              label: 'URL', 
              name: 'url', 
              widget: 'string', 
              // pattern: ['^https?:\/\/(.*)}', "Missing the https://"], 
              default: 'https://', 
              hint: "Don't forget to include the https://"
            }
          ]
        }
        
  ],
}

export default personal
