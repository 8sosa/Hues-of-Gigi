import React from 'react'
import { Container } from 'react-bootstrap';
import './Exhibition.css';
import EventImg from '../Images/exhibition.jpeg';
import { TiArrowBackOutline } from "react-icons/ti";

export default function Exhibition() {
  return (
    <>
        <Container className='pageType'>
            <div className='topSection'>
                <TiArrowBackOutline className='icon'/>
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
                        Sed faucibus interdum dolor, ac malesuada quam dignissim sit amet. Etiam interdum, velit in consectetur commodo, arcu enim efficitur magna, ut semper lectus lacus eget purus. Cras et leo id quam sodales dapibus eu in sem. Cras in elementum sapien. Duis molestie vehicula varius. Suspendisse congue sit amet mauris quis sodales. Fusce mattis a leo at sagittis. Nulla sagittis quam vel diam tempor ullamcorper. Ut aliquet ligula eget metus tincidunt, lobortis efficitur eros finibus. Integer augue ipsum, efficitur sed dignissim a, volutpat quis lectus. Maecenas quis laoreet elit, a interdum enim. Quisque accumsan maximus justo quis mollis. Proin pharetra vel massa at ornare. Donec vitae nisi eu sapien lacinia ultrices sit amet vel magna. Quisque molestie nisi non urna interdum, efficitur pulvinar erat congue. Nam eu pulvinar nunc, volutpat ultrices nisi.
                    </p>
                </div>
            </div>
        </Container>
    </>
  )
}
