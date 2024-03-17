import React from 'react';
import "./css_file/Labcos.css"
const ButtonPage = () => {
    const openPage1 = () => {
        window.location.href = "/";
    };

    const openPage2 = () => {
        window.location.href = "/labourform";
    };

    return (
        <div className="outer">
            <div className="butt-con">
                <div className="message"><h1>Who are you?</h1></div>
                <div className="butt-row">
                    <button id="butt1" className="butt" onClick={openPage1}>Employer</button>
                    <div style={{ width: '20px' }}></div>
                    <button id="butt2" className="butt" onClick={openPage2}>Labour</button>
                </div>
            </div></div>
    );
};

export default ButtonPage;
