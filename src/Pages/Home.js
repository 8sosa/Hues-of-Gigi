import React from 'react'
import './Home.css'
import InfiniteCarousel from '../Components/InfiniteCarousel'
import {Container} from 'react-bootstrap'
import Slider from '../Components/Slider'
import Reach from '../Components/Reach'

export default function Home() {
 
  return (
    <>
      <Container className='d-flex flex-column align-items-center justify-content-center h80'>
        <InfiniteCarousel />
      </Container>
        <section className='currentWork'>
          <div className='overlay'></div>
          <div className='content' >
            <h1 className='contentHeader altMont'>EBO OKAN</h1>
            <p className='contentBody mont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor lacinia neque at maximus. Phasellus iaculis dolor quis metus ornare vestibulum. Donec a est sit amet odio facilisis ultricies et ac magna. Proin mauris augue, lobortis ut justo ut, porta lobortis sem. Vivamus et lectus vitae dui posuere convallis. Nulla sit amet elit fermentum, fringilla augue a, feugiat velit. Etiam finibus eu massa nec dignissim.</p>
            <p className='contentBody mont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor lacinia neque at maximus. Phasellus iaculis dolor quis metus ornare vestibulum. Donec a est sit amet odio facilisis ultricies et ac magna. Proin mauris augue, lobortis ut justo ut, porta lobortis sem. Vivamus et lectus vitae dui posuere convallis. Nulla sit amet elit fermentum, fringilla augue a, feugiat velit. Etiam finibus eu massa nec dignissim.</p>
            <Slider />
            <button className='moreBtn mont'>View More</button>
          </div>
        </section>
      <Container>
        <Reach />
      </Container>
    </>
  )
}