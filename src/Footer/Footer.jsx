import React from "react";
import "../Style/Footer.css";
import Logo from "../Images/Logo.png";
const Footer = ()=>{
    return(
        <React.Fragment>
            <footer className="Common">
                <div className="FooterOne">
                    <img src={Logo} alt="logo" />
                    <p>Copyright © 2022 DSA Visualizer,Inc</p>
                </div>
                <div className="FooterTwo">
                    
                </div>
                <div className="FooterThree"></div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;