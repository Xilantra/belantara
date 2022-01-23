const linkList = {
  label: 'List',
  name: 'stackList',
  widget: 'list',
  default: '',
  required: false,
  minimize_collapsed: true,
    fields: [
      {label: 'Name', name: 'name', widget: 'string', hint: 'Can be a person, band, service, website or anything you like to share.'},
      {label: 'Description', name: 'description', widget: 'string'},
      {label: 'URL', name: 'url', widget: 'string'},
      {label: 'Icon/Image', name: 'image', widget: 'image', default: '/img/collection.png' }
    ]
  }
  
  export default linkList
  