import React from 'react'
import Company1 from '../../../img/company1.png'
import Company2 from '../../../img/company2.png'
import Company3 from '../../../img/company3.png'
import Company4 from '../../../img/company4.png'
import Company5 from '../../../img/company5.png'
import { motion } from 'framer-motion'
import './Section1.css'

const Section1 = () => {
  return (
	<div className='Section1'>
		<motion.div
		 initial={{opacity: 0}} 
		 whileInView={{opacity: 1}}
		 transition={{duration: 2}} 
		 viewport={{once:true}}
		 className="logos__block"
		>
			<img src={Company1} alt="" />
			<img src={Company2} alt="" />
			<img src={Company3} alt="" />
			<img src={Company4} alt="" />
			<img src={Company5} alt="" />
		</motion.div>
	</div>
  )
}

export default Section1