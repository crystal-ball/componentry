function importAll(r) {
  r.keys().forEach(key => {
    r(key)
  })
}

// Use webpack require.context to find and require all icons in project icon folder
importAll(require.context('../media/icons', true, /\.svg$/))
