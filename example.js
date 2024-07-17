const cw = require( "./copyweb" )
const server = new cw( "https://example.com", {
    dir : "./example.com",
    protocol : "http",
    /*server : serversetting*/
    callback : function( req, res ){
        url = server.isRoot( req.url ) ?
            req.url + "index.html" :
            req.url
        console.log( url + " updating" )
    },
    onload : function( path, res ){
        console.log( path + "uploaded" )
    }
} )
server.listen( 7777, function(){
    console.log( "server open on 127.0.0.1:7777" )
})