var exec = require("child_process").exec;
var fs = require("fs");
var formidable = require("formidable")
/* function start(response) {
    console.log("请求句柄start被呼叫")
    var content = "empty"

    exec("find/",{ timeout: 10000, maxBuffer: 20000*1024 },function (error, stdout, stderr) {
        response.writeHead(200, {
            "Content-Type": "text/plain"
        });
        response.write(stdout);
        response.end();
    })
    return content
} */

function start(response) {
    console.log("Request handler 'start' was called.");

    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" ' +
        'content="text/html; charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" enctype="multipart/form-data" ' +
        'method="post">' +
        '<input type="file" name="upload">' +
        '<input type="submit" value="Upload file" />' +
        '</form>' +
        '</body>' +
        '</html>';

    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write(body);
    response.end();
}
/**
 * 
 * @param {*} response 
 * @param {*} postData 
 */

/* function upload(response, postData) {
    var content = '返回了上传'
    // post的原始数据 parse之后的数据
    var form = new formidable.IncomingForm();
    console.log()
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.write("Hello Upload" + postData + '处理后' + querystring.parse(postData).text);
    response.end();
    console.log('请求句柄upload被呼叫')

} */

function upload(response, request) {
    console.log("Request handler 'upload' was called.");
  
    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(request, function(error, fields, files) {
      console.log("parsing done");
      fs.renameSync(files.upload.path, "/tmp/test.png");
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write("received image:<br/>");
      response.write("<img src='/show' />");
      response.end();
    });
  }

function show(request,response) {
    console.log("Request handler 'show' was called.");
    fs.readFile("/tmp/test.png", "binary", function(error, file) {
      if(error) {
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(error + "\n");
        response.end();
      } else {
        response.writeHead(200, {"Content-Type": "image/png"});
        response.write(file, "binary");
        response.end();
      }
    });
  }

exports.start = start
exports.upload = upload
exports.show = show