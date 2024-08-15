import React from 'react'
import './Footer.css'
import { Container } from 'react-bootstrap'

export default function Footer() {
  return (
    <>
      <Container className='footer'>
        <div className='topFooter altMont'>
          <a href='https://www.behance.net' className='footerLink'>Behance</a>
          <a href='https://www.instagram.com/huesofgigi/' className='footerLink'>Instagram</a>
          <a href='https://x.com/huesofgigi' className='footerLink'>Twitter</a>
        </div>
        <div className='bottomFooter altMont'>
          <span>© Copyright 2024</span>
          <span>HUES OF GIGI</span>
        </div>
      </Container>
    </>
  )
}