const router = require('koa-router')()
const koa2Req = require('koa-request')
router.prefix('user')
router.post('/wxlogin',async(ctx, next) =>{
    // 接收appid appsecret code
    const {APPID,SECRET,JSCODE} = ctx.request.body
    // 组合url
    let url = 'https://api.weixin.qq.com/sns/jscode2session?appid='+APPID+'&secret='+SECRET+'&js_code='+JSCODE+'&grant_type=authorization_code'
    // 发送请求
    let res = await koa2Req(url)
    // 获取session_key和oppenid
    const {session_key, openid} = JSON.parse(res.body)
    console.log(session_key,openid,'session')
    // 生成 _3rd_session
    const _3rd_session = `${Date.now()} + ${Math.random()}`

    ctx.body = _3rd_session

})