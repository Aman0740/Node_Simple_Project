function DiscriptionPage(req, res) {
    const query = url.parse(req.url, true).query;
    const productId = query.product;

    let productDetails;
    switch (productId) {
        case '1':
            productDetails = `
                <h1>Smart Watch</h1>
                <p>Price: $99.99</p>
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" style="width:50%;">
                <p>A smartwatch is a portable device worn on the wrist that supports apps and acts as an extension of your mobile phone in some cases.</p>
            `;
            break;
        default:
            productDetails = '<h1>Product not found</h1>';
    }

    res.write(`
        <div>
            <h1><a href="/" style="padding-right:5%; text-decoration:none; color:black;">Welcome to Node.js</a></h1>
            <div>
                <a href="/Home" style="padding-left:30%; padding-right:5%; text-decoration:none; color:black;">Home</a>
                <a href="/AboutUs" style="padding-right:5%; text-decoration:none; color:black;">About Us</a>
                <a href="/Product" style="padding-right:5%; text-decoration:none; color:black;">Product</a>
                <a href="/ContactUs" style="padding-right:5%; text-decoration:none; color:black;">Contact Us</a>
            </div>
        </div>
        <h1>Product Description</h1>
        ${productDetails}
    `);
    res.end();
}

module.exports = DiscriptionPage;
