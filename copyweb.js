/* namespace copyweb */
const copyweb =
( function(){
  const fs = require( "fs" ),
    { parse } = require( "url" ),
    mime = require( "mimetype" )
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
          function(){} }
      var __isRoot = this.__isRoot
      // 别碰这 要不作用域会出问题
      var listen= this.pro.createServer(
        function( req, res ){
          var { pathname, path } = parse( req.url )
          pathname = __isRoot( pathname ) ? pathname + "index.html"
            : pathname
          set.callback( req, res )
          fs.appendFileSync( set.dir + pathname, "" )
          res.setHeader( "Content-Type", mime.lookup(
            set.dir + pathname, false
          ))
          pro.get( url + path, function( resource ){
            if( resource.statusCode < 400 ){
              // 写入流不创建文件啊啊啊啊啊啊啊啊啊啊啊 qwq
              const write = fs.
                createWriteStream( set.dir + pathname )
              /* 这样是为了下载二进制文件 */
              resource.pipe( write )
              // 合并到写入流
            }
          } )
          var body = fs.readFileSync( set.dir + pathname )
          if( body.toString( "utf-8" ) == "" ){
            body = "Please wait a moment and reload"
          }
          res.write( body )
          res.end()
        }
      )
      this.lis = listen
    }
    listen( port, cb ){
      return this.lis.listen( port, cb )
    }
    __isRoot( pname ){
      if( pname.slice( -1 ) == "/" || pname == "" ) return true
      return false
    }
    static info(){
      return {
        author : [ "Love-Kogasa" ],
        version : 1.0
      }
    }
  }
  return basic
} )()
module.exports = copyweb