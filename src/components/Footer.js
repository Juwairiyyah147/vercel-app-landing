import React from 'react';


const Footer = () => {
    return (
        <footer className="footer" id="about">
       
            <table className="contacts">
                <tr>
                    <td>
                        <img src="assets/Frame.png" alt="logo" />
                    </td> 
                    <td><h4>Links</h4></td> 
                    <td><h4>Legal</h4></td>
                    <td><h4>Product</h4></td> 
                    <td><h4>Newsletter</h4></td>
                </tr>
                <tr>
                    <td><div>
                        <span> <img src="assets/Mail.png " alt=" logo " /></span> 
                    <span>Help@Frybix.com</span>
                    </div></td>
                    <td><a href="#Home"  >Home</a> </td>
                    <td>Terms Of Use</td>
                    <td>Take Tour</td>
                    <td>Stay Up To Date</td>
                </tr>
                <tr>
                    <td><div>
                        <span> <img src="assets/Phone.png " alt= "logo"  /></span>
                        <span>+1234 456 678 89</span>
                    </div></td>
                    <td> <a href="#about"  >About Us</a>  </td>
                    <td>Privacy Policy</td>
                    <td>Live Chat</td>
                    
                </tr>
                <tr>
                    <td></td>
                    <td><a href="#booking"  >Bookings</a> </td>
                    <td>Cookie Policy</td>
                    <td>Reviews</td>
                 
                    
                </tr>
                <tr>
                    <td></td>
                    <td><a href="#blog"  >Blog</a> </td>
                 
                </tr>
            </table>

            <span>
            <div className="email">
                <input className="input" placeholder="Your email" />
                </div>
            </span>
            <span>
            <div className="email">
                    <button className=" nav-btn">Subscribe</button> </div>
            </span>
           
        </footer>
    );
};

export default Footer;
