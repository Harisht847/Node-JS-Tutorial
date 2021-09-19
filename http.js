const http = require('http')
const server = http.createServer((req,res) => {
if (req.url ===  '/') {
    res.end('Hello welcome ')

}
if (req.url === '/home') {
    res.end("Hello welcome home")
}
res.end(`
<h1> Oops </h1> <p>We cant seem to find the page you looking</p>
<a href='/'>back home </a>`)

})


server.listen(port = 5000)