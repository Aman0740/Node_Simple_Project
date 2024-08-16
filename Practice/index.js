const http = require('http');
const url = require('url');
const Home = require('./home');
const about = require('./about');
const Product = require('./product');
const Contact = require('./contact');
const Discription = require('./DiscriptionPage');


function handleRequest(req, res) {
  const pathname = url.parse(req.url).pathname;

  if (pathname === '/') {
    res.write(`<div>
      <h1><a href="/" style="padding-right:5%; text-decoration:none; color:black;">Welcome to Node.js</a></h1>
      <div>
          <a href="/Home" style="padding-left:30%; padding-right:5%; text-decoration:none; color:black;">Home</a>
          <a href="/AboutUs" style="padding-right:5%; text-decoration:none; color:black;">About Us</a>
          <a href="/Product" style="padding-right:5%; text-decoration:none; color:black;">Product</a>
          <a href="/ContactUs" style="padding-right:5%; text-decoration:none; color:black;">Contact Us</a>
      </div>
  </div>`)
    res.write('<br>');
    res.write('<h1>Main Page</h1>');
    res.write('<p>This is the Main page.</p>');
    res.write('<img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" style="width:50%; padding-left:20%;"></img>');
    res.end();
  } else if (pathname === '/Home') {
    Home(req, res);
  } else if (pathname === '/AboutUs') {
    about(req, res);
  } else if (pathname === '/Product') {
    Product(req, res);
  } else if (pathname === '/ContactUs') {
    Contact(req, res);
  } else if (pathname === '/Description') {
    Discription(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Page not found');
    res.end();
  }
}

http.createServer(handleRequest).listen(5400, () => {
  console.log('Server is listening on port 5400');
});
