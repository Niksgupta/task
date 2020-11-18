import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from "@material-ui/icons";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
          <div> 
              <h3>SuperNerb</h3>
              <Facebook />
              <Instagram/>
              <Twitter/>
              <LinkedIn/>
              <YouTube/>

          </div>
          <hr />
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Our Company</h4>
            <ui className="list-unstyled">
              <li>About us</li>
              <li>Careers</li>
              <li>Investers</li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Legal</h4>
            <ui className="list-unstyled">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>License Agreement</li>
            </ui>
          </div>
         
        </div>
        <hr />
      
      </div>
    </div>
  );
}

export default Footer;