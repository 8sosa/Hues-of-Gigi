import React from 'react'
import './Home.css'
import InfiniteCarousel from '../Components/InfiniteCarousel'
import {Col, Container, Row} from 'react-bootstrap'
// import Slider from '../Components/Slider'
import Pic1 from '../Images/IMG_4612.JPG';
import Pic2 from '../Images/IMG_4613.JPG';
import Pic3 from '../Images/IMG_4614.JPG';
import Reach from '../Components/Reach'

export default function Home() {
 
  return (
    <>
      <Container className='carouselContainer'>
        <InfiniteCarousel />
      </Container>
      <Row className='homeImgRow'>
        <Col className='homeImgCol'><img src={Pic1} alt='' className='homeImg'/></Col>
        <Col className='homeImgCol'><img src={Pic2} alt='' className='homeImg'/></Col>
        <Col className='homeImgCol'><img src={Pic3} alt='' className='homeImg'/></Col>
      </Row>
      <p className='homeQuote mont'>"There will be a quote here, that'll embody the aura of the artworks which i'll send to you."</p>
      <Row className='homeImgRow'>
        <Col className='homeImgCol'><img src={Pic1} alt='' className='homeImg'/></Col>
        <Col className='homeImgCol'><img src={Pic2} alt='' className='homeImg'/></Col>
        <Col className='homeImgCol'><img src={Pic3} alt='' className='homeImg'/></Col>
      </Row>
        {/* <section className='currentWork'>
          <div className='overlay'></div>
          <div className='content' >
            <h1 className='contentHeader altMont'>EBO OKAN</h1>
            <p className='contentBody mont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor lacinia neque at maximus. Phasellus iaculis dolor quis metus ornare vestibulum. Donec a est sit amet odio facilisis ultricies et ac magna. Proin mauris augue, lobortis ut justo ut, porta lobortis sem. Vivamus et lectus vitae dui posuere convallis. Nulla sit amet elit fermentum, fringilla augue a, feugiat velit. Etiam finibus eu massa nec dignissim.</p>
            <p className='contentBody mont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor lacinia neque at maximus. Phasellus iaculis dolor quis metus ornare vestibulum. Donec a est sit amet odio facilisis ultricies et ac magna. Proin mauris augue, lobortis ut justo ut, porta lobortis sem. Vivamus et lectus vitae dui posuere convallis. Nulla sit amet elit fermentum, fringilla augue a, feugiat velit. Etiam finibus eu massa nec dignissim.</p>
            <Slider />
            <a href="/project"><button className='moreBtn mont'>View More</button></a>
          </div>
        </section> */}
      <Container>
        <Reach />
      </Container>
    </>
  )
}