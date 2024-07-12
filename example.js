const cw = require( "./copyweb" )
const server = new cw( "http://example.com", {
    dir : "./example.com",
    callback : function( req, res ){
        console.log( req.url + "被访问了" )
    }
} )
server.listen( 7777, function(){
    console.log( "server open on 127.0.0.1:7777" )
})