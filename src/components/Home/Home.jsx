import React from 'react'
import Section1 from './Section-1/Section1'
import Section2 from './Section-2/Section2'
import Section3 from './Section-3/Section3'
import Section4 from './Section-4/Section4'
import Section5 from './Section-5/Section5'
import Header from '../Header/Header'

const Main = () => {
  return (
	<div className='Main'>
		<Header/>
		<Section1/>
		<Section2/>
		<Section3/>
		<Section4/>
		<Section5/>
	</div>
  )
}

export default Main