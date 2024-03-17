import React from "react";
import { Outlet } from "react-router-dom";
import Card from "./Card";
import "./css_file/Layout.css";
import carPainterImage from "./image/Carpainter.jpg";
import painterImage from "./image/Painter.webp";
import plumberImage from "./image/plumber.jpg";
import labourImage from "./image/labour.jpg";
import heavyLifterImage from "./image/heavylifter.jpg";
import electricianImage from "./image/electrician.jpg";
import electrician2Image from "./image/electrician2.jpg";
import side1Image from "./image/side1.jpg";
import side2Image from "./image/side4.jpg";
import side3Image from "./image/side3.jpg";
import Navbar from './Navbar'

function Layout() {
  return (
    <><Navbar/>
    <div className="part">

      <div className="left">
        <div className="text">
          <h1>Our Services</h1>
        </div>
        <div className="out">
          <h2>What's Your Need?</h2>
          <div className="header1">
            <Card photoSrc={painterImage} title="Painter"  to="/Profile"/>
            <Card photoSrc={carPainterImage} title="Carpainter" to="/Profile"/>
            <Card photoSrc={plumberImage} title="Plumber" to="/Profile"/>
            <Card photoSrc={labourImage} title="Labour" to="/Profile"/>
            <Card photoSrc={heavyLifterImage} title="Heavy Lifter" to="/Profile"/>
            <Card photoSrc={electricianImage} title="Electrician"to="/Profile"/>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="header">
          <img className="f1" src={side3Image} alt="side3" />
          <img className="f2" src={side1Image} alt="side1" />
          <img className="f3" src={side2Image} alt="side2" />
          <img className="f4" src={electrician2Image} alt="electrician2" />
        </div>
      </div>
    </div>
    <Outlet/>
    </>
  );
}

export default Layout;
