import React from "react";
import { Link } from "react-router-dom"; // Import Link component
import "./css_file/Cards.css"; // Import CSS file

function Card({ photoSrc, title, to }) { // Add 'to' prop for the link destination
  return (
    <div className="car">
      <Link to={to}>
        <div className="card">
          <div className="img2">
            <img className="img1" src={photoSrc} alt={title} />
          </div>
          <div className="title">{title}</div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
