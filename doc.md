## Document
***
#### class copyweb
*constructor( url, setting )*
  url : string<br>
  setting :<br>
    dir : string<br>
    callback : function( req, res )<br>
    server : http/https option
    protocol : server protocol
Init a server<br>
*listen( port, cb )*<br>
  Same as http.createServer(...).listen method<br>
*static info*<br>
  Module information( author and version )