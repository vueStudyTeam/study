module.exports = {
    pwa: {
      name: 'vuestagram',
      themeColor: '#4DBA87',
      msTileColor: '#000000',
      workboxOptions: {
          //캐싱 목록 제외 파일명
        exclude: [/\.map$/, /manifest\.json$/, 'index.html']
      }
    }
  }