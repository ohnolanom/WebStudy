const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    console.log('접속중');
    // console.log(req.headers);
    // console.log(req.method);
    // console.log(req.url);

    // res.end();
    
    const url = req.url;
    if(url === '/') {
        fs.createReadStream('./html/home.html').pipe(res);
    } else if(url === '/menu') {
        fs.createReadStream('./html/menu.html').pipe(res);
    } else {
        fs.createReadStream('./html/notfound.html').pipe(res);
    }


});
server.listen(8080);