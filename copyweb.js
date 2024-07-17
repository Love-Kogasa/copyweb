/* namespace copyweb */
const copyweb =
( function(){
  const fs = require( "fs" ),
    { parse } = require( "url" ),
    mime = require( "mimetype" )
  function createDirAndAppend( file ){
    const dir = file.substring( 0, file.lastIndexOf( '/' ) )
    if ( !fs.existsSync( dir ) ) {
      fs.mkdirSync(dir, { recursive: true });}
    fs.appendFileSync(file, '');}
  class basic {
    constructor( url = "http://example.com", setting = {} ){
      this.url = parse( url )
      var set, pro
      // 这也别碰 (/∇＼*)
      this.pro = pro = require( this.url.protocol.slice( 0, -1 ) )
      /*pro > protocol : http || https */
      this.setting = set = {
        dir : setting.dir || "./server",
        callback : setting.callback ||
          function(){},
        protocol : typeof setting.protocol == "string" ?
          require( setting.protocol ) : pro,
        onload : setting.onload ||
          function(){},
        server : setting.server || {}}
      var isRoot = this.isRoot
      // 别碰这 要不作用域会出问题
      var listen= set.protocol.createServer( set.server,
        function( req, res ){
          var { pathname, path } = parse( req.url )
          pathname = isRoot( pathname ) ? pathname + "index.html"
            : pathname
          createDirAndAppend( set.dir + pathname )
          res.setHeader( "Content-Type", mime.lookup(
            set.dir + pathname, false
          ))
          pro.get( url + path, function( resource ){
            if( resource.statusCode < 400 ){
              const write = fs.
                createWriteStream( set.dir + pathname )
              /* 这样是为了下载二进制文件 */
              resource.pipe( write )
              // 合并到写入流
              set.onload( path, resource )
            }
          } )
          var body = fs.readFileSync( set.dir + pathname )
          if( body.toString( "utf-8" ) == "" ){
            body = "Please wait a moment and reload"
          }
          res.write( body )
          set.callback( req, res )
          res.end()
        }
      )
      this.lis = listen
    }
    listen( port, cb ){
      return this.lis.listen( port, cb )
    }
    isRoot( pname ){
      if( pname.slice( -1 ) == "/" || pname == "" ) return true
      return false
    }
    static info(){
      return {
        author : [ "Love-Kogasa" ],
        version : 1.02
      }
    }
  }
  return basic
} )()
module.exports = copyweb