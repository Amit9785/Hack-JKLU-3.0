import React from 'react';
import './css_file/Contactus.css'; // Import your CSS file
import Keshav from "./image/keshav.jpg";
import Saraswat from "./image/saraswat.jpg";
import Talmale from "./image/amit.jpg";
import Ashmit from "./image/ashmit.jpg";
import Aaditya from "./image/aditya.jpg";
import Navbar from './Navbar';
function ContactUs() {
    return (
        <div>
            <Navbar/>
            <div className="container01">
                <div className="card01">
                    <div className="div1">
                        <img src={Keshav} height="100%" width="100%" alt="" />
                    </div>
                    <h3>Keshav Pareek</h3>
                    <p>Phone: 123456789</p>
                    <p>Email: keshav@Gmail.com</p>
                </div>
                <div className="card01">
                    <div className="div1">
                        <img src={Saraswat} height="100%" width="100%" alt="" />
                    </div>
                    <h3>Amit Saraswat</h3>
                    <p>Phone: 987654321</p>
                    <p>Email: amit@Gamil.com</p>
                </div>
                <div className="card01">
                    <div className="div1">
                        <img src={Talmale} height="100%" width="100%" alt="" />
                    </div>
                    <h3>Amit Talmale</h3>
                    <p>Phone: 111222333</p>
                    <p>Email: amit@Gmail.com</p>
                </div>
                <div className="card01">
                    <div className="div1">
                        <img src={Ashmit} height="100%" width="100%" alt="" />
                    </div>
                    <h3>Ashmit Sharma</h3>
                    <p>Phone: 444555666</p>
                    <p>Email: ashmit@gmail.com</p>
                </div>
                <div className="card01">
                    <div className="div1">
                        <img src={Aaditya} height="100%" width="100%" alt="" />
                    </div>
                    <h3>Aaditya Saxena</h3>
                    <p>Phone: 777888999</p>
                    <p>Email: aaditya@Gamil.com</p>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;