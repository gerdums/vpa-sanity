import S from '@sanity/desk-tool/structure-builder'
import { MdDashboard, MdSettings, MdDescription, MdSupervisorAccount, MdPlaylistAddCheck, MdVideoLibrary, MdFitnessCenter, MdRoomService } from 'react-icons/lib/md'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = listItem =>
  !['page', 'route', 'site-config', 'video', 'post', 'author', 'category', 'section' ].includes(listItem.getId())

export default () =>
S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Configuration')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('config')
            .schemaType('site-config')
            .documentId('global-config')
        ),
      S.listItem()
        .title('Pages')
        .icon(MdDashboard)
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),
        S.listItem()
        .title('Video Library')
        .icon(MdVideoLibrary)
        .child(
          S.list()
            .title('Video Library')
            .items([
              S.listItem()
                .title('The Gym')
                .icon(MdFitnessCenter)
                .child(
                  S.documentList()
                    .title('The Gym')
                    .filter('_type == $type && editorialState == $state')
                    .params({ type: 'video', state: 'review' })
                ),
              S.listItem()
                .title('The Mound')
                .icon(MdRoomService)
                .child(
                  S.documentList()
                    .title('The Mound')
                    .filter('_type == $type && editorialState == $state')
                    .params({ type: 'video', state: 'review' })
                ),
              S.listItem()
                .title('All Videos')
                .icon(MdVideoLibrary)
              .child(S.documentTypeList('video').title('All Videos'))
            ])
        ),  
      S.listItem()
        .title('Blog Posts')
        .icon(MdDescription)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog Posts')),
      S.listItem()
        .title('Authors')
        .icon(MdSupervisorAccount)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Skills')
        .icon(MdPlaylistAddCheck)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Skills')),
      S.listItem()
        .title('Custom Links')
        .schemaType('route')
        .child(S.documentTypeList('route').title('Cusom Links (development)')),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
