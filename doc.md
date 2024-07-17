## Document
***
#### class copyweb
*constructor( url, setting )*
  <ul>
  url : string<br>
  setting :<br>
    <ul>dir : string<br>
    callback : function( req, res )<br>
    server : http/https option<br>
    onload : on file caching is complete<br>
    protocol : server protocol</ul>
  </ul>
Init a server<br>
*listen( port, cb )*<br>
--Same as http.createServer(...).listen method<br>
*isRoot( path )*<br>
--path is RootDir?
*static info*<br>
--Module information( author and version )