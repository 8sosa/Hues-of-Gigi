import React from 'react'
import './exhibitions.css'
import EventImg from '../Images/exhibition.jpeg';

import { Container, Row } from 'react-bootstrap';


export default function Exhibitions() {
  return (
    <>
      <Container className='exhibition altMont'>
      <h1 className='pageHeader altMont'>Exhibitions</h1>
      <div className='d-flex flex-column w100 mb-5' data-aos="fade-up" data-aos-anchor-placement="top-center">
        <div className='eventGroupHeader'>
          <h2 className='eventGroupHeaderTxt m-0'>Upcoming Exhibitions</h2>
          <hr className='line'/>
        </div>
        <Row className='eventTab'>
          <div className='exhibitonItem'>
            <img src={EventImg} alt='Child getting blood pressure checked' className='exhibitionImg' />
            <h4 className='eventHeader subHeader'>Exhibition 1</h4>
            <span className='eventBody'>19th November 2099</span>
          </div>
          <div className='exhibitonItem'>
            <img src={EventImg} alt='Child getting blood pressure checked' className='exhibitionImg' />
            <h4 className='eventHeader subHeader'>Exhibition 2</h4>
            <span className='eventBody'>19th November 2099</span>
          </div>
          <div className='exhibitonItem'>
            <img src={EventImg} alt='Child getting blood pressure checked' className='exhibitionImg' />
            <h4 className='eventHeader subHeader'>Exhibition 3</h4>
            <span className='eventBody'>19th November 2099</span>
          </div>
        </Row>    
      </div>
      <div className='d-flex flex-column w100 mb-5' data-aos="fade-up" data-aos-anchor-placement="top-center">
        <div className='eventGroupHeader'>
          <h2 className='eventGroupHeaderTxt m-0'>Previous Exhibitions</h2>
          <hr className='line'/>
        </div>
        <Row className='eventTab'>
          <div className='exhibitonItem'>
            <img src={EventImg} alt='Child getting blood pressure checked' className='exhibitionImg' />
            <h4 className='eventHeader subHeader'>Exhibition 1</h4>
            <span className='eventBody'>19th November 2099</span>
          </div>
          <div className='exhibitonItem'>
            <img src={EventImg} alt='Child getting blood pressure checked' className='exhibitionImg' />
            <h4 className='eventHeader subHeader'>Exhibition 2</h4>
            <span className='eventBody'>19th November 2099</span>
          </div>
        </Row>
      </div> 
    </Container>
    </>
  )
}