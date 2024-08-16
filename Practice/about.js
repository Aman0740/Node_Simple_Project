
function about(req, res) {

   
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
        <div style="padding-top:50px;">
            <img src="https://t3.ftcdn.net/jpg/04/53/61/00/240_F_453610098_zdOp8kYCIUVamtdMpN8Uh6extkLzVvLJ.jpg" style="width:100%; Position: relative;">
            <div style="position: absolute;top:50%; color:white; padding-left:15%;">
                <h1 style="font-size:55px;">About Us</h1>
                <p style="font-size:20px; width:40%;">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</p>
            </div>
            
        </div>
        `);

    res.write(`
            <div style="display:flex; padding-top:50px;">
                <div style="padding-left:10%;">
                    <img src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" style="width:80%;">

                    <img src="https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png" style="width:20%;">
                    
                    <h3>JHON WICK</h3>
                    <h5 style="width:70%;">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</h5>
                </div>
                
                <div>
                    <img src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" style="width:80%;">

                    <img src="https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png" style="width:20%;">

                    <h3>JHON WICK</h3>
                    <h5 style="width:70%;">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</h5>
                </div>
               
                <div>
                    <img src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" style="width:80%;">

                    <img src="https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png" style="width:20%;">
                    
                    <h3>JHON WICK</h3>
                    <h5 style="width:70%;">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</h5>
                </div>
            </div>
            `);

    res.write(`
        
        

        `)

    res.end();
}

module.exports = about;


