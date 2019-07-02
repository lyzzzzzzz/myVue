module.exports = {
  presets: [
    '@vue/app',
 //  ["es2015", { "modules": false }]
  ],
  plugins: [        // element官方教程
    [
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk'
      }
    ]
  ],
 
}
