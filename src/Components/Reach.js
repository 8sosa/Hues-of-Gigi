import React from 'react';
import './Reach.css';
import { Container, Form, FloatingLabel } from 'react-bootstrap';

export default function Reach() {

  return ( 
    <>
        <Container>
            <div className='formDiv'>
                <h1 className='ReachHeader altMont'>Reach Out</h1>
               <Form>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Hi, my name is..."
                    className="ReachInput mb-3"
                >
                    <Form.Control type="text" placeholder="Agba Baller" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="My email address is..."
                    className="ReachInput mb-3"
                >
                    <Form.Control type="email" placeholder="My email address is..." />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="I’m reaching out for..."
                    className="ReachInput mb-3"
                >
                    <Form.Control type="textarea" placeholder="I’m reaching out for..." />
                </FloatingLabel>
                <button className="reachBtn altMont" type="submit">
                    Send
                </button>
               </Form>
            </div>
        </Container>
    </>
  );
}