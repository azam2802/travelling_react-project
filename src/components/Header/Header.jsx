import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import { Button } from 'antd'
import { Carousel } from 'antd';

const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
};

const Header = () => {
  return (
    <>
    <div className="Header">
      <div className="container">
        <header>
          <Row>
            <Col>
              <Link to='/'><h1>Travel</h1></Link>
            </Col>
            <Col>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link>Services</Link>
            </Col>
            <Col>
              <Button type='primary' danger>Get in Touch</Button>
            </Col>
          </Row>
          <div className="Section-1">
            <svg
              width="84"
              height="18"
              viewBox="0 0 84 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M3 16.6711L8.96668 4.73778C9.7367 3.19773 11.9344 3.19773 12.7045 4.73778L16.8022 12.9334C17.5723 14.4734 19.77 14.4734 20.54 12.9334L24.6378 4.73778C25.4078 3.19773 27.6056 3.19773 28.3756 4.73778L32.4734 12.9334C33.2434 14.4734 35.4411 14.4734 36.2112 12.9334L40.3089 4.73778C41.079 3.19773 43.2767 3.19773 44.0467 4.73778L48.1445 12.9334C48.9145 14.4734 51.1123 14.4734 51.8823 12.9334L55.9801 4.73778C56.7501 3.19773 58.9478 3.19773 59.7179 4.73778L63.8156 12.9334C64.5857 14.4734 66.7834 14.4734 67.5534 12.9334L71.6512 4.73778C72.4212 3.19773 74.619 3.19773 75.389 4.73778L81.3557 16.6711"
                stroke="#DF6951"
                stroke-width="5.22371"
              />
            </svg>
            <h1>No matter where you’re going to, we’ll take you there</h1>           
          </div>
		  <div className="menu">
              <span>
                <Link>Where to?</Link>
              </span>
              <span>
                <Link>Travel Type</Link>
              </span>
			  <span>
              	<Link>Duration</Link>
			  </span>
            <button>Submit</button>
              
            </div>
			<small>2,500 people booked Tommorowland Event in last 24 hours</small>
        </header>
      </div>
    </div>
    {/* <Carousel autoplay dotPosition='bottom'>
        <div className="Carousel__div1">
          <h3 style={contentStyle}>1</h3>
        </div>
        <div className="Carousel__div2">
          <h3 style={contentStyle}>2</h3>
        </div>
        <div className="Carousel__div3">
          <h3 style={contentStyle}>3</h3>
        </div>
        <div className="Carousel__div4">
          <h3 style={contentStyle}>4</h3>
        </div>
        <div className="Carousel__div4">
          <h3 style={contentStyle}>5</h3>
        </div>
      </Carousel> */}
    </>
  );
};

export default Header;
