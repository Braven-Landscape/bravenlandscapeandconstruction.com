export default {
  widgets: [
    {
      name: 'notes',
      options: {
        title: 'My notes',
        placeholder: 'Make a note so you remember!',
        backgroundColor: '#242a2f',
        color: '#efeff2',
      }
    },
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Sanity Studio',
            apiId: '7c5d94c7-428b-400e-873f-f3b48a08459c',
            buildHookId: 'https://api.netlify.com/build_hooks/60b0434d351fbb00e50e2268',
            name: 'braven-landscape',
          },
          {
            title: 'Website',
            apiId: '7c5d94c7-428b-400e-873f-f3b48a08459c',
            buildHookId: 'https://api.netlify.com/build_hooks/60b0435697acf700ccb06385',
            name: 'braven-landscape',
          },
        ],
      },
    },
  ],
};
