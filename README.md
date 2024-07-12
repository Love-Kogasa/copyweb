## CopyWeb
Use this module, u can<br>
  1 copy a web to ur server<br>
  2 create simple mirrors<br>
  3 quickly download file<br>
  4 IDK
***
> then! Let's go <br>
copyweb is very easy

a little example ( another example in example.js ) :
```javascript
const web = require( "copyweb" )
new web( "http://example.com" )
  .listen( 8080, function(){
    console.log( "127.0.0.1:8080" )
  })
```
If u want to learn more<br>
Please see *another example* or *doc.md*

## Chinese version
使用本模块，你可以<br>
  1 复制一个网页<br>
  2 制作一个简单的镜像<br>
  3 ~~批量偷文件~~<br>
  4 ( 雾
***
> ~~go go go~~<br>
Webcopy模块非常简单

一个简单的例子
```javascript
const web = require( "copyweb" )
new web( "http://example.com" )
  .listen( 8080/*端口*/, function(){
    //当开启时执行的回调
    console.log( "127.0.0.1:8080" )
  })
```
如果你想详细了解
请见 *example.js* 或者 *doc.md*

| Author |
| --- |
| LoveKogasa |