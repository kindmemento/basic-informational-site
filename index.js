const http = require('http')
const url = require('url')
const fs = require('fs')
const port = 8080

http.createServer((req, res) => {
	const q = url.parse(req.url, true)
	const filename = '.' + q.pathname
	console.log(filename)

	if (filename === './') {
		const home = fs.readFileSync('index.html')
		res.writeHead(200, { 'Content-Type': 'text/html' })
		res.write(home)
		return res.end()
	} else {
		fs.readFile(filename + '.html', (err, data) => {
			if (err) {
				const notFound = fs.readFileSync('404.html')
				res.writeHead(404, { 'Content-Type': 'text/html' })
				res.write(notFound)
				return res.end()
			}
			res.writeHead(200, { 'Content-Type': 'text/html' })
			res.write(data)
			return res.end()
		})
	}
}).listen(port)
