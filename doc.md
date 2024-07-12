## Document
***
#### class copyweb
*constructor( url, setting )*
  url : string
  setting :
    dir : string
    dir of file
    callback : function( req, res )
Init a server
*listen( port, cb )*
  Same as http.createServer(...).listen method
*static info*
  Module information( author and version )