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
    ]
  ]
}
