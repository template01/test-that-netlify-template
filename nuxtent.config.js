module.exports = {
  content: [
    [
      'books',
      {
        page: '/books/_slug',
        permalink: '/books/:slug',
        isPost: false,
        generate: ['get','getAll']
      }
    ],
    [
      'pages',
      {
        page: '/pages/_slug',
        permalink: '/pages/:slug',
        isPost: false,
        generate: ['get','getAll']
      }
    ]
  ]
}
