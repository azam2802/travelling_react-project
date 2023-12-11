import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import About1_img from "../../img/About-1_img.png";
import About2_img from "../../img/about-2_img.png";
import About2_img2 from "../../img/about-2_img2.png";
import About2_img3 from "../../img/about-2_img3.png";
import About2_img4 from "../../img/about-2_img4.png";
import "./About.css";

const About = () => {
  return (
    <div className="About">
      <div className="Header__about">
        <Container>
          <header>
            <Row>
              <Col>
                <h1>Travel</h1>
              </Col>
              <Col>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link>Services</Link>
              </Col>
              <Col>
                <button>Get in Touch</button>
              </Col>
            </Row>
          </header>
          <div className="title">
            <p>READ</p>
            <h1 id="About__title">About Us</h1>
          </div>
        </Container>
      </div>
      <div className="About-1">
        <Container>
          <Row>
            <Col>
              <h6>PROMOTION</h6>
              <h1>We Provide You Best Europe Sightseeing Tours</h1>
              <p>
                Et labore harum non nobis ipsum eum molestias mollitia et
                corporis praesentium a laudantium internos. Non quis eius quo
                eligendi corrupti et fugiat nulla qui soluta recusandae in
                maxime quasi aut ducimus illum aut optio quibusdam!
              </p>
              <button>View Packages</button>
            </Col>
            <Col>
              <img src={About1_img} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="About-2">
        <Container>
          <Row>
            <Col>
              <img src={About2_img} />
            </Col>
            <Col>
              <h6>TREND</h6>
              <h1>Our Popular Tour Plans</h1>
              <p>
                Et labore harum non nobis ipsum eum molestias mollitia et
                corporis praesentium a laudantium. Et labore harum non nobis
                ipsum eum molestias mollitia et corporis praesentium a
                laudantium.
              </p>
              <div className="graphs">
                <img src={About2_img2} />
                <img src={About2_img3} />
                <img src={About2_img4} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="About-3">
        <h1>Wanderlust</h1>
      </div>
    </div>
  );
};

export default About;
