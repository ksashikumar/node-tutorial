function bodyParser( req, res, next ) {
  let data = '';
  req.on('data', function( chunk ) {
    data += chunk;
  });
  req.on('end', function() {
    req.rawBody = data;
    console.log( 'on end: ', data )
    if (data && data.indexOf('{') > -1 ) {
      req.body = JSON.parse(data);
    }
    next();
  });
}

module.exports = bodyParser;
