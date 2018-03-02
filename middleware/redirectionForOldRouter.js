let path;
export default function ({ route, redirect }) {
  path = route.path;
  if ( path.indexOf('/en') === 0 ) {
    if ( path.indexOf('/en/news1.html') === 0 ) {
      redirect('/news/n1?lang=en')
    } else if ( path.indexOf('/en/news2.html') === 0 ) {
      redirect('/news/n2?lang=en')
    } else {
      redirect('/?lang=en')
    }
  } else if ( path.indexOf('/zh') === 0 ) {
    if ( path.indexOf('/zh/news1.html') === 0 ) {
      redirect('/news/n1?lang=zh-tw')
    } else if ( path.indexOf('/zh/news2.html') === 0 ) {
      redirect('/news/n2?lang=zh-tw')
    } else {
      redirect('/?lang=zh-tw')
    }
  }
}