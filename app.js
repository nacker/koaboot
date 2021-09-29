// 引入 koa 模块
const Koa = require('koa')
// 创建 koa 应用
const app = new Koa()

// 处理请求
app.use( async ctx => {
  ctx.body = "Hello World"
})

// 启动应用
app.listen(3000)
console.log("starting at port 3000")
