export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Sanity Studio',
            apiId: 'xxxxx-yyyy-zzzz-xxxx-yyyyyyyy',
            buildHookId: 'xxxyyyxxxyyyyxxxyyy',
            name: 'sanity-gatsby-studio',
          },
          {
            title: 'Website',
            apiId: 'yyyyy-xxxxx-zzzz-xxxx-yyyyyyyy',
            buildHookId: 'yyyyxxxxxyyyxxdxxx',
            name: 'sanity-gatsby-web',
          },
        ],
      },
    },
  ],
};
