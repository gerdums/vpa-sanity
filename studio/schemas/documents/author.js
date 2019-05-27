export default {
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'title',
        title: 'Position/Title',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96
        }
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'bio',
        title: 'Short Bio Statment',
        description: 'Please provide a short introduction',
        type: 'text'
      }
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image'
      }
    }
  }
  