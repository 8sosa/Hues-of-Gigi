import React from 'react'
import './About.css'
import {Container} from 'react-bootstrap'
import Reach from '../Components/Reach'
import AboutImg from '../Images/about.jpeg'
import Pic1 from '../Images/IMG_4612.JPG';
import Pic2 from '../Images/IMG_4613.JPG';
import Pic3 from '../Images/IMG_4614.JPG';

export default function About() {
  return (
    <>
      <Container className='aboutSection'>
        <h1 className='pageHeader altMont'>About me</h1>
        <img src={AboutImg} alt='Adekoya Sarah at Hertitude' className='aboutImg'/>
        <p className='aboutBody'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor lacinia neque at maximus. Phasellus iaculis dolor quis metus ornare vestibulum. Donec a est sit amet odio facilisis ultricies et ac magna. Proin mauris augue, lobortis ut justo ut, porta lobortis sem. Vivamus et lectus vitae dui posuere convallis. Nulla sit amet elit fermentum, fringilla augue a, feugiat velit. Etiam finibus eu massa nec dignissim. Aliquam ut varius mi, at venenatis sapien. Integer vel urna pretium, volutpat est non, elementum eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ut nulla ipsum. Donec viverra justo tempus nulla bibendum, quis tincidunt tellus viverra. Ut elementum auctor sodales. Phasellus erat lectus, feugiat vel risus sed, luctus eleifend leo. Quisque semper tristique justo, vitae euismod ipsum luctus et. Nam vel ex nec justo dapibus ultricies non bibendum turpis.</p>
      </Container>
      <Container className='aboutSection1'>
        <h1 className='pageHeader altMont'>my work</h1>
        <div className='workImgs'>
          <img src={Pic1} alt='keep going' className='workImg'/>
          <img src={Pic2} alt='for every drop' className='workImg'/>
          <img src={Pic3} alt='i am' className='workImg'/>
        </div>
        <p className='aboutBody'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor lacinia neque at maximus. Phasellus iaculis dolor quis metus ornare vestibulum. Donec a est sit amet odio facilisis ultricies et ac magna. Proin mauris augue, lobortis ut justo ut, porta lobortis sem. Vivamus et lectus vitae dui posuere convallis. Nulla sit amet elit fermentum, fringilla augue a, feugiat velit. Etiam finibus eu massa nec dignissim. Aliquam ut varius mi, at venenatis sapien. Integer vel urna pretium, volutpat est non, elementum eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ut nulla ipsum. Donec viverra justo tempus nulla bibendum, quis tincidunt tellus viverra. Ut elementum auctor sodales. Phasellus erat lectus, feugiat vel risus sed, luctus eleifend leo. Quisque semper tristique justo, vitae euismod ipsum luctus et. Nam vel ex nec justo dapibus ultricies non bibendum turpis.</p>
      </Container>
      <Container>
        <Reach />
      </Container>
    </>
  )
}