let path, query, search;
export default function ({ route, redirect }) {
  path  = route.path;
  query = route.query;
  if ( path.indexOf('/en') === 0 ) {
    if ( path.indexOf('/en/news1.html') === 0 ) {
      redirect('/news/1?lang=en')
    } else if ( path.indexOf('/en/news2.html') === 0 ) {
      redirect('/news/2?lang=en')
    } else {
      redirect('/?lang=en')
    }
  } else if ( path.indexOf('/zh') === 0 ) {
    if ( path.indexOf('/zh/news1.html') === 0 ) {
      redirect('/news/1?lang=zh-tw')
    } else if ( path.indexOf('/zh/news2.html') === 0 ) {
      redirect('/news/2?lang=zh-tw')
    } else {
      redirect('/?lang=zh-tw')
    }
  } 
  else if ( path.indexOf('/news') === 0 ) {
    search = '';
    for ( let p in query ) {
      search += p + '=' + query[p]
    }
    if ( path.indexOf('/news/n1') === 0 ) {
      redirect( '/news/1' + (search?'?'+search:'') );
    } else if ( path.indexOf('/news/n2') === 0 ) {
      redirect( '/news/2' + (search?'?'+search:''));
    }
  }
}