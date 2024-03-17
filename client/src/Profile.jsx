import React from "react";
import './css_file/Contactus.css';
import prem from "./image/prem.webp";
import mohan from "./image/mohan.webp";
function Profile() {
  return (
    <>
    <div className="container01">
                <div className="card01">
                    <div className="div1">
                        <img src={mohan} height="100%" width="100%" alt="" />
                    </div>
                    <h3>Mohan kumar</h3>
                    <p>Phone: 123456789</p>
                    <p>Email: Mohan@Gmail.com</p>
                    <p>Rating: 4 Star</p>
                </div>
                <div className="card01">
                    <div className="div1">
                        <img src={prem} height="100%" width="100%" alt="" />
                    </div>
                    <h3>Prem singh</h3>
                    <p>Phone: 987654321</p>
                    <p>Email: prem@Gamil.com</p>
                    <p>Rating: 5 Star</p>
                </div>
                </div>
    </>
  );
}

export default Profile;
