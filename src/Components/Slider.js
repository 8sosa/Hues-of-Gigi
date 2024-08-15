import React from 'react';
import './Slider.css';
import Pic1 from '../Images/IMG_4612.JPG';
import Pic2 from '../Images/IMG_4613.JPG';
import Pic3 from '../Images/IMG_4614.JPG';
import Pic4 from '../Images/IMG_4615.JPG';
import Pic5 from '../Images/IMG_4616.JPG';
import Pic6 from '../Images/IMG_4617.JPG';
import Pic7 from '../Images/IMG_4618.JPG';
import Pic8 from '../Images/IMG_4619.JPG';
import { Container } from 'react-bootstrap';

export default function Slider() {

  return ( 
    <>
        <Container>
            <div className='slider'>
                <img src={Pic1} alt='slider' className='sliderImg'/>
                <img src={Pic2} alt='slider' className='sliderImg'/>
                <img src={Pic3} alt='slider' className='sliderImg'/>
                <img src={Pic4} alt='slider' className='sliderImg'/>
                <img src={Pic5} alt='slider' className='sliderImg'/>
                <img src={Pic6} alt='slider' className='sliderImg'/>
                <img src={Pic7} alt='slider' className='sliderImg'/>
                <img src={Pic8} alt='slider' className='sliderImg'/>
            </div>
        </Container>
    </>
  );
}