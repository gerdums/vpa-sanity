export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cebee569efd1623cbc7735b',
                  title: 'Sanity Studio',
                  name: 'vpa-sanity-studio',
                  apiId: '28c663fc-56ed-4f44-ab0f-cc8f85339caa'
                },
                {
                  buildHookId: '5cebee56a5e4b64ee990d3e4',
                  title: 'Landing pages Website',
                  name: 'vpa-sanity',
                  apiId: 'cf9817ea-1a28-4195-88f0-a3454635ca68'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gerdums/vpa-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://vpa-sanity.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
