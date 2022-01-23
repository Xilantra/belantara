const linkList = {
  label: 'List',
  name: 'linkList',
  widget: 'list',
  default: '',
  required: false,
  minimize_collapsed: true,
    fields: [
      {label: 'Name', name: 'name', widget: 'string'},
      {label: 'URL', name: 'url', widget: 'string'},
      {label: 'Icon/Image', name: 'image', widget: 'image', default: '/img/link.png' }
    ]
  }
  
  export default linkList
  