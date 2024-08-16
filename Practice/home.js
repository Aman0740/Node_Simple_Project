const { styleText } = require("util");

function Home(req, res) {
    res.write(`<div>
        <h1><a href="/" style="padding-right:5%; text-decoration:none; color:black;">Welcome to Node.js</a></h1>
        <div>
            <a href="/Home" style="padding-left:30%; padding-right:5%; text-decoration:none; color:black;">Home</a>
            <a href="/AboutUs" style="padding-right:5%; text-decoration:none; color:black;">About Us</a>
            <a href="/Product" style="padding-right:5%; text-decoration:none; color:black;">Product</a>
            <a href="/ContactUs" style="padding-right:5%; text-decoration:none; color:black;">Contact Us</a>
        </div>
    </div>`)



    res.write(`
        
            <div style="margin-top:5%;">
                <img src="https://demos.flatsome.com/wp-content/uploads/2016/07/slide2.jpg" style="width:100%; height:100% ;Position: relative;"></img>

                <div style="position:absolute; top:40%; padding-left:5%;">
                    <img src="https://demos.flatsome.com/wp-content/uploads/2016/07/logo.png" style="width:25%;"></img>
                    <div style="color:white;">
                        <h4 >Flatsome theme for WordPress</h4>
                        <h1>The #1 Best selling <br> WooCommerce & Business theme</h1>
                        <h3>A high-performant Multi-Purpose WooCommerce theme suitable for any kind of WordPress project.</h3>
                    </div>
                </div>
            </div>

        `);


    res.write(`
        
            <div style="text-align:center; width:70%; padding-left:16%; padding-top:20px; padding-bottom:40px;">
                <div>
                    <h1>Amazing Theme with perfect User Experience</h1>
                    <p style="font-size:22px;">Flatsome is the perfect theme for your shop or company website, or for all your client websites if you are an agency or freelancer. It got all the tools needs to create super fast responsive websites with amazing user experience. It got unlimited options and a revolutionary responsive page builder, so you can create anything without coding.</p>
                </div>
            </div>

            <div style="padding-bottom:5%;">
                <div style="background-color:#f5f5f5; padding-bottom:30px;">
                    <img src="https://demos.flatsome.com/wp-content/uploads/2017/06/themepreview-1-hmp.jpg" style="padding-left:10%;"></img>
                </div>
            </div>
        
        `);

    res.write(`
            <div style="display:flex; padding-top:50px;">
                <div style="padding-left:5%;">
                    <img src="https://demos.flatsome.com/wp-content/uploads/2017/06/feature-builder-1-hmp.jpg" style="width:80%;">
                    
                    <h2>Revolutionary <br> Drag & Drop Page Builder</h2>
                    <h5 style="width:70%;">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</h5>
                </div>
                
                <div>
                    <img src="https://demos.flatsome.com/wp-content/uploads/2017/06/feature-builder-1-hmp.jpg" style="width:80%;">
                    
                    <h2>Revolutionary <br> Drag & Drop Page Builder</h2>
                    <h5 style="width:70%;">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</h5>
                </div>
               
                <div>
                    <img src="https://demos.flatsome.com/wp-content/uploads/2017/06/feature-builder-1-hmp.jpg" style="width:80%;">
                    
                    <h2>Revolutionary <br> Drag & Drop Page Builder</h2>
                    <h5 style="width:70%;">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</h5>
                </div>
            </div>
        `);

    res.end();
}

module.exports = Home;


