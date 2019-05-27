import { MdPlayCircleOutline } from 'react-icons/lib/md'

export default {
    name: 'video',
    title: 'Video',
    type: 'document',
    icon: MdPlayCircleOutline,
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
        name: 'section',
        title: 'Area Selection',
        type: 'reference',
        to: {type: 'section'}
      },{
        name: 'video',
        title: 'Upload Video',
        type: 'mux.video'
      },
      {
        name: 'access',
        title: 'Only Ace Members',
        type: 'boolean',
        value: false
      },
      {
        name: 'categories',
        title: 'Skill Focus',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}]
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
        title: 'title'
      }
    }
  }
  