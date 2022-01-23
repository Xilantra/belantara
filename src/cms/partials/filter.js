const filter = {
    view_filters: [
        // Disabled because of the popup bug (Tested with Safari)
        // {
        //     label: 'Posts With Index',
        //     field: 'title',
        //     pattern: 'This is post #',
        // },
        // {
        //     label: 'Posts Without Index',
        //     field: 'title',
        //     pattern: 'front matter post',
        // },
        {
            label: 'Drafts',
            field: 'draft',
            pattern: 'true',
        },
    ],
    view_groups: [
        {
            label: 'Year',
            field: 'date',
            pattern: '\d{4}',
        },
        {
            label: 'Drafts',
            field: 'draft',
        },
    ],
}
  
export default filter
  