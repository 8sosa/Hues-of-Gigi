import React from 'react'
import './contact.css'
import {Col, Container, Row} from 'react-bootstrap'
import Reach from '../Components/Reach'
import Pic from '../Images/IMG_4614.JPG';
import { FaXTwitter, FaInstagram, FaBehance } from "react-icons/fa6";


export default function Contact() {
  return (
    <>
      <Container className='contactContainer'>
        <h1 className='pageHeader altMont mb-5'>Contact me</h1>
        <Row className='contactSection'>
          <Col className='fitted'>
            <img src={Pic} alt='i am' className='workImg'/>
          </Col>
          <Col className='contactInfo'>
            <div className='contactRow'>
              <p>Email:</p>
              <p>Gigikiwi@gmail.com</p>
            </div>
            <div className='contactRow'>
              <p>Phone:</p>
              <p>0910003733X</p>
            </div>
            <div className='contactRow'>
              <p>Socials:</p>
              <div className='icons'>
                <FaInstagram />
                <FaBehance />
                <FaXTwitter />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Reach />
      </Container>
    </>
  )
}