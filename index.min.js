if (window && window.location && window.location.href) {
  let shimScript = window.location.href.replace('.html', '').concat('.js')
  import(shimScript)
}
