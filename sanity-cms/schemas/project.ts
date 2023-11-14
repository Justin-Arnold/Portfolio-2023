export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [{
        name: 'name',
        type: 'string',
        title: 'Name'
    },{
        name: 'description',
        type: 'string',
        title: 'Description'
    },{
        name: 'links',
        type: 'array',
        title: 'Links',
        of: [{
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [{
                name: 'name',
                type: 'string',
                title: 'Name'
            },{
                name: 'url',
                type: 'string',
                title: 'URL'
            },{
                name: 'icon',
                type: 'string',
                title: 'Icon'
            }]
        }]
    },{
        name: 'tags',
        type: 'array',
        title: 'Tags',
        of: [{
            name: 'tag',
            type: 'string',
            title: 'Tag'
        }]
    }]
}