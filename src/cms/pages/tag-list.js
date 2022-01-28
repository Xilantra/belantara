const tagList = {
  file: 'src/util/tag-list.json',
  label: '🔖 Tag List',
  name: 'tagList',
  fields: [
      { 
        label: 'Tags', 
        name: 'tags', 
        widget: 'list', 
        label_singular: 'Tag',
        required: false, 
        fields:
          [
            { 
              label: 'Tag', 
              name: 'tag', 
              widget: 'string'
            },
          ]
        }
        
  ],
}

export default tagList
