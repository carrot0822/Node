/**
 * 
 * @param {function} handle  // 对应的接口返回函数
 * @param {string} pathName // 路由路径 
 * @param {object} res // 回复参数
 */
/* function route(handle, pathName, res,postData) {
    console.log('传入的参数', handle, pathName)
    if (typeof handle[pathName] === "function") {
        handle[pathName](res,postData)
    } else {
        console.log("这个请求来自" + pathName)
        res.writeHead(404, {
            "Content-Type": "text/plain"
        });
        res.write("404 Not found");
        res.end();
    }
} */

function route(handle, pathname, response, request) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
      handle[pathname](response, request);
    } else {
      console.log("No request handler found for " + pathname);
      response.writeHead(404, {"Content-Type": "text/html"});
      response.write("404 Not found");
      response.end();
    }
  }
  

exports.router = route