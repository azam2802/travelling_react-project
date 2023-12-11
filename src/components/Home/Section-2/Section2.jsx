import React from "react";
import "./Section2.css";
import { Col, Row, Container } from "react-bootstrap";
import Tour1 from "../../../img/tour-guide 1.png";
import Tour2 from "../../../img/tour-guide 2.png";
import Tour3 from "../../../img/tour-guide 3.png";
import Tour4 from "../../../img/tour-guide 4.png";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <div className="Section2">
      <Container>
        <div className="text">
          <h6>CATEGORY</h6>
          <h1>We Offer Best Services</h1>
        </div>
        <Row>
          <Col
            as={motion.div}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <img src={Tour1} alt="" />
            <h6>Guided Tours</h6>
            <p>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
          </Col>
          <Col
            as={motion.div}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src={Tour2} alt="" />
            <h6>Best Flights Options</h6>
            <p>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
          </Col>
          <Col
            as={motion.div}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src={Tour3} alt="" />
            <h6>Religious Tours</h6>
            <p>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
          </Col>
          <Col
            as={motion.div}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <img src={Tour4} alt="" />
            <h6>Medical insurance</h6>
            <p>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section2;
