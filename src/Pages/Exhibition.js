import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import './exhibition.css';
import EventImg from '../Images/exhibition.jpeg';
import { TiArrowBackOutline } from "react-icons/ti";
import Pic1 from '../Images/IMG_4616.JPG';
import Pic2 from '../Images/IMG_4617.JPG';
import Pic3 from '../Images/IMG_4612.JPG';

export default function Exhibition() {
    const navigate = useNavigate();

  return (
    <>
        <Container className='pageType'>
            <div className='topSection'>
                <TiArrowBackOutline className='icon' onClick={() => navigate(-1)}/>
                <h1 className='portfolioHead altMont m-0 align-self-center'>exhibition 1</h1>
            </div>
            <div className='topSection1'>
                <h1 className='exhibitionSubhead altMont m-0'>some exhibition</h1>
                <h1 className='exhibitionSubhead altMont m-0'>14th March 2024</h1>
            </div>
            <div>

            </div>
            <div className='bottomSection'>
                <div className='contentSection'>
                    <img src={EventImg} alt='Exhibiton 1' className='projectImg' />
                </div>
                <div className='contentSection'>
                    <p className='exhibitonDescription mont'>
                        Sed faucibus interdum dolor, ac malesuada quam dignissim sit amet. Etiam interdum, velit in consectetur commodo, arcu enim efficitur magna, ut semper lectus lacus eget purus. Cras et leo id quam sodales dapibus eu in sem. Cras in elementum sapien. Duis molestie vehicula varius. Suspendisse congue sit amet mauris quis sodales. Fusce mattis a leo at sagittis. Nulla sagittis quam vel diam tempor ullamcorper. Ut aliquet ligula eget metus tincidunt, lobortis efficitur eros finibus. Integer augue ipsum, efficitur sed dignissim a, volutpat quis lectus. Maecenas quis laoreet elit, a interdum enim. Quisque accumsan maximus justo quis mollis.
                    </p>
                </div>
            </div>
            <div className='eventGroupHeader pt-5'>
                <h2 className='eventGroupHeaderTxt m-0'>featured art</h2>
                <hr className='line'/>
            </div>
            <div className='p-3'>
                <div className='portfolio1'>
                    <a href='/project'>
                        <div className='portfolioItem1'>
                            <img src={Pic1} alt='Ebo Okan' className='portfolioImg1' />
                            <h3 className='portfolioHead1 altMont'>Ebo Okan ( Soul Sacrifice)</h3>
                            <h5 className='portfolioBody altMont'>Details</h5>
                        </div>
                    </a>
                    <a href='/project'>
                        <div className='portfolioItem1'>
                            <img src={Pic2} alt='Ebo Okan' className='portfolioImg1' />
                            <h3 className='portfolioHead1 altMont'>Silentium non est silentium, 2023</h3>
                            <h5 className='portfolioBody altMont'>Details</h5>
                        </div>
                    </a>
                    <a href='/project'>
                        <div className='portfolioItem1'>
                            <img src={Pic3} alt='Ebo Okan' className='portfolioImg1' />
                            <h3 className='portfolioHead1 altMont'>Apostasia, 2023</h3>
                            <h5 className='portfolioBody altMont'>Details</h5>
                        </div>
                    </a>
                </div>
            </div>
        </Container>
    </>
  )
}
