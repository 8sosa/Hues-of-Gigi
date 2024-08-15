import React from 'react';
import './InfiniteCarousel.css';
import Pic1 from '../Images/IMG_4612.JPG';
import Pic2 from '../Images/IMG_4613.JPG';
import Pic3 from '../Images/IMG_4614.JPG';
import Pic4 from '../Images/IMG_4615.JPG';
import Pic5 from '../Images/IMG_4616.JPG';
import Pic6 from '../Images/IMG_4617.JPG';
import Pic7 from '../Images/IMG_4618.JPG';
import Pic8 from '../Images/IMG_4619.JPG';

export default function InfiniteCarousel() {

  return (
    <>
        <div className='carcar'>
          <div className='overlay'>
            <h1 className='heroTxt'>Hues Of <span className='heroBold'>Gigi</span></h1>
          </div>
            <div className="carousel" >
                <div className="carousel1">
                        <img src={Pic1} alt='this is' className="carImg"/>
                        <img src={Pic2} alt='this is' className="carImg"/>
                        <img src={Pic3} alt='this is' className="carImg"/>
                        <img src={Pic4} alt='this is' className="carImg"/>
                </div>
                <div className="carousel1">
                        <img src={Pic1} alt='this is' className="carImg"/>
                        <img src={Pic2} alt='this is' className="carImg"/>
                        <img src={Pic3} alt='this is' className="carImg"/>
                        <img src={Pic4} alt='this is' className="carImg"/>
                </div>
                <div className="carousel1">
                        <img src={Pic1} alt='this is' className="carImg"/>
                        <img src={Pic2} alt='this is' className="carImg"/>
                        <img src={Pic3} alt='this is' className="carImg"/>
                        <img src={Pic4} alt='this is' className="carImg"/>
                </div>
            </div>
            <div className="carousel" >
                <div className="carousel2">
                        <img src={Pic5} alt='this is' className="carImg"/>
                        <img src={Pic6} alt='this is' className="carImg"/>
                        <img src={Pic7} alt='this is' className="carImg"/>
                        <img src={Pic8} alt='this is' className="carImg"/>
                </div>
                <div className="carousel2">
                        <img src={Pic5} alt='this is' className="carImg"/>
                        <img src={Pic6} alt='this is' className="carImg"/>
                        <img src={Pic7} alt='this is' className="carImg"/>
                        <img src={Pic8} alt='this is' className="carImg"/>
                </div>
                <div className="carousel2">
                        <img src={Pic5} alt='this is' className="carImg"/>
                        <img src={Pic6} alt='this is' className="carImg"/>
                        <img src={Pic7} alt='this is' className="carImg"/>
                        <img src={Pic8} alt='this is' className="carImg"/>
                </div>
            </div>
        </div>
    </>
  );
};
