export default {
    name: 'video',
    title: 'Video',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        }
      },
      {
        name: 'url',
        title: 'Vimeo URL',
        type: 'string'
      },
      {
        name: 'section',
        title: 'Section',
        type: 'reference',
        to: {type: 'section'}
      },
      {
        name: 'thumbnail',
        title: 'Thumbnail image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}]
      },
      {
        name: 'subCategory',
        title: 'Sub Category',
        type: 'string'
      },
      {
        name: 'focus',
        title: 'Skill Focus',
        type: 'string'
      },
      {
        name: 'need',
        title: 'Need',
        type: 'string'
      },
      {
        name: 'tips',
        title: 'Tips',
        type: 'portableText'
      },
      {
        name: 'body',
        title: 'Body',
        type: 'portableText'
      }
    ],
  
    preview: {
      select: {
        title: 'title',
        author: 'author.name',
        media: 'mainImage'
      },
      prepare(selection) {
        const {author} = selection
        return Object.assign({}, selection, {
          subtitle: author && `by ${author}`
        })
      }
    }
  }
  