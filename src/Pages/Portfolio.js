import React from 'react'
import './Portfolio.css'
import { Container } from 'react-bootstrap'
import Pic1 from '../Images/IMG_4616.JPG';
import Pic2 from '../Images/IMG_4617.JPG';
import Pic3 from '../Images/IMG_4612.JPG';
import Pic4 from '../Images/IMG_4615.JPG';

export default function Portfolio() {
  return (
    <>
      <Container>
        <h1 className='pageHeader altMont'>Portfolio</h1>
        <div className='portfolio'>
          <a href='/project'>
            <div className='portfolioItem'>
              <img src={Pic1} alt='Ebo Okan' className='portfolioImg' />
              <h3 className='portfolioHead altMont'>Ebo Okan ( Soul Sacrifice)</h3>
              <h5 className='portfolioBody altMont'>Details</h5>
            </div>
          </a>
          <a href='/project'>
            <div className='portfolioItem'>
              <img src={Pic2} alt='Ebo Okan' className='portfolioImg' />
              <h3 className='portfolioHead altMont'>Silentium non est silentium, 2023</h3>
              <h5 className='portfolioBody altMont'>Details</h5>
            </div>
          </a>
          <a href='/project'>
            <div className='portfolioItem'>
              <img src={Pic3} alt='Ebo Okan' className='portfolioImg' />
              <h3 className='portfolioHead altMont'>Apostasia, 2023</h3>
              <h5 className='portfolioBody altMont'>Details</h5>
            </div>
          </a>
          <a href='/project'>
            <div className='portfolioItem'>
              <img src={Pic4} alt='Ebo Okan' className='portfolioImg' />
              <h3 className='portfolioHead altMont'>Anoterós Eaftós, 2022</h3>
              <h5 className='portfolioBody altMont'>Details</h5>
            </div>
          </a>
        </div>
      </Container>
    </>
  )
}