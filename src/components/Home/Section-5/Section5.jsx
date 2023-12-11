import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Section5.css'

const Section5 = () => {
  return (
    <div className="Section-5">
      <Row>
        <Col>
          <Container>
			<p>Promotion</p>
			<h1>Explore Nature</h1>
			<button>View Packages</button>
		  </Container>
        </Col>
        <Col>
          <Container>
			<p>Promotion</p>
			<h1>Explore Cities</h1>
			<button>View Packages</button>
		  </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Section5;
