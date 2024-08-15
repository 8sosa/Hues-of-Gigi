import React from 'react'
import './art.css'
import { Container } from 'react-bootstrap'
import Const from '../Images/comingsoon.png'

export default function Artprints() {
  return (
    <>
      <Container className='artprints'>
        {/* <h1 className='pageHeader altMont'>Artprints</h1> */}
        <img src={Const} alt='art prints coming soon' className='artImg'/>
        <h2 className='pageHeader altMont'>Coming Soon...</h2>
      </Container>
      
    </>
  )
}