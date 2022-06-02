const express =require('express')
const db =require('./db/connect.js')
const path =require('path')
const app =express()
const bodypaser =require('body-parser')
//设置跨域访问
app.all('*', function(req, response, next) {

    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Content-Type');
    response.header('Access-Control-Allow-Methods', '*');
    //设置仅接受 application/json 格式请求
    response.header('Content-Type', 'application/json;charset=utf-8');
    next();


    // //设置允许跨域的域名，*代表允许任意域名跨域
    // response.header("Access-Control-Allow-Origin", "*");
    // //允许的header类型
    // response.header("Access-Control-Allow-Headers", "X-Requested-With,authorization, content-type,token,identify");
    // //跨域允许的请求方式
    // response.header("Access-Control-Allow-Methods","GET, HEAD, POST, PUT, DELETE, OPTIONS, PATCH");
    // //设置响应头信息
    // response.header("X-Powered-By",' 3.2.1')
    // response.header("Content-Type", "application/json;charset=utf-8");
    //
    // response.header("Access-Control-Allow-Credentials","true");
    //
    // // 这行代码添加相应的的允许字段
    // response.header("Access-Control-Expose-Headers","X-forwared-port, X-forwarded-host");
    // response.header("Vary","Origin,Access-Control-Request-Method,Access-Control-Request-Headers");
    //
    //
    // next();
 });

var server =app.listen(60001)
var io =require('socket.io').listen(server)
require('./socket/socket.js')(io);

app.use(bodypaser.urlencoded({extended: false}))
app.use(bodypaser.json())
app.use('/public', express.static(path.join(__dirname,'./static')))
//引入路由
const friendRequestRouter =require('./router/friendRequestRouter')
const friendListRouter =require('./router/friendListRouter')
const userRouter =require('./router/userRouter')
const fileRouter =require('./router/fileRouter')
app.use('/user', userRouter)
app.use('/file', fileRouter)
app.use('/friend', friendRequestRouter)
app.use('/friendlist', friendListRouter)

app.listen(60000,()=>{
    console.log('server start')
})