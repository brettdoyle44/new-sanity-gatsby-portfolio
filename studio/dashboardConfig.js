export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5df7c9f5be57ad1be13a0490',
                  title: 'Sanity Studio',
                  name: 'new-sanity-gatsby-portfolio-studio',
                  apiId: 'fe4826ee-c418-4fa1-8dbb-9dcf90efe649'
                },
                {
                  buildHookId: '5df7c9f548dfb43a1bba9061',
                  title: 'Portfolio Website',
                  name: 'new-sanity-gatsby-portfolio',
                  apiId: '169df5a0-67bd-44f5-bd08-2f1f2133b653'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brettdoyle44/new-sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://new-sanity-gatsby-portfolio.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
