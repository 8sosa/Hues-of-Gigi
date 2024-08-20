import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import './Project.css';
import Pic1 from '../Images/IMG_4616.JPG';
import { TiArrowBackOutline } from "react-icons/ti";

export default function Project() {
    const navigate = useNavigate();

  return (
    <>
        <Container className='pageType'>
            <div className='topSection'>
                <TiArrowBackOutline className='icon' onClick={() => navigate(-1)}/>
                <h1 className='portfolioHead altMont m-0 align-self-center'>Ebo Okan ( Soul Sacrifice)</h1>
            </div>
            <div className='bottomSection'>
                <div className='contentSection'>
                    <img src={Pic1} alt='Ebo Okan ( Soul Sacrifice)' className='projectImg' />
                </div>
                <div className='contentSection'>
                    <p className='projectDescription mont'>
                        “In the dance of shadows, illusions linger. Each stolen moment becomes a delicate thread. The heart, a willing captive, succumbs to the enchantment, dancing on the edge.
                        <br/>
                        <br/>
                        Why does the devil(you) remain elusive amidst the desire to evade the chains of torment?”
                    </p>
                </div>
            </div>
        </Container>
    </>
  )
}