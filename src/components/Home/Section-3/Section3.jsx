import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Honeymoon from '../../../img/Honeymoon.svg'
import { motion } from 'framer-motion'
import './Section3.css'

const Section3 = () => {
  return (
	<div className='Section-3'>
		<Container>
			<Row>
				<Col>
					<motion.img 
					initial={{opacity: 0, x: -100}}
					whileInView={{opacity: 1, x: 0}}
					transition={{duration: 1}}	
					viewport={{once: true}}
					src={Honeymoon} alt="" />
				</Col>
				<Col
					as={motion.div}
					initial={{opacity: 0, x: 100}}
					whileInView={{opacity: 1, x: 0}}
					transition={{duration: 1}}
					viewport={{once: true}}
				>
					<h6>Honeymoon Specials</h6>
					<h1>Our Romantic Tropical Destinations</h1>
					<p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
					<a href="#"><button>View Packages</button></a>
				</Col>
			</Row>
		</Container>
	</div>
  )
}

export default Section3