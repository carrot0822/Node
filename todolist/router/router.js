  
const { register, formatUrl } = require("../utils/index.js");

class Router {
  constructor() {
    this.routes = {
      get: {},
      post: {},
      delete: {},
      put: {}
    };
  }
  get() {
    register.call(this, "get", ...arguments);
  }
  post() {
    register.call(this, "post", ...arguments);
  }
  delete() {
    register.call(this, "delete", ...arguments);
  }
  put() {
    register.call(this, "put", ...arguments);
  }
  init(req, res) {
    const { method, url } = req;
    const result = formatUrl(method.toLowerCase(), url);
    console.log(this.routes,'路由对象')
    console.log(method,url,'字符串分割',this.routes[method.toLowerCase()])
    const handle = this.routes[method.toLowerCase()][result.url];
    if (handle) {
      handle(req, res, result.query);
    } else {
      res.writeHead(404);
      res.end("404 Not Found");
    }
  }
}
module.exports = Router;