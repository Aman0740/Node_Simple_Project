function Contact(req, res) {
    res.write(`<div>
        <h1><a href="/" style="padding-right:5%; text-decoration:none; color:black;">Welcome to Node.js</a></h1>
        <div>
            <a href="/Home" style="padding-left:30%; padding-right:5%; text-decoration:none; color:black;">Home</a>
            <a href="/AboutUs" style="padding-right:5%; text-decoration:none; color:black;">About Us</a>
            <a href="/Product" style="padding-right:5%; text-decoration:none; color:black;">Product</a>
            <a href="/ContactUs" style="padding-right:5%; text-decoration:none; color:black;">Contact Us</a>
        </div>
    </div>`)

    res.write('<h1 style="text-align:center;">Sign Up</h1>');
    res.write(`
                <div style="border:2px solid black; width:25%; padding:20px; margin-left:33%; background-color:#FEFCF3;">
                    <label for="fname">First name:</label>
                    <input type="text" id="fname" style="border:2px solid black;"><br><br>
                    <label for="email">Email:</label>
                    <input type="email" id="email" style="border:2px solid black;"><br><br>
                    <label for="password">Password:</label>
                    <input type="password" id="password" style="border:2px solid black;"><br><br>
                    <label for="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" style="border:2px solid black;"><br><br>
                    <input type="checkbox" id="terms">  I accept the <a href="" style="text-decoration:none; color:blue;">Terms of Use</a> & <a href="" style="text-decoration:none; color:blue;">Privacy Policy</a><br><br>
                    <button type="submit" value="Submit" onMouseOver="this.style.backgroundColor='green'"
       onMouseOut="this.style.backgroundColor='white'" onclick="validateForm(event)">Submit</button>
                </div>
                <script>
                    function validateForm(event) {
                            var fname = document.getElementById('fname').value;
                            var email = document.getElementById('email').value;
                            var password = document.getElementById('password').value;
                            var confirmPassword = document.getElementById('confirmPassword').value;
                            var terms = document.getElementById('terms').checked;

                            if (fname === '' || email === '' || password === '' || confirmPassword === '' || !terms) {
                                alert('Please fill out all fields and accept the terms.');
                            } else if (password !== confirmPassword) {
                                alert('Passwords do not match.');
                            } else {
                                alert('Form submitted successfully!');
                                
                                // Clear the input fields
                                document.getElementById('fname').value = '';
                                document.getElementById('email').value = '';
                                document.getElementById('password').value = '';
                                document.getElementById('confirmPassword').value = '';
                                document.getElementById('terms').checked = false;
                            }
                        }
                </script>
            `);
    res.end();
}

module.exports = Contact;
