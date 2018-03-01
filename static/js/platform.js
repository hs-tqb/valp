(function(userAgent) {
  if( navigator.userAgent.match(/iPhone|iPad|Android|iPod|iOS/i) ) {
      window._platform = document.documentElement.className = 'mobile';
    } else {
      window._platform = document.documentElement.className = 'pc';
    }
}(navigator.userAgent));