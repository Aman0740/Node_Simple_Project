

function Product(req, res) {
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

        <style>
            .card img {
                transition: transform 0.3s ease;
            }
            .card img:hover {
                transform: scale(1.1);
            }
        </style>

        <h1 style="text-align:center;">Product</h1>

        <!--FIRST ROW-->
        <div style="display:flex; width:50%; margin-left:25%; padding-top:20px;">
            <!--image_1-->
            <div class="card" style="padding-right:15px;">
                <a href="/DescriptionPage?product=1">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" style="width:100%">
                </a>
                <div class="">
                    <h3>Smart Watch</h3>
                    <h4>$ 99.99</h4>
                    <p>A smartwatch is a portable device worn on the wrist that supports apps and acts as an extension of your mobile phone in some cases.</p>
                </div>
            </div>

            <!--image_2-->
            <div class="card" style="padding-right:15px;">
                <a href="/Description?product=2">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" style="width:100%">
                </a>
                <div class="">
                    <h3>Smart Watch</h3>
                    <h4>$ 99.99</h4>
                    <p>A smartwatch is a portable device worn on the wrist that supports apps and acts as an extension of your mobile phone in some cases.</p>
                </div>
            </div>

            <!--image_3-->
            <div class="card" style="padding-right:15px;">
                <a href="/Description?product=3">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" style="width:100%">
                </a>
                <div class="">
                    <h3>Smart Watch</h3>
                    <h4>$ 99.99</h4>
                    <p>A smartwatch is a portable device worn on the wrist that supports apps and acts as an extension of your mobile phone in some cases.</p>
                </div>
            </div>
        </div>

        <!--SECOND ROW-->
        <div style="display:flex; width:50%; margin-left:25%; padding-top:20px;">
            <!--image_1-->
            <div class="card" style="padding-right:15px;">
                <a href="/Description?product=1">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" style="width:100%">
                </a>
                <div class="">
                    <h3>Smart Watch</h3>
                    <h4>$ 99.99</h4>
                    <p>A smartwatch is a portable device worn on the wrist that supports apps and acts as an extension of your mobile phone in some cases.</p>
                </div>
            </div>

            <!--image_2-->
            <div class="card" style="padding-right:15px;">
                <a href="/Description?product=2">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" style="width:100%">
                </a>
                <div class="">
                    <h3>Smart Watch</h3>
                    <h4>$ 99.99</h4>
                    <p>A smartwatch is a portable device worn on the wrist that supports apps and acts as an extension of your mobile phone in some cases.</p>
                </div>
            </div>

            <!--image_3-->
            <div class="card" style="padding-right:15px;">
                <a href="/Description?product=3">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" style="width:100%">
                </a>
                <div class="">
                    <h3>Smart Watch</h3>
                    <h4>$ 99.99</h4>
                    <p>A smartwatch is a portable device worn on the wrist that supports apps and acts as an extension of your mobile phone in some cases.</p>
                </div>
            </div>
        </div>

        <!--THIRD ROW-->
        <div style="display:flex; width:50%; margin-left:25%; padding-top:20px;">
            <!--image_1-->
            <div class="card" style="padding-right:15px;">
                <a href="/Description?product=1">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" style="width:100%">
                </a>
                <div class="">
                    <h3>Smart Watch</h3>
                    <h4>$ 99.99</h4>
                    <p>A smartwatch is a portable device worn on the wrist that supports apps and acts as an extension of your mobile phone in some cases.</p>
                </div>
            </div>

            <!--image_2-->
            <div class="card" style="padding-right:15px;">
                <a href="/Description?product=2">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" style="width:100%">
                </a>
                <div class="">
                    <h3>Smart Watch</h3>
                    <h4>$ 99.99</h4>
                    <p>A smartwatch is a portable device worn on the wrist that supports apps and acts as an extension of your mobile phone in some cases.</p>
                </div>
            </div>

            <!--image_3-->
            <div class="card" style="padding-right:15px;">
                <a href="/Description?product=3">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" style="width:100%">
                </a>
                <div class="">
                    <h3>Smart Watch</h3>
                    <h4>$ 99.99</h4>
                    <p>A smartwatch is a portable device worn on the wrist that supports apps and acts as an extension of your mobile phone in some cases.</p>
                </div>
            </div>
        </div>
    `);
    res.end();
}

module.exports = Product;