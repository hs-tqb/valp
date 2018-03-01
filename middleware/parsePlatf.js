
export default function ({ req, store }) {
  if ( !req ) return;
  store.commit(
    'setPlatform',
    req.headers['user-agent'].match(/iPhone|iPad|Android|iPod|iOS/i)?
      'mobile':
      'pc'
  );
}