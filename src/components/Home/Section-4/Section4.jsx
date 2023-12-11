import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Section4img from "../../../img/Section4-img.svg";
import "./Section4.css";
import Img1 from "../../../img/destination.svg";
import Img2 from "../../../img/availability.svg";
import Img3 from "../../../img/lets-go.svg";
import { easeInOut, motion } from "framer-motion";

const Section4 = () => {
  return (
    <div className="Section-4">
      <Container>
        <Row>
          <Col md="6">
            <motion.h6
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Fast & Easy
            </motion.h6>
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Get Your Favourite Resort Bookings
            </motion.h1>
            <Row>
              <Col sm="2">
                <motion.img
                  src={Img1}
                  alt=""
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                />
              </Col>
              <Col
                as={motion.div}
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <h5>Choose Destination</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsam, nobis maxime.
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm="2">
                <motion.img
                  src={Img2}
                  alt=""
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </Col>
              <Col
                as={motion.div}
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <h5>Check Availability</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsam, nobis maxime.
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm="2">
                <motion.img
                  src={Img3}
                  alt=""
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  viewport={{ once: true }}
                />
              </Col>
              <Col
                as={motion.div}
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <h5>Let's Go</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsam, nobis maxime.
                </p>
              </Col>
            </Row>
          </Col>
          <Col md="6">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              id="Section4-img"
              src={Section4img}
            />
          </Col>
        </Row>
      </Container>
      <div className="holidays">
        <motion.h1
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0, ease: easeInOut }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          Let's Make Your Next Holiday Amazing
        </motion.h1>
      </div>
    </div>
  );
};

export default Section4;
