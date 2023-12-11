import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LinkedIn from "../../img/linkedin.svg";
import Messanger from "../../img/messenger.svg";
import Twitter from "../../img/twitter.svg";
import Twoo from "../../img/twoo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <Container>
        <Row>
          <Col>
            <h1>Travel</h1>
            <p>Travel helps companies manage payments easily.</p>
            <div className="social">
              <img src={LinkedIn} alt="" />
              <img src={Messanger} alt="" />
              <img src={Twitter} alt="" />
              <img src={Twoo} alt="" />
            </div>
          </Col>
          <Col>
            <h3>Company</h3>
            <ul>
              <li><a href='#'>About Us</a> </li>
              <li><a href='#'>Careers</a></li>
              <li><a href='#'>Blog</a></li>
              <li><a href='#'>Pricing</a> </li>
            </ul>
          </Col>
          <Col>
            <h3>Destinations</h3>
            <ul>
              <li><a href='#'>Maldives</a> </li>
              <li><a href='#'>Los Angeles</a> </li>
              <li><a href='#'>Las Vegas</a></li>
              <li><a href='#'>Toronto</a> </li>
            </ul>
          </Col>
          <Col>
		  	<h3>Join Our Newsletter</h3>
			<input type="text" placeholder="Your email address"/>
			<button>Subscribe</button>
			<p>*  Will send you weekly updates for your better tour packages.</p>
		  </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
